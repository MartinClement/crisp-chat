import { ref } from 'vue';
import { IMessage, IRoom } from '../../../types/global';
import { User } from '@auth0/auth0-vue';

export const useRoomState = () => {
  const ready = ref(false);
  const id = ref('');
  const users = ref<User[]>([]);
  const owner = ref('');
  const messages = ref<IMessage[]>([]);

  const init = (room: IRoom) => {
    id.value = room.id;
    users.value = room.users;
    owner.value = room.owner;
    messages.value = room.messages;

    ready.value = true;
  }

  const addMessage = (message: IMessage) => {
    messages.value = [...messages.value, message];
  };

  const addUser = (user: User) => {
    users.value = [...users.value, user];
  }

  return {
    ready,
    id,
    users,
    owner,
    messages,
    init,
    addMessage,
    addUser,
  }
}