import React, { useState } from "react"
import styles from "./chatBody.module.css"
import Message from "./message/MessageLazy"
import useMyUserId from "../../../hooks/useMyUserId"
import useChatParticipants from "../../../hooks/useChatParticipants"
import { ErrorBoundary } from "react-error-boundary"
import MessageFallback from "./message/MessageFallback"

const ChatBody = React.memo(() => {
  //TODO: Caching messages
  //TODO: Remove mock data
  const myId = useMyUserId()
  const participants = useChatParticipants()
  const [messages] = useState<Message[]>([
    {
      from: "1",
      date: new Date(),
      id: "1",
      textBody: "Hello, world",
      status: "read",
    },
    {
      from: "2",
      date: new Date(),
      id: "2",
      textBody: "Hello, too!",
    },
    {
      from: "1",
      date: new Date(),
      id: "3",
      textBody: "Nice to meet you!",
      status: "read",
    },
    {
      from: "2",
      date: new Date(),
      id: "4",
      textBody: "Hello, world",
    },
    {
      from: "1",
      date: new Date(),
      id: "5",
      textBody: "Hello, too!",
      status: "read",
    },
    {
      from: "1",
      date: new Date(),
      id: "6",
      textBody:
        "Nice to meet you!Nice to meet you!Nice to meet you!Nice to meet you!Nice to meet you!Nice to meet you!Nice to meet you!Nice to meet you!Nice to meet you!Nice to meet you!Nice to meet you!Nice to meet you!Nice to meet you!Nice to meet you!Nice to meet you!Nice to meet you!",
      status: "read",
    },
    {
      from: "2",
      date: new Date(),
      id: "7",
      textBody: "Hello, world",
    },
    {
      from: "1",
      date: new Date(),
      id: "8",
      textBody: "Hello, too!",
      status: "received",
    },
    {
      from: "1",
      date: new Date(),
      id: "9",
      textBody: "Nice to meet you!",
      status: "sending",
    },
    {
      from: "1",
      date: new Date(),
      id: "10",
      textBody: "Nice to meet you!",
      status: "error",
    },
    {
      from: "",
      date: new Date(),
      id: "10",
      textBody: "Nice to meet you!",
      status: "error",
    },
  ])

  return (
    <div className={styles.body}>
      <ul className={styles.messages}>
        {messages.map((message) => {
          return (
            <ErrorBoundary
              key={message.id}
              fallback={<MessageFallback isMy={message.from === myId} />}
            >
              <Message
                isMy={message.from === myId}
                {...message}
                sender={participants.get(message.from)}
              />
            </ErrorBoundary>
          )
        })}
      </ul>
    </div>
  )
})

export default ChatBody
