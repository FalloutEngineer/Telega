import { describe, expect, test } from "@jest/globals"
import isOlderThanOneWeek from "./isOlderThanOneWeek"

describe("isOlderThanOneWeek", () => {
  test("should return true if the date is older than one week, step = day", () => {
    const now = new Date()
    const oneWeekAgo = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() - 7
    )
    expect(isOlderThanOneWeek(oneWeekAgo)).toBe(true)
  })

  test("should return false if the date is not older than one week, step = day", () => {
    const currentDate = new Date()
    expect(isOlderThanOneWeek(currentDate)).toBe(false)
  })
})
