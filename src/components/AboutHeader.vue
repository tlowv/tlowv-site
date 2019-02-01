<template>
    <v-container fluid fill-height class="about-header" style="max-height: 60vh;">
        <v-layout justify-center align-center column pa-5>
            <div class="display-3 white--text font-weight-black text-xs-center mb-3">About Us</div>
            <v-divider></v-divider>
            <h2 class="hidden-sm-and-up white--text text-xs-center">Small office feel with big-time service</h2>
            <h2 class="display-3 font-weight-light white--text hidden-xs-only text-xs-center">Small office feel with big-time service</h2>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'AboutHeader'
};
</script>

<style scoped>
.about-header {
    background: url('https://i.imgur.com/GDgZLDW.jpg');
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
