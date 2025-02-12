import React from "react"
import ArrowSVG from "../../../../../assets/icons/status-arrow.svg?react"
import SendingSVG from "../../../../../assets/icons/status-sending.svg?react"
import ErrorSVG from "../../../../../assets/icons/status-error.svg?react"

import styles from "./messageStatus.module.css"

type MessageStatusProps = {
  status: MessageStatus
  size: string
}

const MessageStatus = (props: MessageStatusProps) => {
  return (
    <div
      className={styles.body}
      style={{ width: props.size, height: props.size }}
    >
      {props.status === "sending" ? (
        <div className={styles.sending}>
          <SendingSVG
            style={{
              color: "var(--text-color)",
              opacity: 0.33,
              height: props.size,
              width: props.size,
            }}
            fillOpacity={1}
          />
        </div>
      ) : props.status === "received" ? (
        <div className={styles.received}>
          <ArrowSVG
            style={{
              color: "var(--highlight-color)",
              height: props.size,
              width: props.size,
            }}
          />
        </div>
      ) : props.status === "error" ? (
        <div className={styles.error}>
          <ErrorSVG
            style={{
              color: "var(--text-color)",
              opacity: "0.33",
              height: props.size,
              width: props.size,
            }}
            fillOpacity={1}
          />
        </div>
      ) : (
        <div className={styles.read}>
          <ArrowSVG
            style={{
              color: "var(--highlight-color)",
              height: props.size,
              width: props.size,
            }}
          />{" "}
          <ArrowSVG
            style={{
              color: "var(--highlight-color)",
              height: props.size,
              width: props.size,
            }}
          />
        </div>
      )}
    </div>
  )
}

export default MessageStatus
