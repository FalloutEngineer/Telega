type MessageDate = Date

type Message = {
  from: string
  date: MessageDate
  id: string
  textBody: string
  status?: MessageStatus
}

type MessageStatus = "sending" | "received" | "read" | "error"
