import React from "react"
import MessageFallback from "./MessageFallbackLazy"
import styles from "./message.module.css"
import MessageStatus from "./status/MessageStatus"
import getFormattedTime from "../../../../util/getFormattedLastTimeMessage"

type MessageProps = Message & { isMy: boolean } & { sender?: PublicUser }

export default function Message(props: MessageProps) {
  return props.sender ? (
    <li className={`${styles.messageBody} ${props.isMy ? styles.my : ""}`}>
      {props.isMy ? null : (
        <div className={styles.top}>
          <p
            className={styles.name}
            style={{ color: props.sender.nicknameColor }}
          >
            {`${props.sender.firstName} ${props.sender.lastName}`}
          </p>
        </div>
      )}
      <div className={styles.main}>{props.textBody}</div>
      <div className={styles.bottom}>
        <p className={styles.time}>{getFormattedTime(props.date.toString())}</p>
        {props.isMy && props.status ? (
          <div className={styles.status}>
            {/* Change style according to message status or isMy */}
            <MessageStatus status={props.status} size={"15px"} />
          </div>
        ) : null}
      </div>
    </li>
  ) : (
    <MessageFallback />
  )
}
