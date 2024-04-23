<template>
    <span>
        <personal-injuries-header></personal-injuries-header>
        <personal-injuries-details></personal-injuries-details>
    </span>
</template>

<script>
import PersonalInjuriesHeader from '@/components/PersonalInjuriesHeader';
import PersonalInjuriesDetails from '@/components/PersonalInjuriesDetails';

export default {
    name: 'Personal Injuries',
    title: 'Personal Injuries | TLO',
    components: {
        PersonalInjuriesHeader,
        PersonalInjuriesDetails
    }
};
</script>

<style scoped>
</style>