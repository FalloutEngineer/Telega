import React from "react"
import MessageFallback from "./MessageFallbackLazy"

type MessageProps = Message & { isMy: boolean } & { sender?: PublicUser }

export default function Message(props: MessageProps) {
  return props.sender ? (
    <li>{props.isMy ? "true" : "false"}</li>
  ) : (
    <MessageFallback />
  )
}
