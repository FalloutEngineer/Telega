export default function useChatParticipants() {
  const participants: Map<string, PublicUser> = new Map([
    [
      "1",
      {
        id: "1",
        firstName: "Me",
        lastName: "Me",
        nicknameColor: "#7F00FF",
        avatarURL:
          "https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg",
      },
    ],
    [
      "2",
      {
        id: "2",
        firstName: "User",
        lastName: "1",
        nicknameColor: "#fcba03",
        avatarURL:
          "https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg",
      },
    ],
    [
      "3",
      {
        id: "3",
        firstName: "User",
        lastName: "2",
        nicknameColor: "#fc2803",
        avatarURL:
          "https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg",
      },
    ],
  ])

  return participants
}
