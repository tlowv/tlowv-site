<template>
    <v-container fluid fill-height class="contact-header" style="max-height: 60vh;">
        <v-layout justify-center align-center column pa-5>
            <div class="outline-text display-3 white--text font-weight-black text-xs-center mb-3">Contact Us</div>
            <v-divider></v-divider>
            <h2 class="outline-text hidden-sm-and-up white--text text-xs-center">Get help today</h2>
            <h2 class="outline-text display-3 font-weight-light white--text hidden-xs-only text-xs-center">Get help today</h2>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'ContactHeader'
};
</script>

<style scoped>
.contact-header {
    background: url('https://i.imgur.com/gPwBEYR.jpg');
    background-size: cover;
    background-position: center 15%;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
