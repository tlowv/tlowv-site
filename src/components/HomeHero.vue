<template>
    <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black white--text text-xs-center">TAYLOR</div>
            <div class="display-4 font-weight-black white--text text-xs-center mb-3">LAW OFFICE</div>
            <div class="display-1 font-weight-bold white--text text-xs-center">Exceptional service at a reasonable cost.</div>
            <v-btn fab class="mt-5 blue-grey darken-2">
            <v-icon large color="white"></v-icon>
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
