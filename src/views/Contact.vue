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

    <v-row class="mt-4 d-flex justify-center">
      <v-col xl="4" lg="4" md="6" sm="8">
        <v-btn block outlined x-large href="https://discord.gg/PqCeyyyndg" target="_blank" style="background-color: #fffdd0">
          <v-icon x-large class="mr-6">$discord</v-icon>
          Join our discord!
        </v-btn>
        <v-btn block outlined x-large href="https://www.instagram.com/sp_mindsports" class="mt-4" target="_blank" style="background-color: #fffdd0">
          <v-icon class="mr-6" x-large>$instagram</v-icon>
          @sp_mindsports
        </v-btn>
        <v-btn class="mt-4" block outlined x-large href="mailto: spmstetris@gmail.com" style="background-color: #fffdd0">
          <v-icon class="mr-6" x-large>$gmail</v-icon>
          spmstetris@gmail.com
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