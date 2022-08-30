export const Price = ({ value, currency }) => {
  let symbol = ''
  switch (currency) {
    case 'EUR':
      symbol = '€'
      break
    case 'GBP':
      symbol = '£'
  }
  return `${symbol}${value}`
}
