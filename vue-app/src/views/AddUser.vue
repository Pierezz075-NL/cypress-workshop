<template>
  <div class="background">
    <form @submit.prevent="onSubmit" class="form-card">
      <svg data-v-61dd7a3d="" xmlns="http://www.w3.org/2000/svg" width="235" height="108" viewBox="0 0 235 108"
        fill="none" class="logo logo-no-scroll">
        <path data-v-61dd7a3d="" fill-rule="evenodd" clip-rule="evenodd"
          d="M86.4079 0.000796161L65.367 33.5333L61.9889 39.1568L61.7761 39.4829L58.2054 33.5333L53.6365 26.1737L70.06 0.000127954L86.4079 0.000796161ZM18.8098 0L52.6097 52.2527L44.5613 64.6265L44.5425 64.5962L44.0891 65.352L16.3485 108H0L36.2619 52.2514L2.46202 0H18.8098ZM57.308 70.5605L52.6939 77.9122L71.4028 108H87.75L64.4715 70.5605L60.8905 64.5944L57.308 70.5605Z"
          fill="white"></path>
        <path data-v-61dd7a3d=""
          d="M83.0293 42.94C85.2493 42.94 87.1893 43.38 88.8493 44.26C90.5093 45.14 91.7893 46.38 92.6893 47.98C93.6093 49.56 94.0693 51.39 94.0693 53.47C94.0693 55.53 93.6093 57.36 92.6893 58.96C91.7893 60.56 90.4993 61.8 88.8193 62.68C87.1593 63.56 85.2293 64 83.0293 64H75.1393V42.94H83.0293ZM82.6993 59.56C84.6393 59.56 86.1493 59.03 87.2293 57.97C88.3093 56.91 88.8493 55.41 88.8493 53.47C88.8493 51.53 88.3093 50.02 87.2293 48.94C86.1493 47.86 84.6393 47.32 82.6993 47.32H80.2693V59.56H82.6993ZM103.066 47.05V51.31H109.936V55.27H103.066V59.89H110.836V64H97.9362V42.94H110.836V47.05H103.066ZM134.937 42.94L127.467 64H121.047L113.577 42.94H119.037L124.257 58.84L129.507 42.94H134.937ZM145.971 42.94C148.191 42.94 150.131 43.38 151.791 44.26C153.451 45.14 154.731 46.38 155.631 47.98C156.551 49.56 157.011 51.39 157.011 53.47C157.011 55.53 156.551 57.36 155.631 58.96C154.731 60.56 153.441 61.8 151.761 62.68C150.101 63.56 148.171 64 145.971 64H138.081V42.94H145.971ZM145.641 59.56C147.581 59.56 149.091 59.03 150.171 57.97C151.251 56.91 151.791 55.41 151.791 53.47C151.791 51.53 151.251 50.02 150.171 48.94C149.091 47.86 147.581 47.32 145.641 47.32H143.211V59.56H145.641ZM173.988 60.28H166.128L164.868 64H159.498L167.118 42.94H173.058L180.678 64H175.248L173.988 60.28ZM172.668 56.32L170.058 48.61L167.478 56.32H172.668ZM202.057 42.94L194.767 57.04V64H189.637V57.04L182.347 42.94H188.167L192.247 51.76L196.297 42.94H202.057ZM212.744 64.21C211.204 64.21 209.824 63.96 208.604 63.46C207.384 62.96 206.404 62.22 205.664 61.24C204.944 60.26 204.564 59.08 204.524 57.7H209.984C210.064 58.48 210.334 59.08 210.794 59.5C211.254 59.9 211.854 60.1 212.594 60.1C213.354 60.1 213.954 59.93 214.394 59.59C214.834 59.23 215.054 58.74 215.054 58.12C215.054 57.6 214.874 57.17 214.514 56.83C214.174 56.49 213.744 56.21 213.224 55.99C212.724 55.77 212.004 55.52 211.064 55.24C209.704 54.82 208.594 54.4 207.734 53.98C206.874 53.56 206.134 52.94 205.514 52.12C204.894 51.3 204.584 50.23 204.584 48.91C204.584 46.95 205.294 45.42 206.714 44.32C208.134 43.2 209.984 42.64 212.264 42.64C214.584 42.64 216.454 43.2 217.874 44.32C219.294 45.42 220.054 46.96 220.154 48.94H214.604C214.564 48.26 214.314 47.73 213.854 47.35C213.394 46.95 212.804 46.75 212.084 46.75C211.464 46.75 210.964 46.92 210.584 47.26C210.204 47.58 210.014 48.05 210.014 48.67C210.014 49.35 210.334 49.88 210.974 50.26C211.614 50.64 212.614 51.05 213.974 51.49C215.334 51.95 216.434 52.39 217.274 52.81C218.134 53.23 218.874 53.84 219.494 54.64C220.114 55.44 220.424 56.47 220.424 57.73C220.424 58.93 220.114 60.02 219.494 61C218.894 61.98 218.014 62.76 216.854 63.34C215.694 63.92 214.324 64.21 212.744 64.21Z"
          fill="white"></path>
      </svg>

      <div class="form-subtitle">Set a username to get started</div>

      <div class="auth">
        <div class="auth-label">Username</div>
        <input class="auth-input" v-model="username" />
        <button class="auth-button" type="submit">Enter</button>
      </div>
      <div class="form-subtitle" v-if="addingUser">
        Going to add user: {{ username }}
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">
          <defs>
            <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
              <stop stop-color="#fff" stop-opacity="0" offset="0%" />
              <stop stop-color="#fff" stop-opacity=".631" offset="63.146%" />
              <stop stop-color="#fff" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="none" fill-rule="evenodd">
            <g transform="translate(1 1)">
              <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" stroke-width="2">
                <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s"
                  repeatCount="indefinite" />
              </path>
              <circle fill="#fff" cx="36" cy="18" r="1">
                <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s"
                  repeatCount="indefinite" />
              </circle>
            </g>
          </g>
        </svg>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import postNewChatUser from '@/utils/postNewChatUser';

const router = useRouter();
const username = ref('');
const addingUser = ref(false);

const onSubmit = async () => {
  try {
    addingUser.value = true;
    const chatUser = await postNewChatUser(username.value);
    if (typeof chatUser === 'object' && Object.keys(chatUser).length > 0) {
      setTimeout(() => {
        router.push('/users');
      }, 3000); // Delay the router push for 3 seconds
    }
  } catch (error) {
    console.log('error: ', error);
  }
};
</script>

<style>
body {
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  margin: 0px;
}

.background {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(75deg, rgb(20, 23, 33) 0%, rgb(20, 23, 33) 50%, rgba(20, 23, 33, 0.8) 100%);
  /* Vertical center */
  display: table-cell;
  vertical-align: middle;
}

.form-card {
  width: 50%;
  max-width: 350px;
  padding: 0% 25% 0% 25%;
}

.form-title {
  font-size: 42px;
  font-family: 'Avenir';
  font-weight: 800;
  letter-spacing: 0.5px;
  color: #e8e8e8;
  padding-bottom: 12px;
}

.form-subtitle {
  font-size: 18px;
  font-family: 'Avenir';
  letter-spacing: 0.5px;
  color: #afafaf;
  padding-bottom: 24px;
  padding-top: 24px;
}

.auth {
  position: relative;
  display: inline-block;
  width: 100%;
  padding-bottom: 12px;
}

.auth-label {
  position: absolute;
  top: 8px;
  left: 18px;
  font-size: 11px;
  color: rgb(175, 175, 175);
  font-family: Avenir;
  width: 100px;
}

.auth-input {
  background-color: #3e404b;
  color: white;
  font-family: "Avenir";
  outline: none;
  border: none;
  border-radius: 8px;
  padding: 24px 18px 12px 18px;
  width: calc(100% - 18px - 18px);
  margin-bottom: 12px;
}

.auth-button {
  width: 100%;
  height: 53px;
  color: white;
  background-color: #fa541c;
  border: none;
  outline: none;
  border-radius: 8px;
  font-family: "Avenir";
  cursor: pointer;
  transition: all .44s ease;
  -webkit-transition: all .44s ease;
  -moz-transition: all .44s ease;
}

.auth-button:hover {
  filter: brightness(145%);
}

.chat-wrapper {
  height: 80vh;
  width: 80%;
  margin-left: 10%;
  color: white;
  background: rgb(43, 47, 60);
}</style>
