<template>
    <div>
        <v-container style="max-width: 800px;">
            <v-layout column>
                <v-flex>
                    <div class="display-1">Insurance Defense at TLO</div>
                    <p>
                        At Taylor Law Office, we specialize in providing robust legal solutions and defense strategies
                        for a
                        variety of insurance-related disputes. Our practice is dedicated to insurance defense,
                        reflecting
                        our commitment to excellence and thorough legal support for insurers across West Virginia.
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
                        With thousands of cases and countless successful verdicts, our firm has established itself as a
                        leader in the field of insurance defense.
                    </p>
                </v-flex>
                <v-flex xs12 md3 class="why-tlo-block">
                    <v-icon size="128" color="amber darken-2">mdi-gavel</v-icon>
                    <h1 class="display-1 text-xs-center mt-4">Extensive Trial Experience</h1>
                    <p class="subheading text-xs-center my-3">
                        Our attorneys have a comprehensive understanding of the legal landscape across West Virginia,
                        having engaged with nearly every sitting judge in the state.
                    </p>
                </v-flex>
                <v-flex xs12 md3 class="why-tlo-block">
                    <v-icon size="128" color="amber darken-2">mdi-magnify</v-icon>
                    <h1 class="display-1 text-xs-center mt-4">Dedicated Focus</h1>
                    <p class="subheading text-xs-center my-3">
                        Insurance defense is the cornerstone of our practice at Taylor Law Office. Our dedicated
                        approach ensures we are always aligned with the latest legal trends and judicial insights.
                    </p>
                </v-flex>
                <v-flex xs12 md3 class="why-tlo-block">
                    <v-icon size="128" color="amber darken-2">mdi-account-multiple</v-icon>
                    <h1 class="display-1 text-xs-center mt-4">Client-Centric Approach</h1>
                    <p class="subheading text-xs-center my-3">
                        We ensure that each client receives personalized attention and a defense strategy tailored to
                        their specific case and coverage stipulations.
                    </p>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container style="max-width: 800px;">
            <v-layout column>
                <v-flex>
                    <div class="headline mt-3">Our Expertise</div>
                    <p class="mt-3">
                        Taylor Law Office has a profound legacy and expertise in handling complex insurance defense
                        cases.
                        We've successfully litigated over 2,000 cases, providing us with unique insights and a pragmatic
                        approach tailored to the nuances of insurance law. Our attorneys are well-acquainted with the
                        judiciary landscape of West Virginia, having represented clients before the vast majority of
                        judges in the state.
                    </p>
                </v-flex>
                <v-flex>
                    <div class="headline mt-3">Our Clients</div>
                    <p class="mt-3">
                        We have been trusted by an extensive list of clients, reflecting our reputation and reliability
                        in
                        the field of insurance defense. Some of the insurers we have represented include:
                    </p>
                    <ul>
                        <li>State Auto Insurance Companies</li>
                        <li>State Farm Insurance Company</li>
                        <li>Nationwide</li>
                        <li>USAA</li>
                        <li>West Virginia National</li>
                        <li>Geico</li>
                        <li>Cincinnati Insurance</li>
                        <li>Liberty Mutual</li>
                        <li>Milbank Insurance</li>
                        <li>Great American Insurance</li>
                        <li>Markel</li>
                        <li>National Insurance</li>
                    </ul>
                    <p class="mt-3">
                        Every client receives our focused and seasoned legal advocacy, aimed at reducing liability and
                        upholding principles of justice and fairness.
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
    name: 'InsuranceDefenseDetails',
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
