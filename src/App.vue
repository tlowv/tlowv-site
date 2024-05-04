<template>
    <v-app style="background-color: #ECEFF1; color: #263238">
        <app-navigation></app-navigation>
        <v-content transition="slide-y-transition">
            <router-view></router-view>
            <app-footer></app-footer>
        </v-content>
    </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';
import AppFooter from '@/components/AppFooter';

export default {
    name: 'App',
    components: {
        AppNavigation,
        AppFooter
    }
};
</script>

<style>
html, body {
  background-color: #ECEFF1;
}

p {
  font-size: 1.25em;
  line-height: 1.5;
}

</style>
