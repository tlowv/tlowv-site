<template>
  <span>
    <about-header></about-header>
    <about-details></about-details>
  </span>
</template>

<script>
import AboutHeader from '@/components/AboutHeader';
import AboutDetails from '@/components/AboutDetails';
export default {
    name: 'About',
    title: 'About Us | TLO',
    components: {
        AboutHeader,
        AboutDetails
    }
};
</script>

<style scoped>
</style>
