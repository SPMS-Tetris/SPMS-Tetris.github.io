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

    <v-main class="px-6 mt-0 pb-16 text-center" style="margin-top:100px">
      <Home/>
      <Info/>
      <Registration/>
      <Contact/>
      <h1 id="live bracket">Live Bracket</h1>
      <h2>Live brackets will be available at a later date</h2>
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
import Registration from "@/views/Registration.vue";
import Contact from "@/views/Contact.vue";

export default Vue.extend({
  name: 'App',
  components: {Contact, Registration, Info, Home},

  data: () => ({
    toolbar_items: ['Home', 'Info', 'Register', 'Contacts', 'Live Bracket'],
    selected: 'Home'
  }),
});
</script>
