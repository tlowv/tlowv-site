<template>
    <span>
        <v-navigation-drawer app v-model="drawer" class="blue-grey darken-1" dark disable-resize-watcher>
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index">
                        <v-list-tile-content>
                            <router-link :to="item.route">
                                {{ item.title }}
                            </router-link>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app dark color="blue-grey darken-1">
            <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <div class="hidden-md-and-up ml-3 amber--text darken-2 font-weight-black">Call: 304-225-8529</div>
            <router-link to="/">
                <v-toolbar-title @click="$vuetify.goTo('#top')">
                    <img class="brand-logo" src="https://i.imgur.com/vdgnQ4f.png" alt="tlo brand">
                </v-toolbar-title>
            </router-link>
            <v-btn flat round class="hidden-sm-and-down" to="/attorneys">
                Attorneys
            </v-btn>
            <v-menu open-on-hover offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn flat round class="hidden-sm-and-down" v-on="on" to="/practice">
                        Practice Areas<v-icon color="white">mdi-chevron-down</v-icon>
                    </v-btn>
                </template>
                <v-list class="custom-dropdown">
                    <v-container v-for="(practiceItem, index) in practiceItems" :key="index"
                        class="hover-container" @click="goTo(practiceItem.route)" :class="{ clickable: true }"
                        style="max-height: 50px; display: flex; align-items: center;">
                        <v-list-item-title>{{ practiceItem.title }}<v-icon class="custom-arrow ml-2">mdi-arrow-right</v-icon></v-list-item-title>
                    </v-container>
                </v-list>
            </v-menu>
            <v-btn flat round class="hidden-sm-and-down" to="/about">
                About Us
            </v-btn>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <div class="hidden-sm-and-down">330 Scott Ave, Suite 3 | Morgantown, WV 26508</div>
            <div class="hidden-sm-and-down ml-3 amber--text font-weight-black">304-225-8529</div>
            <v-btn round color="amber darken-2" class="white--text font-weight-black hidden-sm-and-down" to="/contact">
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
                { title: 'Our Attorneys', route: '/attorneys' },
                { title: 'Practice Areas', route: '/practice' },
                { title: 'Contact', route: '/contact' },
                { title: 'About Us', route: '/about' }
            ],
            practiceItems: [
                { title: 'Insurance Defense', route: '/insurance-defense' },
                { title: 'Work-Related Injuries', route: '/work-related-injuries' },
                { title: 'Personal Injuries', route: '/personal-injuries' },
                { title: 'Coverage Decisions & Appeals', route: '/coverage-decisions' },
                { title: 'Premises Liability Defense', route: '/premises-liability' },
                { title: 'Property Damage', route: '/property-damage' }
            ]
        };
    },
    methods: {
        goTo(route) {
            this.$router.push(route);
        }
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
    margin: 0 -10px;
    margin-top: 5px;
    padding-left: 0;
}

.custom-dropdown {
    color: #546E7A;
    background: #FFA000;
    font-weight: 800;
    font-size: large;
}

.hover-container:hover {
    color: white;
    font-size: larger;
}

.hover-container .custom-arrow {
    color: #546E7A;
    transform: rotate(-45deg);
}

.hover-container:hover .custom-arrow {
    color: white;
    transform: scale(1.4);
}

.clickable {
    cursor: pointer;
}
</style>
