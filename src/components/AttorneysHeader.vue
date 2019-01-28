<template>
    <v-container fluid fill-height class="attorneys-header" style="max-height: 50vh;">
        <v-layout justify-center align-center column pa-5>
            <div class="display-3 font-weight-light text-xs-center mb-3">Meet Our Attorneys</div>
            <v-divider></v-divider>
            <div class="display-1 font-weight-light text-xs-center">See why we're best suited to defend you.</div>
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
    background-color: lightgrey;
}

hr {
    color: black;
    width: 90%;
    margin-bottom: 15px;
    border-style: solid;
}
</style>
