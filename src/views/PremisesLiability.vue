<template>
    <span>
        <premises-liability-header></premises-liability-header>
        <premises-liability-details></premises-liability-details>
    </span>
</template>

<script>
import PremisesLiabilityHeader from '@/components/PremisesLiabilityHeader';
import PremisesLiabilityDetails from '@/components/PremisesLiabilityDetails';

export default {
    name: 'Premises Liability & Dog Bite Defense',
    title: 'Premises Liability & Dog Bite Defense | TLO',
    components: {
        PremisesLiabilityHeader,
        PremisesLiabilityDetails
    }
};
</script>

<style scoped>
</style>