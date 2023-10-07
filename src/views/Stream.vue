<template>
  <v-container fluid>
    <h1 id="live bracket" class="anchor"/>
    <h1>Stream</h1>


    <v-container fluid class="pa-2 elevation-6 mt-12 stream-container">
      <iframe
          src="https://player.twitch.tv/?channel=spmstetris&parent=spms-tetris.github.io&muted=true"
          width="100%"
          height="720"
          allowfullscreen
          class="stream"
      />
    </v-container>
  </v-container>
</template>

<style scoped>

.stream-container {
  outline-color: black;
  border-radius: 20px;
  border-style: solid;
  width: 80%;
  border-color: #57451450;
  background-color: #fffdd0
}

@media only screen and (max-width: 480px) {
  .stream {
    height: 300px;
  }
}

@media only screen and (min-width: 481px) and (max-width: 640px) {
  .stream {
    height: 480px;
  }
}


@media only screen and (max-width: 640px) {
  .stream-container {
    width: 100%;
  }
}

@media screen and (min-width: 641px) and (max-width: 960px){
  .stream {
    height: 640px;
  }
}

</style>
<script>
export default {
  name: "Stream"
}
</script>