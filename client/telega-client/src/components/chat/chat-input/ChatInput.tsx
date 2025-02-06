import React, { useRef, useState } from "react"
import styles from "./input.module.css"
import TextBox from "../../common/TextBox/TextBox"

const ChatInput = React.memo(() => {
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const [isInputBlocked, setIsInputBlocked] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [isSendingEnabled, setisSendingEnabled] = useState(false)

  const onMessageChange = (e: React.ChangeEvent<HTMLSpanElement>) => {
    if (e.target.innerText.trim() !== "") {
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
      {/* <textarea
        className={styles.input}
        name="messageInput"
        id="messageInput"
        placeholder="Write a message..."
        ref={inputRef}
        onChange={onMessageChange}
        disabled={isInputBlocked}
        rows={13}
      /> */}
      <TextBox
        onChange={onMessageChange}
        placeholder="Write a message..."
        readonly={isInputBlocked}
      />
      {isSendingEnabled ? (
        <div className={styles.hint} aria-label="Press Enter to send message">
          <button
            onClick={sendMessage}
            className={styles.hintText}
            aria-hidden="true"
            tabIndex={0}
          >
            {isSending ? "Sending..." : "Enter"}
          </button>
        </div>
      ) : null}
    </div>
  )
})

export default ChatInput
