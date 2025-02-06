import React, { useRef, useState } from "react"
import styles from "./input.module.css"

const ChatInput = React.memo(() => {
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const [isInputBlocked, setIsInputBlocked] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [isSendingEnabled, setisSendingEnabled] = useState(false)

  const onMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.trim() !== "") {
      setisSendingEnabled(true)
    } else {
      setisSendingEnabled(false)
    }
  }

  const sendMessage = () => {
    setIsInputBlocked(true)
    setIsSending(true)
    if (inputRef.current) {
      inputRef.current.value = ""
    }
  }

  return (
    <div className={styles.inputContainer}>
      <textarea
        className={styles.input}
        name="messageInput"
        id="messageInput"
        placeholder="Write a message..."
        ref={inputRef}
        onChange={onMessageChange}
        disabled={isInputBlocked}
        rows={13}
      />
      {isSendingEnabled ? (
        <div className={styles.hint} aria-label="Press Enter to send message">
          <button
            onClick={sendMessage}
            className={styles.hintText}
            aria-hidden="true"
          >
            {isSending ? "Sending..." : "Enter"}
          </button>
        </div>
      ) : null}
    </div>
  )
})

export default ChatInput
