import React, { useCallback, useMemo, useState } from "react"
import SidebarUser from "../sidebar-user/SidebarUser"
import styles from "./sidebarList.module.css"
import { Virtuoso } from "react-virtuoso"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../redux/store"
import { setSelectedUser } from "../../../redux/slices/sidebarSelectedUser"

type SelectedUserIndex = number | null

export default function SidebarList() {
  const [chats] = useState<Chats | null>([
    {
      userID: "1",
      username: "John Doe",
      lastMessage: "Hello, world!",
      photoURL:
        "https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg",
      messages: 10,
      isOnline: true,
    },
    {
      userID: "2",
      username: "Johny Doel",
      lastMessage: "How are you?",
      photoURL:
        "https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg",
      messages: 5,
      isOnline: false,
    },
    {
      userID: "3",
      username: "Jane Doe",
      lastMessage: "What's up?",
      photoURL:
        "https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg",
      messages: 8,
      isOnline: true,
    },
    {
      userID: "4",
      username: "John Doe",
      lastMessage: "Hello, world!",
      photoURL:
        "https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg",
      messages: 10,
      isOnline: true,
    },
    {
      userID: "5",
      username: "Johny Doel",
      lastMessage: "How are you?",
      photoURL:
        "https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg",
      messages: 5,
      isOnline: false,
    },
    {
      userID: "6",
      username: "Jane Doe",
      lastMessage: "What's up?",
      photoURL:
        "https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg",
      messages: 8,
      isOnline: true,
    },
    {
      userID: "7",
      username: "John Doe",
      lastMessage: "Hello, world!",
      photoURL:
        "https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg",
      messages: 10,
      isOnline: true,
    },
    {
      userID: "8",
      username: "Johny Doel",
      lastMessage: "How are you?",
      photoURL:
        "https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg",
      messages: 5,
      isOnline: false,
    },
    {
      userID: "9",
      username: "Jane Doe",
      lastMessage: "What's up?",
      photoURL:
        "https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg",
      messages: 8,
      isOnline: true,
    },
    {
      userID: "10",
      username: "John Doe",
      lastMessage: "Hello, world!",
      photoURL:
        "https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg",
      messages: 10,
      isOnline: true,
    },
    {
      userID: "11",
      username: "Johny Doel",
      lastMessage: "How are you?",
      photoURL:
        "https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg",
      messages: 5,
      isOnline: false,
    },
    {
      userID: "12",
      username: "Jane Doe",
      lastMessage: "What's up?",
      photoURL:
        "https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg",
      messages: 8,
      isOnline: true,
    },
    {
      userID: "13",
      username: "John Doe",
      lastMessage: "Hello, world!",
      photoURL:
        "https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg",
      messages: 10,
      isOnline: true,
    },
    {
      userID: "14",
      username: "Johny Doel",
      lastMessage: "How are you?",
      photoURL:
        "https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg",
      messages: 5,
      isOnline: false,
    },
    {
      userID: "15",
      username: "Jane Doe",
      lastMessage: "What's up?",
      photoURL:
        "https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg",
      messages: 8,
      isOnline: true,
    },
  ])

  const selectedUser = useSelector(
    (state: RootState) => state.selectedUser.userID
  )

  const dispatch = useDispatch()

  const selectedUserIndex: SelectedUserIndex = useMemo(() => {
    if (chats) {
      return chats.findIndex((user) => user.userID === selectedUser)
    }
    return null
  }, [chats, selectedUser])

  const handleUserClick = useCallback((index: string) => {
    dispatch(setSelectedUser(index))
  }, [])

  return (
    <div className={styles.list}>
      {chats ? (
        <Virtuoso
          data={chats}
          itemContent={(index, data) => (
            <SidebarUser
              {...data}
              isSelected={index === selectedUserIndex}
              onClick={handleUserClick}
            />
          )}
          className={styles.virtuoso}
        />
      ) : (
        "Loading..."
      )}
    </div>
  )
}
