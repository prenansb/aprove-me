'use client'

import { ReactNode, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { assignorControllerCreate } from '@/http/client/api'
import { useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { AssignorForm, AssignorFormSchema } from './assignor-form'

export function NewAssignorDialog({
  children,
  currentPage,
}: {
  children: ReactNode
  currentPage: number
}) {
  const [open, setOpen] = useState(false)
  const queryClient = useQueryClient()

  const handleSubmit = async (data: AssignorFormSchema) => {
    await assignorControllerCreate(data)
    await queryClient.invalidateQueries({ queryKey: ['assignors', currentPage] })

    setOpen(false)
    toast.success('Cedente criado com sucesso.')
  }

  const handleCloseDialog = () => {
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Criar novo Cedente</DialogTitle>
        </DialogHeader>
        <AssignorForm onSubmit={handleSubmit} onCancel={handleCloseDialog} />
      </DialogContent>
    </Dialog>
  )
}
