import { RouterLink, RouterView } from 'vue-router'
<template>
  <div id="app">
    <div>
      <nav>
        <div class="left">
          <img src="@/assets/logo.svg" alt="Vue logo" />
          <button class="contact" @click="contact">Contacts</button>
        </div>
        <div class="right">
          <img src="https://www.pngkey.com/png/full/52-522921_kathrine-vangen-profile-pic-empty-png.png" />
        </div>
      </nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    contact() {
      this.$router.push("/contactlist"); //change from contact-list to contactlist
    },
  },
};
</script>

<style>

body {
  background-color: #ffffff !important;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  width: 100%;
  height: 35px;
  font-size: 12px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  background-color: black;
}

.right,
.left {
  display: flex;
  align-items: center;
  justify-content: center;
}

.left img {
  height: 35px;
  padding: 5px;
}

.right img {
  height: 35px;
  padding: 5px;
  margin-right: 20px;
  border-left: 1px solid rgb(56, 56, 56);
  border-right: 1px solid rgb(52, 52, 52);
}

.contact {
  color: white;
  background-color: black;
  height: 35px;
  padding: 10px;
  border: none;
  border-left: 1px solid rgb(56, 56, 56);
  border-right: 1px solid rgb(52, 52, 52);
  font-size: 12px;
  align-items: center;
  justify-content: center;
}
</style>
