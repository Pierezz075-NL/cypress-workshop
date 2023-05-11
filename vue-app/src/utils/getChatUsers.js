import mockedData from '@/assets/mockedData/getUsers.json';
import axios from 'axios';

export default async function getChatUsers() {
    try {
        if (import.meta.env.VITE_ENV_API === 'production') {
          const response = await axios.get('http://localhost:3001/getUsers');
          return response.data;
        } else {
          return mockedData;
        }
      } catch (error) {
        console.error(error);
      }
}