<template>
    <v-container fluid fill-height class="property-damage-header" style="max-height: 60vh;">
        <v-layout justify-center align-center column pa-5>
            <div class="outline-text display-3 white--text font-weight-black text-xs-center mb-3">Property Damage - Investigations & Assistance</div>
            <v-btn large outline class="mt-5 white--text" @click="$vuetify.goTo('#bottom')">
                <v-icon color="white">mdi-chevron-down</v-icon>
                Get Help Today!
                <v-icon color="white">mdi-chevron-down</v-icon>
            </v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'PropertyDamageHeader'
};
</script>

<style scoped>
.property-damage-header {
    background: url('https://i.imgur.com/AoyZG1O.jpg');
    background-position: center 50%;
    background-size: cover;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

hr {
    color: white;
    width: 90%;
    margin-bottom: 15px;
    border-style: solid;
}
</style>