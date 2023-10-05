<template>
  <v-container fluid>
    <h1 id="info" class="anchor"/>
    <h1>Tournament Info</h1>
    <h2>
      Matches will be played using TETR.IO's Tetra League ruleset <br/>
      Players will face off each other within their own division, with the win condition being dependent on the division <br/>
    </h2>

    <v-row class="d-flex justify-center">
      <v-col lg="8" md="10">
        <v-simple-table class="my-12" style="background-color: #fffddf;">
          <template v-slot:default>
            <thead style="background-color: #fffdd0;">
            <tr>
              <th class="text-left"></th>
              <th> <h2 class="text-left bold font-weight-black responsive" style="color: black">&lt;Top 8</h2> </th>
              <th> <h2 class="text-left bold font-weight-black responsive" style="color: black"> Top 8</h2> </th>
              <th> <h2 class="text-left bold font-weight-black responsive" style="color: black"> Finals </h2> </th>
            </tr>
            </thead>

            <tbody>
            <tr
                class="text-left"
                v-for="items in brackets"
                :key="items[0]"
            >
              <td> <h2 class="bold responsive"> {{items[0]}} </h2> </td>
              <td
                  v-for="(ft, index) in items.slice(1)"
                  :key="index"
              >
                <h2 class="responsive"> First to {{ft}} </h2>
              </td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>

    <h2>
      Prizes to be won within each division! <br/>
      <v-icon class="mr-2">$gold_medal</v-icon>1st - $30 Challenger voucher <br/>
      <v-icon class="mr-2">$silver_medal</v-icon>2nd - $20 Challenger voucher <br/>
      <v-icon class="mr-2">$bronze_medal</v-icon>3rd - $10 Challenger voucher <br/>
      <br/>
      Additional $10 Challenger voucher for each pre event awards to be won such as: <br/>
      Most liked post <br/>
      Most referred person <br/>
      <br/>
      Additional awards to be announced on the day of the event <br/>
    </h2>
  </v-container>
</template>

<style scoped>

@media only screen and (max-width: 640px) {
  h2.responsive {
    font-size: 14px;
  }
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Info",
  data() {
    return {
      brackets: [['Gold',3,3,5], ['Platinum',3,5,7], ['Diamond',5,7,9]],
      colors: {'Gold': 'yellow'},
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