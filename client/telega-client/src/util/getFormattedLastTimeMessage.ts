import isDateToday from "./isDateToday"
import isOlderThanOneWeek from "./isOlderThanOneWeek"

const getFormattedLastTimeMessage = (lastTime: string): string => {
  const givenDate = new Date(lastTime)
  const isToday = isDateToday(givenDate)
  const isOlderThanWeek = isOlderThanOneWeek(givenDate)
  const locale = navigator.language

  if (isToday) {
    const dateObj = {
      hf: 0,
      hs: 0,
      mf: 0,
      ms: 0,
    }
    const hours = givenDate.getHours()
    const minutes = givenDate.getMinutes()

    if (hours < 10) {
      dateObj.hf = 0
      dateObj.hs = hours
    } else {
      dateObj.hf = Math.floor(hours / 10)
      dateObj.hs = Math.floor(hours % 10)
    }

    if (minutes < 10) {
      dateObj.mf = 0
      dateObj.ms = minutes
    } else {
      dateObj.mf = Math.floor(minutes / 10)
      dateObj.ms = Math.floor(minutes % 10)
    }

    return `${dateObj.hf}${dateObj.hs}:${dateObj.mf}${dateObj.ms}`
  } else {
    if (isOlderThanWeek) {
      return givenDate.toLocaleDateString(locale)
    } else {
      return givenDate.toLocaleDateString("en-US", {
        weekday: "short",
      })
    }
  }
}
export default getFormattedLastTimeMessage
