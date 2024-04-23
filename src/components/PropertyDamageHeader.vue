<template>
    <v-container fluid fill-height class="property-damage-header" style="max-height: 60vh;">
        <v-layout justify-center align-center column pa-5>
            <div class="outline-text display-3 white--text font-weight-black text-xs-center mb-3">Property Damage - Claims & Investigations</div>
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
    background: url('https://images.unsplash.com/photo-1566933293069-b55c7f326dd4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    background-position: center 50%;
    background-size: cover;
   
}

hr {
    color: white;
    width: 90%;
    margin-bottom: 15px;
    border-style: solid;
}
</style>