const isStringContainsOnlyBr = (val: string) => {
  let result = false
  if (val === "<br>" || val === "<br/>") {
    result = true
  }

  return result
}

export default isStringContainsOnlyBr
