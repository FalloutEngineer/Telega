import React from "react"
import styles from "./heading.module.css"

export default function Heading({ text }: { text: string }) {
  return <h2 className={styles.heading}>{text}</h2>
}
