# Crisp Technical Test

## Create a web chat application

### Features

- [x] User join or create a chat room by entering a name.
- [x] User see the list of users in the chat room.
- [x] User can read the last 10 messages.
- [x] User can read new messages.
- [x] User can write and send new messages.

### Bonus Features

- [] User can SignUp
- [x] User can Login ( SSO according to auth0 )
- [x] Admin of chat room can kick others users

### Very nice to have

- [x] A good UI ( depending of personal feeling )

### Technologies

| Name        | Doc                                     |
| :---------- | :-------------------------------------- |
| Vue3        | [vuejs.org](https://vuejs.org/)         |
| SocketIO    | [Socket.IO](https://socket.io)          |
| Tailwindcss | [tailwindcss](https://tailwindcss.com/) |

## Setup and Run

### This project works with its dedicted server

> You can find it here: [crisp-chat-srv](https://github.com/MartinClement/crisp-chat-srv).

> Start the server before running the following commands

```bash
npm install
cp .env.sample .env
npm run dev
```
