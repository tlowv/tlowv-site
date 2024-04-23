<template>
    <span>
        <coverage-decisions-header></coverage-decisions-header>
        <coverage-decisions-details></coverage-decisions-details>
    </span>
</template>

<script>
import CoverageDecisionsHeader from '@/components/CoverageDecisionsHeader';
import CoverageDecisionsDetails from '@/components/CoverageDecisionsDetails';

export default {
    name: 'Insurance Coverage - Decisions & Appeals',
    title: 'Insurance Coverage - Decisions & Appeals | TLO',
    components: {
        CoverageDecisionsHeader,
        CoverageDecisionsDetails
    }
};
</script>

<style scoped>
</style>