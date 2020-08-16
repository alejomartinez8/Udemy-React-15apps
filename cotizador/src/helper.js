// Get Year Difference

export function getYearDifference(year) {
  return new Date().getFullYear() - year
}

// Calc brand
export function brandCalc(brand) {
  let value

  switch (brand) {
    case 'european':
      value = 1.3
      break

    case 'american':
      value = 1.15
      break

    case 'asian':
      value = 1.05
      break

    default:
      break
  }

  return value
}

// calc plan basic - full
export function planCalc(plan) {
  return plan === 'basic' ? 1.2 : 1.5
}

// Uppercase
export function capitalCase(text) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}
