import React, { useRef, useState } from "react"
import styles from "./input.module.css"
import TextBox from "../../common/TextBox/TextBox"

const ChatInput = React.memo(() => {
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const [isInputBlocked, setIsInputBlocked] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [isSendingEnabled, setisSendingEnabled] = useState(false)

  const [inputValue, setInputValue] = useState("")

  const onMessageChange = (e: React.ChangeEvent<HTMLSpanElement>) => {
    setInputValue(e.target.innerText)
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

  const clearInput = () => {
    setInputValue("")
  }

  return (
    <div className={styles.inputContainer}>
      <TextBox
        onChange={onMessageChange}
        placeholder="Write a message..."
        readonly={isInputBlocked}
        onEnter={() => {
          clearInput()
        }}
        value={inputValue}
        containerStyle={{
          padding: "16px 25px",
          maxHeight: "50vh",
          boxSizing: "border-box",
          height: "fit-content",
        }}
        innerStyle={{
          overflowY: "scroll",
          msOverflowY: "scroll",
          height: "100%",
          minHeight: "24px",
        }}
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
