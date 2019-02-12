<template>
  <v-container 
    fluid 
  >
    <v-flex id="below-fold" class="mb-5"></v-flex>
    <v-layout 
      row 
      wrap
    >
      <v-flex xs12 md4 class="home-block">
        <v-icon size="128" color="amber darken-1">mdi-scale-balance</v-icon>
        <h1 class="display-1 text-xs-center mt-4">Reasonable</h1>
        <p class="subheading text-xs-center my-3">
          Taylor Law Office provides extremely effective service for a very reasonable, 
          competitive price.  Fair defense for a fair price.
        </p>
        <a class="text-xs-center" href="#">Contact us today for a quote.</a>
      </v-flex>
      <v-flex xs12 md4 class="home-block">
        <v-icon size="128" color="amber darken-1">mdi-gavel</v-icon>
        <h1 class="display-1 text-xs-center mt-4">Effective</h1>
        <p class="subheading text-xs-center my-3">
          Whether through trial victories or settlement negotiations, our clients 
          experience a satisfaction rate of over 95%.
        </p>
        <a class="text-xs-center" href="#">Learn why our attorneys are so effective.</a>
      </v-flex>
      <v-flex xs12 md4 class="home-block">
        <v-icon size="128" color="amber darken-1">mdi-book-open-page-variant</v-icon>
        <h1 class="display-1 text-xs-center mt-4">Knowledgeable</h1>
        <p class="subheading text-xs-center my-3">
          With years of experience across many different practice areas, you can bet 
          that we've seen almost everything.  This experience is priceless.
        </p>
        <a class="text-xs-center" href="#">See which areas we specialize in.</a>
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
    margin: 15px 0;
    padding: 0 15px;
}
</style>
