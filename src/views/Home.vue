<template>
  <v-container fluid>
    <h1 id="home" class="anchor"></h1>
    <div style="padding-top: 10%">
      <h1 class="responsive">SP Tetris Open Invitational</h1>
      <h2>
        Saturday, 4 November 2023 <br/>
        1100-1830 GMT+8
      </h2>
      <h2>Registration opens at 0930</h2> <br/>
      <h2>
        Singapore Polytechnic <br/>
        500 Dover Rd, Singapore 139651
      </h2> <br/>

      <h2>
        Free for Singapore Polytechnic Students <br/>
        $5 Entry Fee for non Singapore Polytechnic Students
      </h2>
    </div>
  </v-container>
</template>

<style scoped>

@media screen and (max-width: 359px) {
  h1.responsive {
    font-size: 48px;
  }
  html {
    font-size: 24px;
  }
}

@media screen and (min-width: 360px) and (max-width: 439px) {
  h1.responsive {
    font-size: 64px;
  }
}

@media screen and (min-width: 400px) and (max-width: 639px) {
  h1.responsive {
    font-size: 72px;
  }
}

@media screen and (min-width: 640px) {
  h1.responsive {
    font-size: 80px;
  }
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  data() {
    return {
      windowWidth: window.innerWidth
    }
  },

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
})
</script>