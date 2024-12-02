'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'
import { useForm } from 'react-hook-form'

type FormData = {
  name: string
  document: string
}

export default function NewAssignor() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  const router = useRouter()
  const { toast } = useToast()

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/assignors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast({
          title: 'Success',
          description: 'Assignor registered successfully',
        })
        router.push('/assignors')
      } else {
        throw new Error('Failed to register assignor')
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to register assignor',
        variant: 'destructive',
      })
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">Register Assignor</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Input
            type="text"
            placeholder="Name"
            {...register('name', { required: true })}
          />
          {errors.name && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <Input
            type="text"
            placeholder="Document"
            {...register('document', { required: true })}
          />
          {errors.document && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <Button type="submit">Register Assignor</Button>
      </form>
    </div>
  )
}
