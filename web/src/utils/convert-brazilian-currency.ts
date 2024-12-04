export function convertBrazilianCurrency(value: string) {
  let numericString = value.replace(/[^\d,.-]/g, '')

  numericString = numericString.replace(/\./g, '')

  numericString = numericString.replace(',', '.')

  const numberValue = parseFloat(numericString)
  if (isNaN(numberValue)) {
    throw new Error(`Cannot convert "${value}" to a number.`)
  }
  return numberValue
}
