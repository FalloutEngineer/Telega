import React from "react"
import styles from "./sidebarUser.module.css"
import Avatar from "../../common/avatar/Avatar"
import SidebarUserBody from "./body/SidebarUserBody"

interface SidebarUserProps {
  username: string
  photoURL: string
  lastMessage?: string
  messages: number
  isOnline?: boolean
}

export default function SidebarUser(props: SidebarUserProps) {
  return (
    <button className={styles.container}>
      <Avatar
        url={props.photoURL}
        alt={props.username + " avatar"}
        isOnline={props.isOnline}
      />
      <SidebarUserBody
        name={props.username}
        lastMessage={props.lastMessage}
        messages={props.messages}
      />
    </button>
  )
}
