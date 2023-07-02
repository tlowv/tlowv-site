<template>
  <v-container
    fluid
    fill-height
    class="midpage-banner mt-5"
  >
    <v-layout column py-0 class="hidden-sm-and-up">
      <h1 class="outline-text white--text font-weight-black mb-3">Insurance defense and representing insureds is our focus</h1>
    </v-layout>
    <v-layout column py-5 class="hidden-xs-only">
      <div class="outline-text display-3 white--text font-weight-black mb-3">Insurance defense and representing insureds is our focus</div>
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
    background-position: 20% center;
    background-repeat: no-repeat;
    width: 100%;
    height: 30vh;
}
</style>
