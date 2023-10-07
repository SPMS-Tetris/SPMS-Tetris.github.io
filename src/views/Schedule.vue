<template>
  <v-container fluid>
    <h1 id="schedule" class="anchor"/>
    <h1>Schedule</h1>


    <v-row class="d-flex justify-center">
      <v-col lg="6" md="8">
        <v-simple-table class="my-12" style="background-color: #fffddf;">
          <template v-slot:default>
            <thead style="background-color: #fffdd0;">
            <tr>
              <th> <h2 class="text-left bold font-weight-black" style="color: black">Time</h2> </th>
              <th> <h2 class="text-left bold font-weight-black" style="color: black">Item</h2> </th>
            </tr>
            </thead>
            <tbody>
            <tr class="text-left">
              <td> <h2 class="bold"> 0930-1100 </h2> </td>
              <td> <h2 class="bold"> Checkins Begin </h2> </td>
            </tr>
            <tr class="text-left">
              <td> <h2 class="bold"> 1100-1130 </h2> </td>
              <td> <h2 class="bold"> Introduction </h2> </td>
            </tr>
            <tr class="text-left">
              <td> <h2 class="bold"> 1130-1400 </h2> </td>
              <td> <h2 class="bold"> Main Event </h2> </td>
            </tr>
            <tr class="text-left">
              <td> <h2 class="bold"> 1400-1500 </h2> </td>
              <td> <h2 class="bold"> Lunch Break </h2> </td>
            </tr>
            <tr class="text-left">
              <td> <h2 class="bold"> 1500-1630 </h2> </td>
              <td> <h2 class="bold"> Semi-finals </h2> </td>
            </tr>
            <tr class="text-left">
              <td> <h2 class="bold"> 1630-1700 </h2> </td>
              <td> <h2 class="bold"> Buffer </h2> </td>
            </tr>
            <tr class="text-left">
              <td> <h2 class="bold"> 1700-1800 </h2> </td>
              <td> <h2 class="bold"> Finals </h2> </td>
            </tr>
            <tr class="text-left">
              <td> <h2 class="bold"> 1800-1830 </h2> </td>
              <td> <h2 class="bold"> Prize Presentation </h2> </td>
            </tr>
            <tr class="text-left">
              <td> <h2 class="bold"> 1830-2100 </h2> </td>
              <td> <h2 class="bold"> Post Event Party (Optional) </h2> </td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Schedule"
}
</script>