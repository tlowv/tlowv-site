<template>
    <v-container 
        fluid 
        fill-height 
        class="attorneys-header" 
        style="max-height: 60vh;"
    >
        <v-layout 
            justify-center 
            align-center 
            column 
            pa-5
        >
            <div class="outline-text display-3 white--text font-weight-black text-xs-center mb-3">Meet Our Attorneys</div>
            <v-divider></v-divider>
            <h2 class="outline-text hidden-sm-and-up white--text text-xs-center">See why we're best suited to defend you</h2>
            <h2 class="outline-text display-3 font-weight-light white--text hidden-xs-only text-xs-center">See why we're best suited to defend you</h2>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'AttorneysHeader'
};
</script>

<style scoped>
.attorneys-header {
    background: url('https://i.imgur.com/JbDFasy.jpg');
    background-size: cover;
    background-position: center 20%;
    width: 100%;
    height: 100%;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

hr {
    color: white;
    width: 90%;
    margin-bottom: 15px;
    border-style: solid;
}
</style>
