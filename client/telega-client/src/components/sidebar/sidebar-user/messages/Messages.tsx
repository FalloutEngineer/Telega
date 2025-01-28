import React from "react"
import styles from "./messages.module.css"

interface MessagesProps {
  count: number
}

export default function Messages(props: MessagesProps) {
  return props.count === 0 ? null : (
    <div className={styles.messages}>
      {props.count > 9999 ? "+9999" : props.count}
    </div>
  )
}
