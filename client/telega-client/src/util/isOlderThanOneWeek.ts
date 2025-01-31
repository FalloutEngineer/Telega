const isOlderThanOneWeek = (givenDate: Date): boolean => {
  const now = new Date()

  const inputDate = new Date(
    givenDate.getFullYear(),
    givenDate.getMonth(),
    givenDate.getDate()
  )
  const oneWeekAgo = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - 7
  )

  return inputDate <= oneWeekAgo
}

export default isOlderThanOneWeek
