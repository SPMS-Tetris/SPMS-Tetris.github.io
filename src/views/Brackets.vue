<template>
  <v-container fluid>
    <h1 id="live bracket" class="anchor"/>
    <h1>Live Brackets</h1>

    <v-container fluid class="pa-2 elevation-6 bracket">
      <h1 style="">Gold</h1>
      <iframe src="https://challonge.com/SPMST_Session/module" width="100%" height="500" frameborder="0" scrolling="auto" allowtransparency="true"></iframe>
    </v-container>

    <v-container fluid class="pa-2 elevation-6 mt-12 bracket">
      <h1 style="">Platinum</h1>
      <iframe src="https://challonge.com/SPMST_Session/module" width="100%" height="500" frameborder="0" scrolling="auto" allowtransparency="true"></iframe>
    </v-container>

    <v-container fluid class="pa-2 elevation-6 mt-12 bracket">
      <h1 style="">Diamond</h1>
      <iframe src="https://challonge.com/SPMST_Session/module" width="100%" height="500" frameborder="0" scrolling="auto" allowtransparency="true"></iframe>
    </v-container>
  </v-container>
</template>

<style scoped>

.bracket {
  outline-color: black;
  border-radius: 20px;
  border-style: solid;
  width: 80%;
  border-color: #57451450;
  background-color: #fffdd0
}

</style>

<script>
export default {
  name: "Brackets"
}
</script>