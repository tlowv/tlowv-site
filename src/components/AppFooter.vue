<template>
    <v-footer
        height="auto"
        color="blue-grey darken-2"
        class="footer mt-5"
    >
        <v-layout
            justify-center
            row
            wrap
        >
            <v-btn
                v-for='link in links'
                :key='link'
                color="white"
                flat
                round
            >
                <router-link :to="link.route">
                    {{ link.title }}
                </router-link>
            </v-btn>
            <v-flex blue-grey
                darken-1
                pt-3
                px-3
                text-xs-center
                white--text
                xs12>Serving clients throughout
                    West Virginia, including Morgantown, Fairmont, Clarksburg, Kingwood,
                    Buckhannon, Weston, Beckley, Bluefield, Bridgeport, Charleston,
                    Cross Lanes, Dunbar, Huntington, Martinsburg, Moundsville, Parkersburg,
                    South Charleston, St. Albans, Teays Valley, Vienna, Weirton, Wheeling,
                    Princeton, Nitro, Oak Hill, Keyser, Romney, Kingwood, Elkins, Ripley,
                    Charles Town, Berkeley Springs, Logan, Pineville, Madison and Welch.
            </v-flex>
            <v-flex
                blue-grey
                darken-1
                pt-3
                text-xs-center
                white--text
                xs12
            >
                &copy;2019 - <strong>Taylor Law Office</strong>
            </v-flex>
            <v-flex blue-grey
                darken-1
                pb-3
                text-xs-center
                white--text
                xs12>Created by Jason Parsons using Vue.js and Vuetify
            </v-flex>
        </v-layout>
    </v-footer>
</template>

<script>
export default {
    data: () => ({
        links: [
            {
                title: 'Home',
                route: '/'
            },
            {
                title: 'About Us',
                route: '/about'
            },
            {
                title: 'Attorneys',
                route: '/attorneys'
            },
            {
                title: 'Practice Areas',
                route: '/practice'
            },
            {
                title: 'Contact Us',
                route: '/contact'
            }
        ]
    }),
    name: 'AppFooter'
};
</script>

<style scoped>
a {
    color: white;
    text-decoration: none;
}
</style>
