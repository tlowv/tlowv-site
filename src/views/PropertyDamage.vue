<template>
    <span>
        <property-damage-header></property-damage-header>
        <property-damage-details></property-damage-details>
    </span>
</template>

<script>
import PropertyDamageHeader from '@/components/PropertyDamageHeader';
import PropertyDamageDetails from '@/components/PropertyDamageDetails';

export default {
    name: 'Property Damage - Claims & Investigations',
    title: 'Property Damage - Claims & Investigations | TLO',
    components: {
        PropertyDamageHeader,
        PropertyDamageDetails
    }
};
</script>

<style scoped>
</style>