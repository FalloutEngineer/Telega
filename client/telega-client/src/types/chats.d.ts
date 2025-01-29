interface Chat {
  userID: string
  username: string
  photoURL: string
  lastMessage: string
  messages: number
  isOnline: boolean
  lastMessageDate?: string
}

type Chats = Chat[]
