import React from "react"
import styles from "./sidebarUser.module.css"
import Avatar from "../../common/avatar/Avatar"
import SidebarUserBody from "./body/SidebarUserBody"

interface SidebarUserProps {
  userID: string
  username: string
  photoURL: string
  lastMessage?: string
  lastMessageDate?: string
  messages: number
  isOnline?: boolean
  isSelected?: boolean
  onClick?: (index: string) => unknown
}

const SidebarUser = React.memo((props: SidebarUserProps) => {
  return (
    <button
      className={`${styles.container} ${
        props.isSelected ? styles.selected : ""
      }`}
      onClick={() => {
        if (props.onClick) {
          props.onClick(props.userID)
        }
      }}
    >
      <Avatar
        url={props.photoURL}
        alt={props.username + " avatar"}
        isOnline={props.isOnline}
      />
      <SidebarUserBody
        name={props.username}
        lastMessage={props.lastMessage}
        lastMessageDate={props.lastMessageDate}
        messages={props.messages}
      />
    </button>
  )
})

export default SidebarUser
