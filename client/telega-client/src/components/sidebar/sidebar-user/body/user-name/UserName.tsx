import React from "react"
import styles from "./userName.module.css"
import Heading from "../../../../common/heading/Heading"

interface UserNameProps {
  name: string
}

export default function UserName(props: UserNameProps) {
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        <Heading text={props.name} />
      </div>
    </div>
  )
}
