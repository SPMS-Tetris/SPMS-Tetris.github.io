<template>
  <v-container fluid>
    <h1 id="stream" class="anchor"/>
    <h1>Stream</h1>


    <v-container fluid class="pa-2 elevation-6 mt-12 stream-container">
      <iframe
          src="https://player.twitch.tv/?channel=spmstetris&parent=spms-tetris.github.io&muted=true"
          width="100%"
          height="720"
          allowfullscreen
          class="stream"
          style="height: 50vw; max-height: 720px"
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
    max-height: 300px;
  }
}

@media only screen and (min-width: 481px) and (max-width: 640px) {
  .stream {
    max-height: 400px;
  }
}


@media only screen and (max-width: 640px) {
  .stream-container {
    width: 100%;
  }
}

@media screen and (min-width: 640px) and (max-width: 720px){
  .stream {
    max-height: 480px;
  }
}

@media screen and (min-width: 721px) and (max-width: 960px){
  .stream {
    max-height: 560px;
  }
}

</style>
<script>
export default {
  name: "Stream"
}
</script>