import React from "react"
import styles from "./header.module.css"

type HeaderProps = {
  name: string
  subheading?: string
}

const ChatHeader = React.memo((props: HeaderProps) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.left}>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.subheading}>{props.subheading}</div>
      </div>
    </div>
  )
})

export default ChatHeader
