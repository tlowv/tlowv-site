<template>
    <span>
        <practice-header></practice-header>
        <practice-details></practice-details>
    </span>
</template>

<script>
import PracticeHeader from '@/components/PracticeHeader';
import PracticeDetails from '@/components/PracticeDetails';

export default {
    name: 'practice',
    title: 'Practice Areas | TLO',
    components: {
        PracticeHeader,
        PracticeDetails
    }
};
</script>

<style scoped>
</style>
