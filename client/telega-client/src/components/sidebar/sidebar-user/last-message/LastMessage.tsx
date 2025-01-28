import React from "react"
import styles from "./lastMessage.module.css"

interface LastMessageProps {
  message: string
}

export default function LastMessage(props: LastMessageProps) {
  return (
    <div className={styles.container}>
      <div className={styles.message}>{props.message}</div>
    </div>
  )
}
