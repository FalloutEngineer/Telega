import React from "react"
import MessageFallback from "./MessageFallbackLazy"
import styles from "./message.module.css"

import ArrowSVG from "../../../../assets/icons/status-arrow.svg?react"

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
        <p className={styles.time}>
          {props.date.getHours()}:{props.date.getMinutes()}
        </p>
        {props.isMy ? (
          <div className={styles.status}>
            {/* Change style according to message status or isMy */}
            <ArrowSVG
              style={{
                color: "var(--highlight-color)",
                height: "15px",
                width: "15px",
              }}
            />
          </div>
        ) : null}
      </div>
    </li>
  ) : (
    <MessageFallback />
  )
}
