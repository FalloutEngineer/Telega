import React from "react"
// import { useParams } from "react-router"
import ChatHeader from "./chat-header/ChatHeaderLazy"
import ChatInput from "./chat-input/ChatInputLazy"
import ChatBody from "./chat-body/ChatBody"
import styles from "./chat.module.css"

const Chat = React.memo(() => {
  return (
    <div className={styles.chatContainer}>
      <ChatHeader name={"Lorem"} subheading={"Last seen 12:00"} />
      <ChatBody />
      <ChatInput />
    </div>
  )
})

export default Chat
