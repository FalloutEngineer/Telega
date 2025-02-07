import { describe, expect, test } from "@jest/globals"
import isStringContainsOnlyBr from "./isStringContainsOnlyBr"

describe("isStringContainsOnlyBr.test", () => {
  test("Return true if string contains only one <br>", () => {
    expect(isStringContainsOnlyBr("<br>")).toBe(true)
  })

  test("Return true if string contains only one <br/>", () => {
    expect(isStringContainsOnlyBr("<br/>")).toBe(true)
  })

  test("Return false if string starts from <br> but with more content", () => {
    expect(isStringContainsOnlyBr("<br>hello")).toBe(false)
  })
  test("Return false if string consists of several brs", () => {
    expect(isStringContainsOnlyBr("<br><br>")).toBe(false)
  })

  test("Return false if no <br> is present in the beginning of the string", () => {
    expect(isStringContainsOnlyBr("hello")).toBe(false)
  })
})
