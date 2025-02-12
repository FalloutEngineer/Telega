import React from "react"
import styles from "./message.module.css"

type MessageFallbackProps = {
  isMy: boolean
}

const MessageFallback = (props: MessageFallbackProps) => {
  return (
    <li className={`${styles.messageBody} ${props.isMy ? styles.my : ""}`}>
      Something went wrong...
    </li>
  )
}

export default MessageFallback
