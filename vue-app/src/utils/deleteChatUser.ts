import axios from 'axios';

export default async function deleteChatUsers(userid: number) {
  try {
    const response = await axios.delete('http://localhost:3001/deleteUser', {
      data: { id: userid }
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
