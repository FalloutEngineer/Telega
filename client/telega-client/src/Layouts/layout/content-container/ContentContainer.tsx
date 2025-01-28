import React from "react"
import styles from "./content-container.module.css"

export default function ContentContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className={styles.container}>{children}</div>
}
