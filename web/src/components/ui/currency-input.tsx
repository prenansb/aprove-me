'use client'

import { cn } from '@/lib/utils'
import { NumericFormat } from 'react-number-format'

type ContentProps = React.ComponentProps<typeof NumericFormat>

function CurrencyInput({ className, ...props }: ContentProps) {
  return (
    <NumericFormat
      thousandSeparator="."
      decimalSeparator=","
      prefix="R$ "
      decimalScale={2}
      className={cn(
        'border-mauve-6 bg-mauve-3 text-mauve-12 caret-violet-11 selection:bg-violet-9 placeholder:text-mauve-11 focus:bg-mauve-2 focus:ring-violet-8 hover:[&:not(:focus)]:bg-mauve-4 h-9 w-full rounded border py-2 pl-3 pr-2 text-sm font-medium tabular-nums outline-none transition selection:text-white focus:z-10 focus:ring-1',
        className,
      )}
      {...props}
    />
  )
}

export { CurrencyInput }
