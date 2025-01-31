import { describe, expect, test } from "@jest/globals"
import isDateToday from "./isDateToday"

describe("isDateToday", () => {
  test("should return true if today's date matches the input date", () => {
    const inputDate = new Date()
    expect(isDateToday(inputDate)).toBe(true)
  })

  test("should return false if yesterday's date matches the input date", () => {
    const inputDate = new Date()
    inputDate.setDate(inputDate.getDate() + 1)
    expect(isDateToday(inputDate)).toBe(false)
  })

  test("should return false if tomorrow's date matches the input date", () => {
    const inputDate = new Date()
    inputDate.setDate(inputDate.getDate() - 1)
    expect(isDateToday(inputDate)).toBe(false)
  })
})
