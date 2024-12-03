'use client'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { CalendarIcon, Check, ChevronsUpDown } from 'lucide-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './ui/command'
import { useAssignorControllerListAll } from '@/http/client/api'
import { CurrencyInput } from './ui/currency-input'

const formSchema = z.object({
  value: z
    .number()
    .min(0.01, 'Value must be greater than 0')
    .multipleOf(0.01, 'Value can only have up to 2 decimal places'),
  emissionDate: z.string().min(1, 'Emission date is required'),
  assignorId: z.string().min(1, 'Assignor is required'),
})

export type PayableFormData = z.infer<typeof formSchema>

export function PayableForm({
  onSubmit,
}: {
  onSubmit: (data: PayableFormData) => void
}) {
  const { data: assignors = [] } = useAssignorControllerListAll()

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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="value"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Valor</FormLabel>
              <FormControl>
                <CurrencyInput
                  name={field.name}
                  placeholder="R$ 0,00"
                  prefix="R$ "
                  decimalsLimit={2}
                  decimalSeparator=","
                  groupSeparator="."
                />
              </FormControl>
              <FormDescription>Insira um valor em reais.</FormDescription>
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
                        format(field.value, 'PPP')
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={date => date > new Date() || date < new Date('1900-01-01')}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>A data que o pagável foi emitido.</FormDescription>
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
                        ? assignors.find(assignor => assignor.id === field.value)?.name
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
                        {assignors.map(assignor => (
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
              <FormDescription>Select the assignor for this payable.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Criar Pagável</Button>
      </form>
    </Form>
  )
}
