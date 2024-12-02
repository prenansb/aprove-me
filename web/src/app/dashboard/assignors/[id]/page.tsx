import Link from 'next/link'
import { Button } from '@/components/ui/button'

async function getAssignor(id: string) {
  const res = await fetch(`http://localhost:3000/api/assignors/${id}`)
  if (!res.ok) {
    throw new Error('Failed to fetch assignor')
  }
  return res.json()
}

export default async function AssignorDetails({ params }: { params: { id: string } }) {
  const assignor = await getAssignor(params.id)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">Assignor Details</h1>
      <div className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md">
        <div className="mb-4">
          <p className="mb-2 text-sm font-bold text-gray-700">ID:</p>
          <p className="text-gray-700">{assignor.id}</p>
        </div>
        <div className="mb-4">
          <p className="mb-2 text-sm font-bold text-gray-700">Name:</p>
          <p className="text-gray-700">{assignor.name}</p>
        </div>
        <div className="mb-4">
          <p className="mb-2 text-sm font-bold text-gray-700">Document:</p>
          <p className="text-gray-700">{assignor.document}</p>
        </div>
      </div>
      <Link href="/assignors">
        <Button variant="outline">Back to Assignors</Button>
      </Link>
    </div>
  )
}
