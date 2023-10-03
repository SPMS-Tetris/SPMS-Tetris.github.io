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
      <Home/>
      <Info/>
      <h1 id="register">Register</h1>
      <h1 id="contacts">Contacts</h1>
      <h1 id="live bracket">Live Bracket</h1>
      <h1 id="info">FAQs</h1>
    </v-main>
  </v-app>
</template>

<style>
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
import Home from "@/views/Home.vue";
import Info from "@/views/Info.vue";

export default Vue.extend({
  name: 'App',
  components: {Info, Home},

  data: () => ({
    toolbar_items: ['Home', 'Info', 'Register', 'Contacts', 'Live Bracket', 'FAQs'],
    selected: 'Home'
  }),
});
</script>
