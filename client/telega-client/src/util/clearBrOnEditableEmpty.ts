const clearBrOnEditableEmpty = (e: React.ChangeEvent<HTMLSpanElement>) => {
  if (e.target.innerHTML.match(/<br\/?>/)) {
    e.target.innerHTML = ""
  }
}

export default clearBrOnEditableEmpty
