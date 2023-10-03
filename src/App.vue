<template>
  <v-app style="background-color: #fffddf">
    <v-app-bar
      app
      color="#fffdd0"
      dark
      height="100px"
    >
      <v-app-bar-nav-icon disabled="true" class="ml-4">
        <v-img
            alt="Vuetify Logo"
            contain
            :src="require('/src/assets/logo.png')"
            transition="scale-transition"
            width="100px"
            sizes="small"
        />
      </v-app-bar-nav-icon>

      <v-layout row class="d-flex justify-center mr-6">
        <v-btn-toggle borderless rounded group mandatory v-model="selected">
          <v-btn
              :value="item"
              text
              v-for="item in toolbar_items"
              :key="item"
              :href="`#${item.toLowerCase()}`"
              color="black"
          >
            {{ item }}
          </v-btn>
        </v-btn-toggle>
      </v-layout>

    </v-app-bar>

    <v-main class="px-6 mt-0 text-center" style="margin-top:100px">
      <h1 id="home">SPMS Tetris Open Invitational</h1>
      <h2>
        Saturday, 4 November 2023 <br/>
        1100-1700 GMT+8
      </h2>
      <p>Registration opens at 0900</p> <br/>
      <h2>
        Singapore Polytechnic <br/>
        500 Dover Rd, Singapore 139651
      </h2> <br/>

      <h2>
        Free for Singapore Polytechnic Students <br/>
        $5 Entry Fee for non Singapore Polytechnic Students
      </h2>

      <h1 id="info">Tournament Info</h1>
      <h1 id="register">Register</h1>
      <h1 id="contacts">Contacts</h1>
      <h1 id="live bracket">Live Bracket</h1>
      <h1 id="info">FAQs</h1>
    </v-main>
  </v-app>
</template>

<style scoped>
  h1.anchor {
    display: block;
    position: relative;
    top: -116px;
  }

  h2 {
    font-weight: normal;
  }
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    toolbar_items: ['Home', 'Info', 'Register', 'Contacts', 'Live Bracket', 'FAQs'],
    selected: 'Home'
  }),
});
</script>
