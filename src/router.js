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
        {
            path: '/insurance-defense',
            name: 'insurance-defense',
            component: () => import('./views/InsuranceDefense.vue'),
            meta: { title: 'Insurance Defense - Taylor Law Office' }
        },
        {
            path: '/work-related-injuries',
            name: 'work-related-injuries',
            component: () => import('./views/WorkRelatedInjuries.vue'),
            meta: { title: 'Work-Related Injuries - Taylor Law Office' }
        },
        {
            path: '/personal-injuries',
            name: 'personal-injuries',
            component: () => import('./views/PersonalInjuries.vue'),
            meta: { title: 'Personal Injuries - Taylor Law Office' }
        },
        {
            path: '/coverage-decisions',
            name: 'coverage-decisions',
            component: () => import('./views/CoverageDecisions.vue'),
            meta: { title: 'Coverage Decisions and Appeals - Taylor Law Office' }
        },
        {
            path: '/premises-liability',
            name: 'premises-liability',
            component: () => import('./views/PremisesLiability.vue'),
            meta: { title: 'Premises Liability and Dog Bite Defense - Taylor Law Office' }
        },
        {
            path: '/property-damage',
            name: 'property-damage',
            component: () => import('./views/PropertyDamage.vue'),
            meta: { title: 'Property Damage Claims and Investigations - Taylor Law Office' }
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    }
});
