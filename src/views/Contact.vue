<template>
    <span>
        <contact-header></contact-header>
        <contact-details></contact-details>
    </span>
</template>

<script>
import ContactHeader from '@/components/ContactHeader';
import ContactDetails from '@/components/ContactDetails';

export default {
    name: 'Contact',
    components: {
        ContactHeader,
        ContactDetails
    }
};
</script>

<style scoped>
</style>
