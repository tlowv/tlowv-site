<template>
    <v-app>
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
p {
  color: #333;
  font-size: 1.25em;
  line-height: 1.5;
}

</style>
