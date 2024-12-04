'use client'

import { ReactNode, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { payableControllerCreate } from '@/http/client/api'
import { convertBrazilianCurrency } from '@/utils/convert-brazilian-currency'
import { useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { PayableForm, PayableFormData } from './payable-form'

export function NewPayableDialog({
  children,
  currentPage,
}: {
  children: ReactNode
  currentPage: number
}) {
  const [open, setOpen] = useState(false)
  const queryClient = useQueryClient()

  const handleSubmit = async (data: PayableFormData) => {
    const value = convertBrazilianCurrency(data.value)
    const date = data.emissionDate.toISOString()

    await payableControllerCreate({
      value,
      emissionDate: new Date(date),
      assignorId: data.assignorId,
    })

    await queryClient.invalidateQueries({ queryKey: ['payables', currentPage] })

    setOpen(false)
    toast.success('Pagável criado com sucesso.')
  }

  const handleCloseDialog = () => {
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Criar novo Pagável</DialogTitle>
        </DialogHeader>
        <PayableForm onSubmit={handleSubmit} onCancel={handleCloseDialog} />
      </DialogContent>
    </Dialog>
  )
}
