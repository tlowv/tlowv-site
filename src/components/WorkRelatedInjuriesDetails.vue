<template>
    <div>
        <v-container style="max-width: 800px;">
            <v-layout column>
                <v-flex>
                    <div class="display-1">Work-Related Injury Cases at TLO</div>
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
                        <li>
                            <p><strong>Proving Liability:</strong> We collaborate with a variety of experts to establish
                                the employer's
                                deliberate intent and liability.</p>
                        </li>
                        <li>
                            <p><strong>Quantifying Damages:</strong> Our experts are skilled in calculating
                                comprehensive compensation for
                                both economic and non-economic damages resulting from workplace injuries.</p>
                        </li>
                    </ul>
                    <p class="mt-3">
                        We understand the statutory immunities that protect employers and are adept at piercing these
                        protections when justified, especially in cases of deliberate misconduct.
                    </p>
                </v-flex>
                <v-flex xs12 class="form-container mt-3" id="bottom"><contact-form></contact-form></v-flex>
                <div class="headline my-3">Learn More</div>
                <v-flex>
                    <v-expansion-panel>
                        <v-expansion-panel-content v-for="(item, i) in items" :key="i"
                            style="background: #CFD8DC; font-size: larger;">
                            <template v-slot:header>
                                {{ item.title }}
                            </template>
                            <v-card class="mx-3">
                                <v-card-text v-html="item.content"
                                    style="font-size: smaller; padding-top: 0px; background: #CFD8DC;">{{
                                    item.content
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
    name: 'WorkRelatedInjuriesDetails',
    components: {
        ContactForm
    },
    data() {
        return {
            items: [
                {
                    title: 'What qualifies as a work-related injury?',
                    content: 'A work-related injury is typically defined as any injury or illness that occurs due to activities related to one\'s job or while performing work duties. Here are some common examples of work-related injuries:<ul><li>Slips, Trips, and Falls</li><li>Musculoskeletal Injuries - Strains from overuse</li><li>Cuts and Lacerations</li><li>Burns</li><li>Machine Entanglement</li><li>Vehicle Accidents</li><li>Hearing or Vision Loss</li><li>Stress and Mental Health Issues</li></ul>'
                },
                {
                    title: 'What is the deadline for filing a claim?',
                    content: '<strong>Notification of Injury:</strong> Employees should notify their employer of the injury as soon as possible. Formally, the employee has to report the injury within six months from the date of the accident or the diagnosis of a related illness.<br><strong>Filing a Claim:</strong> After notifying the employer, the formal claim for workers\' compensation benefits should be filed within six months from the date of injury or the date of last payment of wages by the employer, whichever is later.'
                },
                {
                    title: 'What benefits am I entitled to receive?',
                    content: 'Taylor Law Office helps clients quantify and claim comprehensive compensation for both economic damages, such as lost wages and medical expenses, and non-economic damages, such as pain and suffering resulting from workplace injuries. Their approach ensures that clients receive the fullest compensation to which they are legally entitled.'
                },
                {
                    title: 'Can my employer retaliate against me for filing a claim?',
                    content: 'At Taylor Law Office, it\'s important for clients to understand that their employer legally cannot retaliate against them for filing a work-related injury claim. Laws in West Virginia, as in other states, protect employees from such retaliation. This means if you, as an employee, file a claim for an injury sustained at work, you are safeguarded against adverse actions by your employer, including termination, demotion, reduction in hours, or unwarranted disciplinary actions.'
                },
                {
                    title: 'How does the claims process work?',
                    content: 'Taylor Law Office provides comprehensive support throughout the claims process. From the initial consultation to the final verdict, the firm\'s legal team guides each client step-by-step. They collaborate with experts to prove liability and quantify damages, navigating the complexities of workers\' compensation laws and employer immunities, and aiming to pierce these protections when justified, especially in cases involving deliberate misconduct.'
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
