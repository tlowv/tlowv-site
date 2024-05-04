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
                    <div class="headline my-3">Our Expertise</div>
                    <p>
                        Taylor Law Office has a profound legacy and expertise in handling complex insurance defense
                        cases.
                        We've successfully litigated over 2,000 cases, providing us with unique insights and a pragmatic
                        approach tailored to the nuances of insurance law. Our attorneys are well-acquainted with the
                        judiciary landscape of West Virginia, having represented clients before the vast majority of
                        judges in the state.
                    </p>
                </v-flex>
                <v-flex>
                    <div class="headline my-3">Our Clients</div>
                    <p>
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
                <div class="headline my-3">Learn More</div>
                <v-flex>
                    <v-expansion-panel>
                        <v-expansion-panel-content v-for="(item, i) in items" :key="i" style="background: #CFD8DC; font-size: larger;">
                            <template v-slot:header>
                                {{ item.title }}
                            </template>
                            <v-card class="mx-3">
                                <v-card-text style="font-size: smaller; padding-top: 0px; background: #CFD8DC;">{{ item.content
                                    }}</v-card-text>
                            </v-card>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-flex>
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
    },
    data() {
        return {
            items: [
                {
                    title: 'What is insurance defense?',
                    content: 'Insurance defense involves legal representation in cases where insurance companies are sued by plaintiffs. These cases often involve claims related to accidents, injuries, or damages where the insurance company defends its insured or itself against the claims filed. The goal is to limit the insurance company’s liability and ensure fair legal treatment.'
                },
                {
                    title: 'What types of cases do we handle?',
                    content: 'We handle a variety of cases within the realm of insurance defense, including but not limited to, automobile accidents, workers\' compensation claims, liability disputes, property damage, and medical malpractice defenses.'
                },
                {
                    title: 'How does the insurance defense process work?',
                    content: 'The process starts with an initial assessment of the claim, followed by a detailed investigation to gather facts and evidence. Strategic planning includes preparing legal arguments, engaging in negotiations, or proceeding to trial if necessary. Throughout the case, we ensure to align our defense strategies with the specific needs and outcomes desired by our clients.'
                },
                {
                    title: 'What are the benefits of hiring an insurance defense attorney?',
                    content: 'Hiring an insurance defense attorney provides expertise in navigating complex legal and procedural issues effectively. It helps in minimizing liability, reducing litigation costs, and defending claims aggressively to ensure a favorable outcome for the insurer.'
                }
            ]
        };
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
