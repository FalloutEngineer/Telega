import React from "react"
import styles from "./avatar.module.css"

interface AvatarProps {
  url: string
  alt: string
  isOnline?: boolean
}

const Avatar = (props: AvatarProps) => {
  return (
    <div className={`${styles.wrapper} ${props.isOnline ? styles.online : ""}`}>
      <img src={props.url} alt={props.alt} className={`${styles.image}`} />
    </div>
  )
}

export default React.memo(Avatar)
