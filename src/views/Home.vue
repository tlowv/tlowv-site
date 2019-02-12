<template>
  <span>
    <home-hero></home-hero>
    <home-details></home-details>
    <home-stripe></home-stripe>
    <home-details-lower></home-details-lower>
    <home-stripe></home-stripe>
    <home-details-lower></home-details-lower>
  </span>
</template>

<script>
import HomeHero from '@/components/HomeHero';
import HomeDetails from '@/components/HomeDetails';
import HomeStripe from '@/components/HomeStripe';
import HomeDetailsLower from '@/components/HomeDetailsLower';

export default {
    name: 'home',
    components: {
        HomeHero,
        HomeDetails,
        HomeStripe,
        HomeDetailsLower
    }
};
</script>
