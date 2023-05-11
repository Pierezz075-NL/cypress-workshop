<template>
  <div class="about">
    <h1 class="title">A list of chat users</h1>
    <div class="users-container">
      <div v-for="user in users" :key="user.id" class="user-tile">
        <div class="user-avatar-container">
          <img :src="user.avatar" alt="user avatar" class="user-avatar" />
        </div>
        <div class="user-details">
          <p class="user-descriptive-header">Username:</p>
          <h3>{{ user.username }}</h3>
          <p class="user-descriptive-header">Email:</p>
          <h3>{{ user.email }}</h3>
          <p class="user-descriptive-header">Name:</p>
          <h3>{{ user.first_name }} {{ user.last_name }}</h3>
          <p class="user-descriptive-header">Status:</p>
          <h3> {{ user.is_online ? 'online' : 'offline' }}</h3>
          <button class="user-actions-delete" @click="deleteUser(user.id)">Delete User</button>
        </div>
      </div>
    </div>
    <RouterLink to="/" class="add-users">Add new users</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import getChatUsers from '../utils/getChatUsers';
import deleteChatUser from '../utils/deleteChatUser';

interface User {
  id: number;
  is_authenticated: boolean;
  last_message: { text: string; created: string; attachments: any[] };
  username: string;
  secret: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string | undefined;
  custom_json: string;
  is_online: boolean;
  created: string;
}

const users = ref<User[]>([]);

async function fetchData() {
  const chatUsers = await getChatUsers().catch((e) => { console.error(e.message) });
  users.value = chatUsers;
}

async function deleteUser(user: number){
  await deleteChatUser(user).catch((e) => { console.error(e.message) })
  fetchData();
}

onMounted(() => {
  fetchData();
});

</script>

<style>
h3{
  margin:0 0 20px 0;
  padding:0;
}
.about {
  max-width: 1024px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  font-size: 36px;
  text-align: center;
  margin-bottom: 30px;
}

.users-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.user-tile {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin: 10px;
  padding: 20px;
  width: 33%;
  height: auto;
  transition: all 0.3s ease-in-out;
}

.user-tile:hover {
  transform: translateY(-5px);
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
}

.user-avatar-container {
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 20px;
}

.user-avatar {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.user-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 70%;
}

.user-descriptive-header{
  padding:0;
  margin:0;
  color: lightsteelblue;
}

.email {
  font-size: 16px;
  color: #999;
  margin-bottom: 20px;
}

.created {
  font-size: 14px;
  color: #aaa;
  margin-top: auto;
}
.user-actions-delete{
  border-radius:10px;
  background-color:red;
  padding:10px 15px;
  border:0;
  color:#fff;
  cursor: pointer;
}
.add-users{
  text-align: center;
  background-color:rgb(194 241 222);;
  display:block;
  width:25%;
  margin:30px auto;
  padding:10px 20px;
  border-radius:10px;
  color:#000;
  text-decoration: none;
}
</style>