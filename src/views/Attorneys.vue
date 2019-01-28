<template>
    <span>
        <attorneys-header></attorneys-header>
        <attorneys-details></attorneys-details>
    </span>
</template>

<script>
import AttorneysHeader from '@/components/AttorneysHeader';
import AttorneysDetails from '@/components/AttorneysDetails';

export default {
    name: 'attorneys',
    components: {
        AttorneysHeader,
        AttorneysDetails
    }
};
</script>

<style scoped>
</style>
