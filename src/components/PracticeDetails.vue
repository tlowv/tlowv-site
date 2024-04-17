<template>
    <v-container grid-list-lg style="max-width: 1000px;">
        <v-layout row nowrap style="max-width: 800px; margin: 0 auto;">
            <v-flex>
                <div class="headline mt-3">Our Expertise Spans the State.</div>
                <p class="mt-3">Taylor Law Office stands out in West Virginia for our comprehensive legal services, with
                    a particular emphasis on insurance defense. We have a strong presence across all 55 counties,
                    offering
                    specialized support in civil litigation, workplace accident cases, and personal injury claims. Our
                    team is adept at navigating complex legal scenarios, from assessing damages in workplace incidents
                    to representing
                    individuals affected by negligence.
                </p>
                <p class="mt-3">We also offer expert advice in insurance coverage decisions and appeals, leveraging our
                    significant trial experience to secure favorable outcomes in both state and federal courts. Our
                    expertise extends to defending premises liability cases and managing thorough investigations for
                    property-related insurance claims.
                </p>
                <p class="mt-3">In essence, Taylor Law Office provides a wide-ranging legal skill set across West
                    Virginia, ensuring dedicated and knowledgeable representation for all our clients.
                </p>
            </v-flex>
        </v-layout>
        <v-layout row wrap justify-center>
            <v-flex xs12 md4>
                <v-card class="custom-card-hover elevation-10" @click="goToLink('/attorneys')"
                    :class="{ clickable: true }" style="height: 347.5px">
                    <v-img src="https://i.imgur.com/Jzyg0d7.jpg" height="150px">
                        <div style="margin-top: 12px;"><v-btn icon fab outlined right absolute
                                style="border: 4px dashed white;"><v-icon medium
                                    color="white">mdi-arrow-right</v-icon></v-btn></div>
                    </v-img>
                    <v-card-title primary-title class="pt-2">
                        <h2 style="line-height: 1.25;">INSURANCE DEFENSE</h2>
                        <div style="width: 100%; height: 0;"></div>
                        <p style="line-height: 1.25;">
                            At Taylor Law Office, insurance defense is our main focus. We are dedicated to providing
                            robust support and expert representation in all insurance-related legal disputes.
                        </p>
                    </v-card-title>
                </v-card>
            </v-flex>

            <v-flex xs12 md4>
                <v-card class="custom-card-hover elevation-10" @click="goToLink('/attorneys')"
                    :class="{ clickable: true }" style="height: 347.5px">
                    <v-img src="https://i.imgur.com/ggQpd3Q.jpg" height="150px">
                        <div style="margin-top: 12px;"><v-btn icon fab outlined right absolute
                                style="border: 4px dashed white;"><v-icon medium
                                    color="white">mdi-arrow-right</v-icon></v-btn></div>
                    </v-img>
                    <v-card-title primary-title class="pt-2">
                        <h2 style="line-height: 1.25;">WORK-RELATED INJURY</h2>
                        <div style="width: 100%; height: 0;"></div>
                        <p style="line-height: 1.25;">
                            Navigating work-related injuries is easier with the right legal support. Rely on experienced
                            guidance to ensure your rights and claims are effectively managed and protected.
                        </p>
                    </v-card-title>
                </v-card>
            </v-flex>

            <v-flex xs12 md4>
                <v-card class="custom-card-hover elevation-10" @click="goToLink('/attorneys')"
                    :class="{ clickable: true }" style="height: 347.5px">
                    <v-img src="https://i.imgur.com/ztgB3Iw.jpg" height="150px">
                        <div style="margin-top: 12px;"><v-btn icon fab outlined right absolute
                                style="border: 4px dashed white;"><v-icon medium
                                    color="white">mdi-arrow-right</v-icon></v-btn></div>
                    </v-img>
                    <v-card-title primary-title class="pt-2">
                        <h2 style="line-height: 1.25;">PERSONAL INJURY</h2>
                        <div style="width: 100%; height: 0;"></div>
                        <p style="line-height: 1.25;">
                            some text
                        </p>
                    </v-card-title>
                </v-card>
            </v-flex>

            <v-flex xs12 md4>
                <v-card class="custom-card-hover elevation-10" @click="goToLink('/attorneys')"
                    :class="{ clickable: true }" style="height: 347.5px">
                    <v-img src="https://i.imgur.com/k8tbS0F.jpg" height="150px">
                        <div style="margin-top: 12px;"><v-btn icon fab outlined right absolute
                                style="border: 4px dashed white;"><v-icon medium
                                    color="white">mdi-arrow-right</v-icon></v-btn></div>
                    </v-img>
                    <v-card-title primary-title class="pt-2">
                        <h2 style="line-height: 1.25;">INSURANCE COVERAGE - DECISIONS & APPEALS</h2>
                        <div style="width: 100%; height: 0;"></div>
                        <p style="line-height: 1.25;">
                            some text
                        </p>
                    </v-card-title>
                </v-card>
            </v-flex>

            <v-flex xs12 md4>
                <v-card class="custom-card-hover elevation-10" @click="goToLink('/attorneys')"
                    :class="{ clickable: true }" style="height: 347.5px">
                    <v-img src="https://i.imgur.com/LPgWy3v.jpg" height="150px">
                        <div style="margin-top: 12px;"><v-btn icon fab outlined right absolute
                                style="border: 4px dashed white;"><v-icon medium
                                    color="white">mdi-arrow-right</v-icon></v-btn></div>
                    </v-img>
                    <v-card-title primary-title class="pt-2">
                        <h2 style="line-height: 1.25;">PREMISES LIABILITY & DOG BITE DEFENSE</h2>
                        <div style="width: 100%; height: 0;"></div>
                        <p style="line-height: 1.25;">
                            some text
                        </p>
                    </v-card-title>
                </v-card>
            </v-flex>

            <v-flex xs12 md4>
                <v-card class="custom-card-hover elevation-10" @click="goToLink('/attorneys')"
                    :class="{ clickable: true }" style="height: 347.5px">
                    <v-img src="https://i.imgur.com/GYzYkjn.jpg" height="150px">
                        <div style="margin-top: 12px;"><v-btn icon fab outlined right absolute
                                style="border: 4px dashed white;"><v-icon medium
                                    color="white">mdi-arrow-right</v-icon></v-btn></div>
                    </v-img>
                    <v-card-title primary-title class="pt-2">
                        <h2 style="line-height: 1.25;">PROPERTY DAMAGE - CLAIMS & INVESTIGATIONS</h2>
                        <div style="width: 100%; height: 0;"></div>
                        <p style="line-height: 1.25;">
                            some text
                        </p>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'PracticeDetails',

    methods: {
        goToLink(url) {
            window.location.href = url;
        }
    }
};
</script>

<style scoped>
.custom-card-hover:hover p {
    color: #CFD8DC;
}


.custom-card-hover:hover {
    color: white;
    background: #546E7A;
}

.clickable {
    cursor: pointer;
}
</style>
