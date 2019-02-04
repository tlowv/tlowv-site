<template>
    <v-container>
        <v-layout row wrap align-center style="max-width: 1100px; margin: 0 auto;">            
            <v-flex xs12 sm6 mb-2 class="contact-row">
                <p class="subheading">
                    Here at Taylor Law Office, we always enjoy hearing from our 
                    current and potential clients. If you have a question or would like to comment 
                    on anything you've seen or read on this website, contact us by phone or by simply 
                    filling out the form below.
                </p>
                <div class="headline">Taylor Law Office</div>
                <div class="subheading">330 Scott Avenue</div>
                <div class="subheading">Suite 3</div>
                <div class="subheading">Morgantown, WV 26508</div>
                <div class="headline">Phone: 304-225-8529</div>
                <div class="headline mb-5">Fax: 304-225-8531</div>                
            </v-flex>
            <v-flex xs12 sm6 class="mb-5">
                <google-map name="example"></google-map>
            </v-flex>
            <v-flex xs12 class="form-container"><contact-form></contact-form> </v-flex>
        </v-layout>        
    </v-container>
</template>

<script>
import GoogleMap from '@/components/GoogleMap';
import ContactForm from '@/components/ContactForm';

export default {
    components: {
        GoogleMap,
        ContactForm
    }
};
</script>

<style scoped>
</style>
