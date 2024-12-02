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
import { Eye, Pencil, Trash2 } from 'lucide-react'

async function getPayables() {
  // This is a mock function. Replace with actual API call.
  return [
    { id: 1, value: 1000, emissionDate: '2023-06-01', status: 'Pending' },
    { id: 2, value: 2000, emissionDate: '2023-06-02', status: 'Paid' },
    { id: 3, value: 3000, emissionDate: '2023-06-03', status: 'Overdue' },
  ]
}

export default async function Payables() {
  const payables = await getPayables()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-4xl font-bold">Pagáveis</h1>
        <Link href="/payables/new">
          <Button>Novo Pagável</Button>
        </Link>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Todos os Pagáveis</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Data de Emissão</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payables.map(payable => (
                <TableRow key={payable.id}>
                  <TableCell>{payable.id}</TableCell>
                  <TableCell>${payable.value.toFixed(2)}</TableCell>
                  <TableCell>
                    {new Date(payable.emissionDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Link href={`/payables/${payable.id}`}>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Link href={`/payables/${payable.id}/edit`}>
                        <Button variant="outline" size="sm">
                          <Pencil className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4" />
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
