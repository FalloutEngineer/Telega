import getFormattedTime from "./getFormattedTime"
import isDateToday from "./isDateToday"
import isOlderThanOneWeek from "./isOlderThanOneWeek"

const getFormattedLastTimeMessage = (lastTime: string): string => {
  const givenDate = new Date(lastTime)
  const isToday = isDateToday(givenDate)
  const isOlderThanWeek = isOlderThanOneWeek(givenDate)
  const locale = navigator.language

  let result = getFormattedTime(givenDate)

  if (!isToday) {
    if (isOlderThanWeek) {
      result = givenDate.toLocaleDateString(locale)
    } else {
      result = givenDate.toLocaleDateString("en-US", {
        weekday: "short",
      })
    }
  }

  return result
}
export default getFormattedLastTimeMessage
