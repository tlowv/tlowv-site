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
    components: {
        AboutHeader,
        AboutDetails
    }
};
</script>

<style scoped>
</style>
