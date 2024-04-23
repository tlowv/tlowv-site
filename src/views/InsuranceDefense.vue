<template>
    <span>
        <insurance-defense-header></insurance-defense-header>
        <insurance-defense-details></insurance-defense-details>
    </span>
</template>

<script>
import InsuranceDefenseHeader from '@/components/InsuranceDefenseHeader';
import InsuranceDefenseDetails from '@/components/InsuranceDefenseDetails';

export default {
    name: 'Insurance Defense',
    title: 'Insurance Defense | TLO',
    components: {
        InsuranceDefenseHeader,
        InsuranceDefenseDetails
    }
};
</script>

<style scoped>
</style>