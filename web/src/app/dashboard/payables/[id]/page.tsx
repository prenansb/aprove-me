import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Pencil } from 'lucide-react'

async function getPayable(id: string) {
  // This is a mock function. Replace with actual API call.
  return {
    id,
    value: 1000,
    emissionDate: '2023-06-01',
    dueDate: '2023-07-01',
    status: 'Pending',
    assignorId: 'assignor1',
    assignorName: 'Assignor Company',
  }
}

export default async function PayableDetails({ params }: { params: { id: string } }) {
  const payable = await getPayable(params.id)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/payables">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Payables
          </Button>
        </Link>
      </div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-4xl font-bold">Payable Details</h1>
        <Link href={`/payables/${payable.id}/edit`}>
          <Button>
            <Pencil className="mr-2 h-4 w-4" />
            Edit Payable
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Payable Information</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <dt className="font-medium text-gray-500">ID</dt>
                <dd className="mt-1 text-gray-900">{payable.id}</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-500">Value</dt>
                <dd className="mt-1 text-gray-900">${payable.value.toFixed(2)}</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-500">Emission Date</dt>
                <dd className="mt-1 text-gray-900">
                  {new Date(payable.emissionDate).toLocaleDateString()}
                </dd>
              </div>
              <div>
                <dt className="font-medium text-gray-500">Due Date</dt>
                <dd className="mt-1 text-gray-900">
                  {new Date(payable.dueDate).toLocaleDateString()}
                </dd>
              </div>
              <div>
                <dt className="font-medium text-gray-500">Status</dt>
                <dd className="mt-1 text-gray-900">
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-medium ${payable.status === 'Paid'
                        ? 'bg-green-100 text-green-800'
                        : payable.status === 'Overdue'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                  >
                    {payable.status}
                  </span>
                </dd>
              </div>
            </dl>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Assignor Information</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-1 gap-4">
              <div>
                <dt className="font-medium text-gray-500">Assignor ID</dt>
                <dd className="mt-1 text-gray-900">{payable.assignorId}</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-500">Assignor Name</dt>
                <dd className="mt-1 text-gray-900">{payable.assignorName}</dd>
              </div>
            </dl>
            <div className="mt-6">
              <Link href={`/assignors/${payable.assignorId}`}>
                <Button variant="outline">View Assignor Details</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
