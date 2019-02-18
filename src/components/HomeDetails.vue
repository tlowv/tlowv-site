<template>
  <v-container 
    fluid 
  >
    <v-flex id="below-fold"></v-flex>
    <v-layout 
      row 
      wrap
      style="max-width: 1300px; margin: 0 auto;"
    >
      <v-flex xs12 md4 class="home-block">
        <v-icon size="128" color="amber darken-1">mdi-scale-balance</v-icon>
        <h1 class="display-1 text-xs-center mt-4">Fair</h1>
        <p class="subheading text-xs-center my-3">
          Taylor Law Office provides extremely effective service for a very reasonable, 
          competitive price.  Quality defense for a fair price.
        </p>
        <a class="text-xs-center" href="/contact">Contact us today for a quote.</a>
      </v-flex>
      <v-flex xs12 md4 class="home-block">
        <v-icon size="128" color="amber darken-1">mdi-gavel</v-icon>
        <h1 class="display-1 text-xs-center mt-4">Effective</h1>
        <p class="subheading text-xs-center my-3">
          Whether through trial victories or settlement negotiations, our clients 
          experience a satisfaction rate of over 95%.
        </p>
        <a class="text-xs-center" href="/attorneys">Learn why our attorneys are so effective.</a>
      </v-flex>
      <v-flex xs12 md4 class="home-block">
        <v-icon size="128" color="amber darken-1">mdi-book-open-page-variant</v-icon>
        <h1 class="display-1 text-xs-center mt-4">Knowledgeable</h1>
        <p class="subheading text-xs-center my-3">
          With years of experience across many different practice areas, you can bet 
          that we've seen almost everything.  This experience is priceless.
        </p>
        <a class="text-xs-center" href="/practice">See which areas we specialize in.</a>
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
