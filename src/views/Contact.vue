<template>
  <v-container fluid>
    <h1 id="contacts" class="anchor"/>
    <h1>Contacts</h1>
    <h2>
      Note that joining our discord server is mandatory. <br/>
      The tournament will be conducted using the server to support the scoring, and other aspects of the tournament. <br/>
      <br/>
      We can also be contacted through our instagram, or email!
    </h2>

    <v-row class="d-flex justify-center">
      <v-col lg="1" md="3" sm="4">
        <v-btn icon large href="https://discord.gg/PqCeyyyndg">
          <v-icon large>$discord</v-icon>
        </v-btn>
      </v-col>
      <v-col lg="1" md="3" sm="4">
        <v-btn icon large href="https://www.instagram.com/sp_mindsports">
          <v-icon large>$instagram</v-icon>
        </v-btn>
      </v-col>
      <v-col lg="1" md="3" sm="4">
        <v-btn icon large href = "mailto: spmstetris@gmail.com">
          <v-icon large>$gmail</v-icon>
        </v-btn>
      </v-col>
    </v-row>


  </v-container>
</template>

<script>
export default {
  name: "Contact"
}
</script>