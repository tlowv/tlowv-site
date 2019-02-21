<template>
  <span>
    <home-hero></home-hero>
    <home-details></home-details>
    <home-stripe></home-stripe>
    <home-details-lower></home-details-lower>
    <home-stripe-bottom></home-stripe-bottom>
    <home-details-bottom></home-details-bottom>
  </span>
</template>

<script>
import HomeHero from '@/components/HomeHero';
import HomeDetails from '@/components/HomeDetails';
import HomeStripe from '@/components/HomeStripe';
import HomeDetailsLower from '@/components/HomeDetailsLower';
import HomeStripeBottom from '@/components/HomeStripeBottom';
import HomeDetailsBottom from '@/components/HomeDetailsBottom';

export default {
    name: 'home',
    title: 'Taylor Law Office',
    components: {
        HomeHero,
        HomeDetails,
        HomeStripe,
        HomeDetailsLower,
        HomeStripeBottom,
        HomeDetailsBottom
    }
};
</script>

<style>
.outline-text {
    text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.15), 1px -1px 0 rgba(0, 0, 0, 0.15),
        -1px 1px 0 rgba(0, 0, 0, 0.15), 1px 1px 0 rgba(0, 0, 0, 0.15);
}
</style>
