export const reviewBudget = (budget, balance) => {
  let classAlert

  if (budget / 4 > balance) {
    classAlert = 'alert alert-danger'
  } else if (budget / 2 > balance) {
    classAlert = 'alert alert-warning'
  } else {
    classAlert = 'alert alert-success'
  }

  return classAlert
}
