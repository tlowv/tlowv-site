<template>
    <span>
        <v-navigation-drawer app v-model="drawer" class="blue-grey darken-1" dark disable-resize-watcher>
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index">
                        <v-list-tile-content>
                            {{item.title}}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar app color="blue-grey darken-2" dark height="50px">
            <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link to="/">
                <v-toolbar-title>{{appTitle}}</v-toolbar-title>
            </router-link>
            <v-btn flat class="hidden-sm-and-down" to="/attorneys">Meet Our Firm</v-btn>
            <v-btn flat class="hidden-sm-and-down" to="/practice">Practice Areas</v-btn>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-btn color="red darken-2" class="hidden-sm-and-down" to="/contact">Contact Us</v-btn>
        </v-toolbar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'TLO',
            drawer: false,
            items: [
                { title: 'Meet Our Firm' },
                { title: 'Practice Areas' },
                { title: 'Contact' }
            ]
        };
    }
};
</script>

<style scoped>
a {
    color: white;
    text-decoration: none;
}
</style>
