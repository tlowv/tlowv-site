<template>
    <span>
        <v-navigation-drawer app v-model="drawer" class="brown lighten-2" dark disable-resize-watcher>
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

        <v-toolbar app color="brown darken-4" dark>
            <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <v-toolbar-title>{{appTitle}}</v-toolbar-title>
            <v-btn flat class="hidden-sm-and-down">Our Office</v-btn>
            <v-btn flat class="hidden-sm-and-down">Practice</v-btn>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            
            <v-btn color="brown lighten-3" class="hidden-sm-and-down">Contact Us</v-btn>
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
                { title: 'Our Office' },
                { title: 'Practice Areas' },
                { title: 'Join' }
            ]
        };
    }
};
</script>

<style scoped>
</style>