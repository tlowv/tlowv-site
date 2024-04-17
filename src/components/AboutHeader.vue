<template>
    <v-container fluid fill-height class="about-header" style="max-height: 60vh;">
        <v-layout justify-center align-center column pa-5>
            <div class="outline-text display-3 white--text font-weight-black text-xs-center mb-3">About Us</div>
            <v-divider></v-divider>
            <h2 class="outline-text hidden-sm-and-up white--text text-xs-center">Experience to produce results.</h2>
            <h2 class="outline-text display-3 font-weight-light white--text hidden-xs-only text-xs-center">Experience to produce results.</h2>
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
    background: url('https://i.imgur.com/8mnGzJm.jpg');
    background-position: center 10%;
    background-size: cover;
   
}

hr {
    color: white;
    width: 90%;
    margin-bottom: 15px;
    border-style: solid;
}
</style>
