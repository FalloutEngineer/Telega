import React, { useEffect, useRef, useState } from "react"
import styles from "./TextBox.module.css"
import isStringContainsOnlyBr from "../../../util/isStringContainsOnlyBr"

type TextBoxProps = {
  name?: string
  id?: string
  placeholder?: string
  readonly?: boolean
  maxRows?: number
  innerStyle?: React.CSSProperties
  containerStyle?: React.CSSProperties
  onChange?: (e: React.ChangeEvent<HTMLSpanElement>) => void
  tabIndex?: number
  onEnter?: (e: string) => void
  value?: string
}

const TextBox = React.memo((props: TextBoxProps) => {
  const [value, setValue] = useState(props.value ?? "")
  const spanRef = useRef<HTMLSpanElement>(null)

  const isContendEditable =
    props.readonly !== undefined ? !props.readonly : true

  const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === "Enter" && !e.shiftKey && value !== "") {
      e.preventDefault()
      if (props.onEnter) {
        props.onEnter(value)
      }
    }
  }

  const inputHandler = (e: React.ChangeEvent<HTMLSpanElement>) => {
    if (isStringContainsOnlyBr(e.target.innerHTML)) {
      e.target.innerText = ""
    }
    setValue(e.target.innerText)
    if (props.onChange) {
      props.onChange(e)
    }
  }

  const getCursorClass = isContendEditable ? "cursorText" : "cursorAuto"

  const getSelectableClass = isContendEditable ? "selectable" : "unselectable"

  const getTabIndex = props.tabIndex ? props.tabIndex : 0

  useEffect(() => {
    if (props.value) {
      setValue(props.value)
    }
    if (spanRef.current && props.value !== spanRef.current.innerText) {
      spanRef.current.innerText = props.value ?? ""
    }
  }, [props.value])

  return (
    <p className={`${styles.textboxContainer}`} style={props.containerStyle}>
      <span
        role="textbox"
        contentEditable={isContendEditable}
        className={`${styles.textbox} ${getCursorClass} ${getSelectableClass}`}
        style={props.innerStyle}
        ref={spanRef}
        onKeyDown={handleKeyDown}
        onInput={inputHandler}
        data-placeholder={props.placeholder}
        tabIndex={getTabIndex}
      ></span>
    </p>
  )
})

export default TextBox
