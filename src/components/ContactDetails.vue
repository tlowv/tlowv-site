<template>
    <v-container>
        <v-layout row wrap align-center>
            
            <v-flex xs12 sm6 mb-2>
                <p class="subheading">Taylor Law Office is located on Scott Avenue in Morgantown.  Get in touch with us using the following contact information, or use the form below to send us an email.</p>
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
.form-container {
    margin: 0 auto;
    max-width: 900px;
}
</style>
