import axios from 'axios';

export default async function getChatUsers(name) {
    try {
          const response = await axios.post('http://localhost:3001/createUser', {
            username: name,
          })
          .then(function (response) {
            return response.data;
          })
          .catch(function (error) {
            console.log(error);
          });
          return response;
      } catch (error) {
        console.error(error);
      }
}
