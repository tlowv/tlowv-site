<template>
    <div>
        <v-container style="max-width: 800px;">
            <v-layout column>
                <v-flex>
                    <div class="display-1">Work-Related Injuries at TLO</div>
                    <p>
                        At Taylor Law Office, we are committed to providing comprehensive legal support for employees
                        who have suffered injuries in the workplace. Our practice is dedicated to navigating the
                        complexities of work-related injury claims in West Virginia, ensuring that employees receive the
                        justice and compensation they deserve.
                    </p>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container fluid>
            <v-layout row wrap style="max-width: 1200px; margin: 0 auto;">
                <v-flex xs12 md3 class="why-tlo-block">
                    <v-icon size="128" color="amber darken-2">mdi-trophy</v-icon>
                    <h1 class="display-1 text-xs-center mt-4">Proven Track Record</h1>
                    <p class="subheading text-xs-center my-3">
                        Our firm is a recognized leader in work-related injury claims throughout West Virginia, having
                        successfully resolved many cases.
                    </p>
                </v-flex>
                <v-flex xs12 md3 class="why-tlo-block">
                    <v-icon size="128" color="amber darken-2">mdi-book-open-page-variant</v-icon>
                    <h1 class="display-1 text-xs-center mt-4">Expert Legal Team</h1>
                    <p class="subheading text-xs-center my-3">
                        Our attorneys have comprehensive knowledge of state safety regulations and workers' compensation
                        laws, ensuring expertly handled claims.
                    </p>
                </v-flex>
                <v-flex xs12 md3 class="why-tlo-block">
                    <v-icon size="128" color="amber darken-2">mdi-sync</v-icon>
                    <h1 class="display-1 text-xs-center mt-4">Comprehensive Support</h1>
                    <p class="subheading text-xs-center my-3">
                        From initial consultation to final verdict, our team offers thorough guidance at every step.
                    </p>
                </v-flex>
                <v-flex xs12 md3 class="why-tlo-block">
                    <v-icon size="128" color="amber darken-2">mdi-account-multiple</v-icon>
                    <h1 class="display-1 text-xs-center mt-4">Client-Centric Approach</h1>
                    <p class="subheading text-xs-center my-3">
                        We provide personalized legal strategies tailored to the unique circumstances and needs of each
                        client.
                    </p>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container style="max-width: 800px;">
            <v-layout column>
                <v-flex>
                    <div class="headline mt-3">Our Expertise</div>
                    <p class="mt-3">
                        Taylor Law Office has extensive experience in challenging cases where employers have violated
                        safety standards, causing injury to employees. Our legal team excels in:
                    </p>
                    <ul>
                        <li><p><strong>Proving Liability:</strong> We collaborate with a variety of experts to establish the employer's
                            deliberate intent and liability.</p></li>
                        <li><p><strong>Quantifying Damages:</strong> Our experts are skilled in calculating comprehensive compensation for
                            both economic and non-economic damages resulting from workplace injuries.</p></li>
                    </ul>
                    <p class="mt-3">
                        We understand the statutory immunities that protect employers and are adept at piercing these
                        protections when justified, especially in cases of deliberate misconduct.
                    </p>
                </v-flex>
                <v-flex>
                    <div class="headline mt-3">Our Clients</div>
                    <p class="mt-3">
                        Our clients include employees from various sectors who have faced work-related injuries under
                        different circumstances. We ensure that each case is handled with the utmost care and
                        professionalism, aiming to secure the best possible outcome for our clients.
                    </p>
                </v-flex>
                <v-flex xs12 class="form-container mt-3" id="bottom"><contact-form></contact-form></v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import ContactForm from '@/components/ContactForm';

export default {
    name: 'WorkRelatedInjuriesDetails',
    components: {
        ContactForm
    }
};
</script>

<style scoped>
.why-tlo-block {
    display: flex;
    flex-flow: column nowrap;
    align-content: center;
    padding: 0 15px;
}

.display-1 {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
