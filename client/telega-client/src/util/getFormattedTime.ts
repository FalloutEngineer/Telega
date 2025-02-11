const getFormattedTime = (time: Date): string => {
  const dateObj = {
    hf: 0,
    hs: 0,
    mf: 0,
    ms: 0,
  }
  const hours = time.getHours()
  const minutes = time.getMinutes()

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
}

export default getFormattedTime
