import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: { title: 'Taylor Law Office' }
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/About.vue'),
            meta: { title: 'About - Taylor Law Office' }
        },
        {
            path: '/attorneys',
            name: 'attorneys',
            component: () => import('./views/Attorneys.vue'),
            meta: { title: 'Attorneys - Taylor Law Office' }
        },
        {
            path: '/practice',
            name: 'practice',
            component: () => import('./views/Practice.vue'),
            meta: { title: 'Practice Areas - Taylor Law Office' }
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('./views/Contact.vue'),
            meta: { title: 'Contact Us - Taylor Law Office' }
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    }
});
