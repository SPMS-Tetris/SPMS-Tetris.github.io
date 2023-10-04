<template>
  <v-container fluid>
    <h1 id="info" class="anchor"/>
    <h1>Tournament Info</h1>
    <h2>
      Matches will be played using TETR.IO's Tetra League ruleset <br/>
      Players will face off each other within their own division, with the win condition being dependent on the division <br/>
    </h2>

    <v-row class="d-flex justify-center">
      <v-col lg="6" md="8">
        <v-simple-table style="background-color: #fffddf">
          <template v-slot:default>
            <thead>
            <tr>
              <th class="text-left"></th>
              <th class="text-left"> &lt;Top 8 </th>
              <th class="text-left"> Top 8 </th>
              <th class="text-left"> Finals </th>
            </tr>
            </thead>

            <tbody>
            <tr
                class="text-left"
                v-for="items in brackets"
                :key="items[0]"
            >
              <td>{{items[0]}}</td>
              <td
                  v-for="(ft, index) in items.slice(1)"
                  :key="index"
              >
                First to {{ft}}
              </td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>

    <h2>
      Prizes to be won within each division! <br/>
      1st - $30 challenger voucher <br/>
      2nd - $20 challenger voucher <br/>
      3rd - $10 challenger voucher <br/>
      <br/>
      Additional $10 challenger voucher for each pre event awards to be won such as: <br/>
      Most viewed post <br/>
      Most liked post <br/>
      Most referred person <br/>
    </h2>
  </v-container>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Info",
  data() {
    return {
      brackets: [['Gold',3,3,5], ['Platinum',3,5,7], ['Diamond',5,7,9]]
    }
  }
})
</script>