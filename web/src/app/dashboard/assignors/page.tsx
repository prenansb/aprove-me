'use client'

import { useState } from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { assignorControllerDelete, useListAssignors } from '@/http/client/api'
import { Eye, MoreVertical, Pencil, Plus, Trash2 } from 'lucide-react'
import { NewAssignorDialog } from './_components/new-assignor-dialog'

export default function Assignors() {
  const [currentPage, setCurrentPage] = useState(1)

  const { data: listResponse, refetch } = useListAssignors({
    query: {
      queryKey: ['assignors', currentPage],
    },
  })

  async function handleDeleteAssignor(id: string) {
    await assignorControllerDelete(id)
    await refetch()
  }

  const totalPages = listResponse?.meta?.lastPage ?? 1

  return (
    <div className="px-4 pb-8">
      <div className="mb-4 flex items-end justify-between">
        <h3 className="text-lg font-semibold">Todos os Cedentes</h3>
        <NewAssignorDialog currentPage={currentPage}>
          <Button className="ml-auto">
            <Plus className="mr-2 h-4 w-4" />
            Novo Cedente
          </Button>
        </NewAssignorDialog>
      </div>
      <div className="flex flex-col py-2">
        <Card>
          <CardContent className="flex flex-col p-2 px-5">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Id</TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead>Documento</TableHead>
                  <TableHead>Telefone</TableHead>
                  <TableHead>Email</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {listResponse?.data?.map(assignor => (
                  <TableRow key={assignor.id}>
                    <TableCell className="w-[120px] truncate text-left">
                      <span className="inline-block w-[15ch] overflow-hidden text-ellipsis">
                        {assignor.id}
                      </span>
                    </TableCell>
                    <TableCell className="w-[180px] text-left">{assignor.name}</TableCell>
                    <TableCell className="w-[250px] text-left">
                      {assignor.document}
                    </TableCell>
                    <TableCell className="w-[150px] text-left">
                      {assignor.phone}
                    </TableCell>
                    <TableCell className="text-left">{assignor.email}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className="p-2" type="button">
                            <MoreVertical className="h-4 w-4" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            Visualizar
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Pencil className="mr-2 h-4 w-4" />
                            Editar
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />

                          <AlertDialog>
                            <AlertDialogTrigger className="w-full text-destructive hover:bg-none">
                              <DropdownMenuItem
                                className="hover:text-destructive"
                                onSelect={e => e.preventDefault()}
                              >
                                <Trash2 className="mr-2 h-4 w-4" />
                                Excluir
                              </DropdownMenuItem>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Excluir cedente</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Tem certeza que deseja excluir este cedente? Esta ação
                                  não pode ser desfeita.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => handleDeleteAssignor(assignor.id ?? '')}
                                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                >
                                  Excluir
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <div className="ml-auto py-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>

              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem key={i + 1}>
                  <PaginationLink
                    onClick={() => setCurrentPage(i + 1)}
                    isActive={currentPage === i + 1}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  className={
                    currentPage === totalPages ? 'pointer-events-none opacity-50' : ''
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  )
}
