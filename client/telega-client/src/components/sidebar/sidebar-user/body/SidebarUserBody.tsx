import React from "react"
import styles from "./sidebarUserBody.module.css"
import LastMessageDate from "../last-message-date/LastMessageDate"
import Messages from "../messages/Messages"
import LastMessage from "../last-message/LastMessage"
import UserName from "./user-name/UserName"

interface SidebarUserBodyProps {
  name: string
  lastMessage?: string
  messages: number
}

export default function SidebarUserBody(props: SidebarUserBodyProps) {
  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <UserName name={props.name} />
        <LastMessageDate date={new Date()} />
      </div>
      <div className={styles.lower}>
        <LastMessage message={props.lastMessage ? props.lastMessage : ""} />
        <Messages count={props.messages} />
      </div>
    </div>
  )
}
