import React from "react"
import styles from "./helpingText.module.css"
import Heading from "../heading/Heading"

export default function HelpingText({ text }: { text: string }) {
  return (
    <div className={styles.wrapper}>
      <Heading text={text} />
    </div>
  )
}
