'use client'

import { ReactNode, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useToast } from '@/hooks/use-toast'
import { assignorControllerCreate } from '@/http/client/api'
import { AssignorForm, AssignorFormSchema } from './assignor-form'

export function NewAssignorDialog({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (data: AssignorFormSchema) => {
    const response = await assignorControllerCreate(data)

    console.log(response)

    setOpen(false)
    toast({
      title: 'Success',
      description: 'New assignor created successfully.',
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Criar novo Cedente</DialogTitle>
        </DialogHeader>
        <AssignorForm onSubmit={handleSubmit} />
      </DialogContent>
    </Dialog>
  )
}
