<template>
    <span>
        <v-navigation-drawer 
            app 
            v-model="drawer" 
            class="blue-grey darken-1" 
            dark 
            disable-resize-watcher
        >
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index">
                        <v-list-tile-content>
                            <router-link :to="item.route">
                                {{item.title}}
                            </router-link>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar  
            app 
            dark 
            color="blue-grey darken-1"
        >
            <v-toolbar-side-icon 
                class="hidden-md-and-up" 
                @click="drawer = !drawer"
            ></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <div class="hidden-md-and-up ml-3 red--text font-weight-black">Call: 304-225-8529</div>
            <router-link to="/">
                <v-toolbar-title @click="$vuetify.goTo('#top')">
                    <img class="brand-logo" src="https://i.imgur.com/vdgnQ4f.png" alt="tlo brand">
                </v-toolbar-title>
            </router-link>
            <v-btn 
                flat 
                round 
                class="hidden-sm-and-down" 
                to="/attorneys"
            >
                Attorneys
            </v-btn>
            <v-btn 
                flat 
                round 
                class="hidden-sm-and-down" 
                to="/practice"
            >
                Practice
            </v-btn>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <div class="hidden-sm-and-down">330 Scott Ave, Suite 3 | Morgantown, WV 26508</div>
            <div class="hidden-sm-and-down ml-3 red--text font-weight-black">304-225-8529</div>
            <v-btn 
                round 
                color="red darken-2" 
                class="white--text hidden-sm-and-down" 
                to="/contact"
            >
                Contact Us
            </v-btn>
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
                {
                    title: 'Our Attorneys',
                    route: '/attorneys'
                },
                {
                    title: 'Practice Areas',
                    route: '/practice'
                },
                {
                    title: 'Contact',
                    route: '/contact'
                },
                {
                    title: 'About Us',
                    route: '/about'
                }
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

.brand-logo {
    height: 40px;
    width: 80px;
    margin-top: 5px;
}
</style>
