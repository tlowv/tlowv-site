<template>
  <v-container
    fluid
    fill-height
    class="midpage-banner mt-5"
  >
    <v-layout column py-5 class="hidden-sm-and-up">
      <h1 class="white--text font-weight-black mb-3">Lorem ipsum dolor sit amet</h1>
      <h3 class="white--text">consectetur adipiscing elit, sed do eiusmod tempor incididunt</h3>
    </v-layout>
    <v-layout column py-5 class="hidden-xs-only">
      <div class="display-3 white--text font-weight-black mb-3">Lorem ipsum dolor sit amet</div>
      <h2 class="display-1 white--text">consectetur adipiscing elit, sed do eiusmod tempor incididunt</h2>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    name: 'HomeStripe'
};
</script>

<style scoped>
.midpage-banner {
    background: url('https://i.imgur.com/SJnOPXH.jpg');
    background-size: cover;
    background-position: center 18%;
    background-repeat: no-repeat;
    width: 100%;
    height: 35vh;
}
</style>
