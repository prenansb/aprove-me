'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { useForm } from 'react-hook-form'

type FormData = {
  value: number
  emissionDate: string
  dueDate: string
  assignorId: string
}

export default function NewPayable() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  const [assignors, _] = useState([]) // This should be populated from the API
  const router = useRouter()
  const { toast } = useToast()

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/payables', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast({
          title: 'Success',
          description: 'Payable registered successfully',
        })
        router.push('/payables')
      } else {
        throw new Error('Failed to register payable')
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to register payable',
        variant: 'destructive',
      })
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">Register Payable</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Input
            type="number"
            placeholder="Value"
            {...register('value', { required: true, min: 0 })}
          />
          {errors.value && (
            <span className="text-red-500">
              This field is required and must be a positive number
            </span>
          )}
        </div>
        <div>
          <Input
            type="date"
            placeholder="Emission Date"
            {...register('emissionDate', { required: true })}
          />
          {errors.emissionDate && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div>
          <Input
            type="date"
            placeholder="Due Date"
            {...register('dueDate', { required: true })}
          />
          {errors.dueDate && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <Select
            onValueChange={value =>
              register('assignorId').onChange({ target: { value } })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Assignor" />
            </SelectTrigger>
            <SelectContent>
              {assignors.map((assignor: any) => (
                <SelectItem key={assignor.id} value={assignor.id}>
                  {assignor.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.assignorId && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <Button type="submit">Register Payable</Button>
      </form>
    </div>
  )
}
