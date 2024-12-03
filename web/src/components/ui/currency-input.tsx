'use client'

import { cn } from '@/lib/utils'
import CurrencyInputField from 'react-currency-input-field'

type ContentProps = React.ComponentProps<typeof CurrencyInputField>

function CurrencyInput({ className, ...props }: ContentProps) {
  return (
    <CurrencyInputField
      decimalScale={2}
      allowNegativeValue={false}
      className={cn(
        'h-9 w-full rounded border border-mauve-6 bg-mauve-3 py-2 pl-3 pr-2 text-sm font-medium tabular-nums text-mauve-12 caret-violet-11 outline-none transition selection:bg-violet-9 selection:text-white placeholder:text-mauve-11 focus:z-10 focus:bg-mauve-2 focus:ring-1 focus:ring-violet-8 hover:[&:not(:focus)]:bg-mauve-4',
        className,
      )}
      {...props}
    />
  )
}

export { CurrencyInput }