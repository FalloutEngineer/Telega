import React from "react"
import styles from "./lastMessageDate.module.css"

interface LastMessageDateProps {
  date: Date
}

export default function LastMessageDate(props: LastMessageDateProps) {
  return <div className={styles.date}>00:00</div>
}
