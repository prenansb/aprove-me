import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Eye, Pencil, Plus, Trash2 } from 'lucide-react'

async function getAssignors() {
  // This is a mock function. Replace with actual API call.
  return [
    { id: 1, name: 'Acme Corp', document: '123456789', activePayables: 5 },
    { id: 2, name: 'TechStart Inc', document: '987654321', activePayables: 3 },
    { id: 3, name: 'Global Enterprises', document: '456789123', activePayables: 7 },
  ]
}

export default async function Assignors() {
  const assignors = await getAssignors()

  return (
    <div className="container mx-auto space-y-8 px-4 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold lg:text-4xl">Cedentes</h1>
        <Link href="/assignors/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Novo Cedente
          </Button>
        </Link>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Todos Cedentes</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Documento</TableHead>
                <TableHead>Telefone</TableHead>
                <TableHead>Email</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assignors.map(assignor => (
                <TableRow key={assignor.id}>
                  <TableCell className="font-medium">{assignor.name}</TableCell>
                  <TableCell>{assignor.document}</TableCell>
                  <TableCell>{assignor.activePayables}</TableCell>
                  <TableCell>{assignor.activePayables}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Link href={`/assignors/${assignor.id}`}>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">View</span>
                        </Button>
                      </Link>
                      <Link href={`/assignors/${assignor.id}/edit`}>
                        <Button variant="outline" size="sm">
                          <Pencil className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
