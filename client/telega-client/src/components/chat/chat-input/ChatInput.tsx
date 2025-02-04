import React, { useRef, useState } from "react"
import styles from "./input.module.css"

const ChatInput = React.memo(() => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isInputBlocked, setIsInputBlocked] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [isSendingEnabled, setisSendingEnabled] = useState(false)

  const onMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      <input
        className={styles.input}
        type="text"
        name="messageInput"
        id="messageInput"
        placeholder="Write a message..."
        ref={inputRef}
        onChange={onMessageChange}
        disabled={isInputBlocked}
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
