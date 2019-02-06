<template>
    <span>
        <div id="top"></div>
        <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
            <v-layout justify-center align-center column px-3>
                <img src="https://i.imgur.com/KWNwM9l.png" alt="taylor law office" width="100%" class="tlo-hero">
                <h2 class="hidden-sm-and-up white--text">Exceptional service at a reduced cost</h2>
                <h2 class="display-3 font-weight-medium hidden-xs-only text-sm-center white--text">Exceptional service at a reduced cost</h2>
                <v-btn large outline class="mt-5 white--text" @click="$vuetify.goTo('#below-fold')">
                    <v-icon color="white">mdi-chevron-down</v-icon>
                    Learn More
                    <v-icon color="white">mdi-chevron-down</v-icon>
                </v-btn>
            </v-layout>
        </v-container>
    </span>
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

.tlo-hero {
    max-width: 1100px;
}

#top {
    margin: 0;
    padding: 0;
    position: absolute;
    top: -100px;
}
</style>
