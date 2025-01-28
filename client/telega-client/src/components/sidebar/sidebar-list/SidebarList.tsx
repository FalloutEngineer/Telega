import React from "react"
import SidebarUser from "../sidebar-user/SidebarUser"
import styles from "./sidebarList.module.css"

export default function SidebarList() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <SidebarUser
          name="John Doe"
          photoURL="https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg"
          lastMessage={"Hello, world!"}
          messages={10}
          isOnline={true}
        />
      </li>
      <li className={styles.item}>
        <SidebarUser
          name="Johny Doel"
          photoURL="https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg"
          lastMessage={"Lorem Ipsum..."}
          messages={0}
          isOnline={true}
        />
      </li>
      <li className={styles.item}>
        <SidebarUser
          name="Ivan Franko"
          photoURL="https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg"
          lastMessage={"Ok. 👍"}
          messages={555}
          isOnline={false}
        />
      </li>
      <li className={styles.item}>
        <SidebarUser
          name="Ano Nymus"
          photoURL="https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg"
          lastMessage={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
          messages={5555555}
          isOnline={false}
        />
      </li>
      <li className={styles.item}>
        <SidebarUser
          name="Ano Nymus"
          photoURL="https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg"
          lastMessage={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
          messages={2}
          isOnline={true}
        />
      </li>
      <li className={styles.item}>
        <SidebarUser
          name="Ano Nymussssssssssssssssssssssssssssssssssssssssssssss"
          photoURL="https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg"
          lastMessage={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
          messages={0}
          isOnline={true}
        />
      </li>
    </ul>
  )
}
