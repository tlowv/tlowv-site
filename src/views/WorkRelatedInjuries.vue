<template>
    <span>
        <work-related-injuries-header></work-related-injuries-header>
        <work-related-injuries-details></work-related-injuries-details>
    </span>
</template>

<script>
import WorkRelatedInjuriesHeader from '@/components/WorkRelatedInjuriesHeader';
import WorkRelatedInjuriesDetails from '@/components/WorkRelatedInjuriesDetails';

export default {
    name: 'Work-Related Injuries',
    title: 'Work-Related Injuries | TLO',
    components: {
        WorkRelatedInjuriesHeader,
        WorkRelatedInjuriesDetails
    }
};
</script>

<style scoped>
</style>