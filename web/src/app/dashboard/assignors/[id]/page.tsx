import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default async function AssignorDetails({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">Assignor Details</h1>
      <div className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md">
        <div className="mb-4">
          <p className="mb-2 text-sm font-bold text-gray-700">ID:</p>
          <p className="text-gray-700">{params.id}</p>
        </div>
        <div className="mb-4">
          <p className="mb-2 text-sm font-bold text-gray-700">Name:</p>
        </div>
        <div className="mb-4">
          <p className="mb-2 text-sm font-bold text-gray-700">Document:</p>
        </div>
      </div>
      <Link href="/assignors">
        <Button variant="outline">Back to Assignors</Button>
      </Link>
    </div>
  )
}
