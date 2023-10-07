<template>
  <v-container fluid>
    <h1 id="live bracket" class="anchor"/>
    <h1>Stream</h1>


    <iframe
        src="https://player.twitch.tv/?channel=spmstetris&parent=spms-tetris.github.io&muted=true"
        width="100%"
        height="720"
        allowfullscreen
        class="stream"
    >
    </iframe>
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


@media only screen and (max-width: 640px) {
  .stream-container {
    width: 100%;
  }
  .stream {
    height: 480px;
  }
}

</style>
<script>
export default {
  name: "Stream"
}
</script>