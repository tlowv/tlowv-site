<template>
  <span>
    <home-hero></home-hero>
    <home-details></home-details>
    <home-attorneys></home-attorneys>
  </span>
</template>

<script>
import HomeHero from '@/components/HomeHero';
import HomeDetails from '@/components/HomeDetails';
import HomeAttorneys from '@/components/HomeAttorneys';

export default {
    name: 'home',
    components: {
      HomeHero,
      HomeDetails,
      HomeAttorneys
    }

};
</script>
