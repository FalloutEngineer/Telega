import { describe, expect, test } from "@jest/globals"
import getFormattedLastTimeMessage from "./getFormattedLastTimeMessage"

describe("getFormattedLastTimeMessage", () => {
  test("should return string in HH:MM format if today", () => {
    const now = new Date()
    const nowString = now.toString()
    expect(getFormattedLastTimeMessage(nowString)).toMatch(/^\d{2}:\d{2}$/)
  })

  test("should return short week string when time is less than a week ago but not today", () => {
    const time = new Date()
    time.setDate(time.getDate() - 1)
    const timeString = time.toString()
    expect(getFormattedLastTimeMessage(timeString).split("").length <= 3).toBe(
      true
    )
  })

  test("should return full date in dd.mm.yyyy format if time is more than a week ago", () => {
    const time = new Date()
    time.setDate(time.getDate() - 7)
    const timeString = time.toString()
    expect(getFormattedLastTimeMessage(timeString).length === 10).toBe(true)
  })
})
