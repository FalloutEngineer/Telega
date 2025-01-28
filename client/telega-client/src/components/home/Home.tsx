import React from "react"
import HelpingText from "../common/helping-text/HelpingText"
import styles from "./home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <HelpingText text={"Select a chat to start messaging"} />
    </div>
  )
}
