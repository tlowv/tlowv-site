<template>
    <header class="attorneys-header" style="max-height: 60vh;">
      <v-container 
          fluid 
          fill-height 
      >
          <v-layout 
              justify-center 
              align-center 
              column 
              pa-5
          >
              <div class="outline-text display-3 white--text font-weight-black text-xs-center mb-3">Meet Our Attorneys</div>
              <v-divider></v-divider>
              <h2 class="outline-text hidden-sm-and-up white--text text-xs-center">See why we're best suited to defend you</h2>
              <h2 class="outline-text display-3 font-weight-light white--text hidden-xs-only text-xs-center">See why we're best suited to defend you</h2>
          </v-layout>
      </v-container>
    </header>
</template>

<script>
export default {
    name: 'AttorneysHeader'
};
</script>

<style scoped>
.attorneys-header {
    background: url('https://i.imgur.com/rbNhtac.jpg');
    background-size: cover;
    width: 100%;
    height: 100%;
}

hr {
    color: white;
    width: 90%;
    margin-bottom: 15px;
    border-style: solid;
}
</style>
