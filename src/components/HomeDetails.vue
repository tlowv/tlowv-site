<template>
  <v-container 
    fluid 
  >
    <v-flex id="below-fold"></v-flex>
    <v-layout 
      row 
      wrap
      style="max-width: 1100px; margin: 0 auto;"
    >
      <v-flex xs12 md4 class="home-block">
        <v-icon size="128" color="amber darken-2">mdi-scale-balance</v-icon>
        <h1 class="display-1 text-xs-center mt-4">Experienced</h1>
        <p class="subheading text-xs-center my-3">
          With decades of legal experience in both State and Federal Court across WV, TLO can address all unique defense needs.
        </p>
        <router-link to="/attorneys" class="text-xs-center">Meet out team.</router-link>
      </v-flex>
      <v-flex xs12 md4 class="home-block">
        <v-icon size="128" color="amber darken-2">mdi-gavel</v-icon>
        <h1 class="display-1 text-xs-center mt-4">Effective</h1>
        <p class="subheading text-xs-center my-3">
          Whether through trial, motion practice, or appeals, providing exceptional and extraordinary results remains TLO's driving goal.
        </p>
        <router-link to="/about" class="text-xs-center">Learn more about TLO.</router-link>
      </v-flex>
      <v-flex xs12 md4 class="home-block">
        <v-icon size="128" color="amber darken-2">mdi-book-open-page-variant</v-icon>
        <h1 class="display-1 text-xs-center mt-4">Knowledgeable</h1>
        <p class="subheading text-xs-center my-3">
          Understanding West Virginia Law, venues, and population shapes the defense strategy used by our attorneys.
        </p>
        <router-link to="/practice" class="text-xs-center">See our practice areas.</router-link>
      </v-flex>
    </v-layout>
  </v-container>
    
</template>

<script>
export default {
    name: 'HomeDetails'
};
</script>

<style scoped>
.home-block {
    display: flex;
    flex-flow: column nowrap;
    align-content: center;
    padding: 0 15px;
}

#below-fold {
    margin-bottom: 70px;
}
</style>
