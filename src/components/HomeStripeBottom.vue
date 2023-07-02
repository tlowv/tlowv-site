<template>
  <v-container
    fluid
    fill-height
    class="midpage-banner mt-5"
  >
    <v-layout column py-0 class="hidden-sm-and-up">
      <h1 class="outline-text white--text font-weight-black mb-3">Decades of combined experience</h1>
      <h3 class="outline-text white--text">We handle cases all over West Virginia with experience in front of nearly every presiding judge</h3>
    </v-layout>
    <v-layout column py-5 class="hidden-xs-only">
      <div class="outline-text display-3 white--text font-weight-black mb-3">Decades of combined experience</div>
      <h2 class="outline-text display-1 white--text">We handle cases all over West Virginia with experience in front of nearly every presiding judge</h2>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    name: 'HomeStripeBottom'
};
</script>

<style scoped>
.midpage-banner {
    background: url('https://i.imgur.com/4EymK37.jpg');
    background-size: cover;
    background-position: center 95%;
    background-repeat: no-repeat;
    width: 100%;
    height: 40vh;
}
</style>
