'use client'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { CurrencyInput } from '@/components/ui/currency-input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { useListAssignors } from '@/http/client/api'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { CalendarIcon, Check, ChevronsUpDown } from 'lucide-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const formSchema = z.object({
  value: z.string(),
  emissionDate: z.date(),
  assignorId: z.string().min(1),
})

export type PayableFormData = z.infer<typeof formSchema>

export function PayableForm({
  onSubmit,
  onCancel,
}: {
  onSubmit: (data: PayableFormData) => void
  onCancel: () => void
}) {
  const { data: assignors = [] } = useListAssignors()

  const form = useForm<PayableFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      value: '',
      emissionDate: new Date(),
      assignorId: '',
    },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <FormField
          control={form.control}
          name="value"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Valor</FormLabel>
              <FormControl>
                <CurrencyInput placeholder="R$ 0,00" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="emissionDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Data de emissão</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-[240px] pl-3 text-left font-normal',
                        !field.value && 'text-muted-foreground',
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'dd/MM/yyyy', { locale: ptBR })
                      ) : (
                        <span>Selecione uma data</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    locale={ptBR}
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="assignorId"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Assignor</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        'w-[240px] justify-between',
                        !field.value && 'text-muted-foreground',
                      )}
                    >
                      {field.value
                        ? assignors.data?.find(assignor => assignor.id === field.value)
                            ?.name
                        : 'Select assignor'}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[240px] p-0">
                  <Command>
                    <CommandInput placeholder="Search assignor..." />
                    <CommandList>
                      <CommandEmpty>No assignor found.</CommandEmpty>
                      <CommandGroup>
                        {assignors.data?.map(assignor => (
                          <CommandItem
                            value={assignor.id}
                            key={assignor.id}
                            onSelect={() => {
                              form.setValue('assignorId', assignor.id)
                            }}
                          >
                            <Check
                              className={cn(
                                'mr-2 h-4 w-4',
                                assignor.id === field.value ? 'opacity-100' : 'opacity-0',
                              )}
                            />
                            {assignor.name}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-4 flex justify-end gap-4">
          <Button onClick={onCancel} variant="outline" type="button">
            Cancelar
          </Button>

          <Button type="submit">Criar pagável</Button>
        </div>
      </form>
    </Form>
  )
}
