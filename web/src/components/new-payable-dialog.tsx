'use client'

import { ReactNode, useState } from 'react'
import { PayableForm, PayableFormData } from '@/components/payable-form'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useToast } from '@/hooks/use-toast'
import { payableControllerCreate } from '@/http/client/api'

export function NewPayableDialog({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (data: PayableFormData) => {
    console.log(data)

    // const response = await payableControllerCreate(data)

    // console.log(response)

    setOpen(false)
    toast({
      title: 'Success',
      description: 'New payable created successfully.',
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Crie um novo Pagável</DialogTitle>
        </DialogHeader>
        <PayableForm onSubmit={handleSubmit} />
      </DialogContent>
    </Dialog>
  )
}
