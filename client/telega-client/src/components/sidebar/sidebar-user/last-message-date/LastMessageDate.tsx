import React from "react"
import styles from "./lastMessageDate.module.css"
import getFormattedLastTimeMessage from "../../../../util/getFormattedLastTimeMessage"

interface LastMessageDateProps {
  date: string
}

const LastMessageDate = React.memo((props: LastMessageDateProps) => {
  return (
    <div className={styles.date}>{getFormattedLastTimeMessage(props.date)}</div>
  )
})

export default LastMessageDate
