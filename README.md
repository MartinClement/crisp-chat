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
- [x] User can Login ( Github | Google SSO with auth0 )
- [x] Admin of chat room can kick others users
- [x] An hosted version of the app [CrispChat](https://crisp-chat.vercel.app/)

### Very nice to have

- [x] A good UI ( depending of personal feeling )

### Technologies

| Name        | Doc                                     |
| :---------- | :-------------------------------------- |
| Vue3        | [vuejs.org](https://vuejs.org/)         |
| SocketIO    | [Socket.IO](https://socket.io)          |
| Tailwindcss | [tailwindcss](https://tailwindcss.com/) |

### Setup and Run

### This project works with its dedicted server

> You can find it here: [crisp-chat-srv](https://github.com/MartinClement/crisp-chat-srv).

> Start the server before running the following commands

```bash
npm install
cp .env.sample .env
npm run dev
```

### How to use chat

> Hosted App: https://crisp-chat.vercel.app/

## Create a room

After a successful login, you will be able to see a simple input askip for a roomName.
You just need to fill this input and press "Go". It will create a ready to use chatroom.

## Join a room

After a successfull login, will be able to see a simple input askip for a roomName.
To join a room, you have two options:

- Copy/Paste a room url directly in the browser

Or

- Find the roomID in the room page url and fill the input with it.
- ie: https://crisp-chat.vercel.app/chatroom/test-fsMBcghe7gaSNBPdAAAE
- the roomID is: **_test-fsMBcghe7gaSNBPdAAAE_**
