<template>
    <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-2>
            
            <img src="https://i.imgur.com/KWNwM9l.png" alt="taylor law office" width="100%">
            <h2 class="display-1 hidden-sm-and-up white--text">Exceptional service at a reduced cost</h2>
            <h2 class="display-3 hidden-xs-only white--text">Exceptional service at a reduced cost</h2>
            <v-btn large round class="mt-5 blue-grey darken-1 white--text" @click="$vuetify.goTo('#below-fold')">
                <v-icon color="white">mdi-chevron-down</v-icon>
                Learn More
                <v-icon color="white">mdi-chevron-down</v-icon>
            </v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeHero'
};
</script>

<style scoped>
.home-hero {
    background: url('https://i.imgur.com/IDTrhdW.jpg');
    background-size: cover;
    width: 100%;
    height: 100%;
}


</style>
