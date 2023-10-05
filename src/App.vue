<template>
  <v-app style="background-color: #fffddf;">
    <v-app-bar
      app
      color="#fffdd0"
      dark
      height="100px"
    >
      <v-app-bar-nav-icon
          style="color: black"
          v-if="isMobile"
          @click.stop="drawer = !drawer"
      />



      <v-app-bar-title disabled class="ml-auto mr-4">
        <v-img
            alt="Vuetify Logo"
            contain
            :src="require('/src/assets/logo.png')"
            transition="scale-transition"
            width="100px"
            sizes="small"
        />
      </v-app-bar-title>

      <v-layout row class="d-flex justify-center mr-6" v-if="!isMobile">
        <v-btn-group borderless rounded group>
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
        </v-btn-group>
      </v-layout>

    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        app
        clipped
        color="#fffddf"
        v-if="isMobile"
    >
      <v-list dense>
          <v-list-item
              :href="`#${item.toLowerCase()}`"
              v-for="(item, i) in toolbar_items"
              :key="i"
              @click="drawer=false"
              class="mt-2"
          >
            <v-list-item-content>
              <v-list-item-title style="font-size: 14px" v-text="item"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="px-6 mt-0 pb-16 text-center" style="margin-top:100px">
      <Home style="height: 100vh;"/>
      <Info style="margin-bottom: 96px"/>
      <Schedule style="margin-bottom: 96px"/>
      <Registration style="margin-bottom: 96px"/>
      <Contact style="margin-bottom: 96px"/>
      <Brackets style="margin-bottom: 96px"/>
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

  @font-face {
    font-family: 'dreamwood';
    src: url("../public/fonts/Dreamwood.ttf");
  }

  @font-face {
    font-family: 'quicksand'; /*a name to be used later*/
    src: url('../public/fonts/Quicksand.ttf'); /*URL to font*/
  }

  @font-face {
    font-family: 'quicksand-bold'; /*a name to be used later*/
    src: url('../public/fonts/Quicksand-Bold.ttf'); /*URL to font*/
  }

  h1 {
    font-size: 48px;
    font-family: dreamwood;
  }

  * {
    font-family: quicksand;
  }

  .bold {
    font-family: quicksand-bold;
  }

  #app {
    background: url('../src/assets/background.png') !important;
    min-height: 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
  }

  @media screen and (max-device-width: 640px){
    body{
      -webkit-text-size-adjust: 100%;
    }
  }
</style>

<script lang="ts">
import Vue from 'vue';
import Home from "@/views/Home.vue";
import Info from "@/views/Info.vue";
import Registration from "@/views/Registration.vue";
import Contact from "@/views/Contact.vue";
import Brackets from "@/views/Brackets.vue";
import Schedule from "@/views/Schedule.vue";

export default Vue.extend({
  name: 'App',
  components: {Schedule, Brackets, Contact, Registration, Info, Home},

  data: () => ({
    toolbar_items: ['Home', 'Info', 'Schedule', 'Register', 'Contacts', 'Live Bracket'],
    windowWidth: window.innerWidth,
    drawer: false,
    homeMarginBottom: 0,
  }),
  computed: {
    isMobile(): boolean {
      return this.windowWidth <= 720
    }
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    }
  },
});
</script>
