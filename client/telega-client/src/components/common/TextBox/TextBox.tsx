import React, { LegacyRef, useEffect } from "react"
import styles from "./TextBox.module.css"
import clearBrOnEditableEmpty from "../../../util/clearBrOnEditableEmpty"

type TextBoxProps = {
  name?: string
  id?: string
  placeholder?: string
  readonly?: boolean
  maxRows?: number
  direction?: TextDirection
  style?: React.CSSProperties
  ref?: LegacyRef<HTMLSpanElement>
  onChange?: (e: React.ChangeEvent<HTMLSpanElement>) => void
  tabIndex?: number
}

const TextBox = React.memo((props: TextBoxProps) => {
  const isContendEditable =
    props.readonly !== undefined ? !props.readonly : true

  const inputHandler = (e: React.ChangeEvent<HTMLSpanElement>) => {
    clearBrOnEditableEmpty(e)
    if (props.onChange) {
      props.onChange(e)
    }
  }

  useEffect(() => {})

  const getCursorClass = isContendEditable ? "cursorText" : "cursorAuto"

  const getSelectableClass = isContendEditable ? "selectable" : "unselectable"

  const getTabIndex = props.tabIndex ? props.tabIndex : 0

  return (
    <p className={`${styles.textboxContainer}`}>
      <span
        role="textbox"
        contentEditable={isContendEditable}
        className={`${styles.textbox} ${getCursorClass} ${getSelectableClass}`}
        style={props.style}
        ref={props.ref}
        onInput={inputHandler}
        data-placeholder={props.placeholder}
        tabIndex={getTabIndex}
      ></span>
    </p>
  )
})

export default TextBox
