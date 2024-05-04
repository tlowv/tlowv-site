<template>
    <v-container grid-list-lg style="max-width: 1000px;">
        <v-layout row wrap justify-center>
            <v-flex xs12 md4 v-for="(card, index) in cards" :key="index">
                <v-card class="custom-card-hover elevation-10 clickable" @click="goToLink(card.link)">
                    <div><v-btn icon fab outlined right absolute class="custom-btn mt-2">
                                <v-icon medium class="custom-arrow">mdi-arrow-right</v-icon></v-btn></div>
                    <v-img :src="card.imageUrl" height="150px" class="custom-img">
                    </v-img>
                    <v-card-title primary-title class="pt-2">
                        <div class="headline"><span class="headline-smaller">{{ card.title }}</span></div>
                        <v-divider class="my-2" style="min-width: 100%;"></v-divider>
                        <p class="mt-1" style="line-height: 1.25;">
                            {{ card.description }}
                        </p>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
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
    </v-container>
</template>


<script>

export default {
    name: 'PracticeDetails',

    data() {
        return {
            cards: [
                {
                    title: "INSURANCE DEFENSE",
                    imageUrl: "https://i.imgur.com/Jzyg0d7.jpg",
                    description: "At Taylor Law Office, insurance defense is our main focus. We are dedicated to providing robust support and expert representation in all insurance-related legal disputes.",
                    link: "/insurance-defense"
                },
                {
                    title: "WORK-RELATED INJURY",
                    imageUrl: "https://i.imgur.com/ggQpd3Q.jpg",
                    description: "Navigating work-related injuries is easier with the right legal support. Rely on experienced guidance to ensure your rights and claims are effectively managed and protected.",
                    link: "/work-related-injuries"
                },
                {
                    title: "PERSONAL INJURY",
                    imageUrl: "https://i.imgur.com/ztgB3Iw.jpg",
                    description: "Choosing the right legal team is crucial for navigating personal injury claims successfully. Trust our expertise to protect your rights and maximize your compensation.",
                    link: "/personal-injuries"
                },
                {
                    title: "INSURANCE COVERAGE - DECISIONS & APPEALS",
                    imageUrl: "https://i.imgur.com/k8tbS0F.jpg",
                    description: "Taylor Law Office specializes in guiding insurers through complex coverage decisions and appeals in West Virginia, consistently securing favorable outcomes up to the Supreme Court level.",
                    link: "/coverage-decisions"
                },
                {
                    title: "PREMISES LIABILITY & DOG-BITE DEFENSE",
                    imageUrl: "https://i.imgur.com/LPgWy3v.jpg",
                    description: "Taylor Law Office handles premises liability and dog bite cases with diligence, ensuring strong representation for both homeowners and commercial enterprises.",
                    link: "/premises-liability"
                },
                {
                    title: "PROPERTY DAMAGE - INVESTIGATIONS",
                    imageUrl: "https://i.imgur.com/GYzYkjn.jpg",
                    description: "Taylor Law Office assists in the investigation of property damage claims in West Virginia, ensuring thorough compliance and informed decisions.",
                    link: "/property-damage"
                }
            ]
        }
    },

    methods: {
        goToLink(url) {
            this.$router.push(url);
        }
    }
};
</script>


<style scoped>
.custom-card-hover:hover p {
    color: #ECEFF1;
}

.custom-card-hover p {
    color: black;
}

.custom-card-hover {
    color: black;
    background: #CFD8DC;
    height: 390px;
    border-radius: 20px;
    overflow: hidden;
}

.custom-card-hover:hover {
    color: white;
    background: #455A64;
}

.custom-card-hover .custom-btn {
    border: 4px solid white;
    z-index: 1;
}

.custom-card-hover:hover .custom-btn {
    border: 4px solid #455A64;
    filter: contrast(200%);
    z-index: 1;
}

.custom-card-hover .custom-arrow {
    color: white;
    transform: rotate(-45deg);
    z-index: 1;
}

.custom-card-hover:hover .custom-arrow {
    color: #455A64;
    transform: rotate(0deg) scale(1.2);
    z-index: 1;
}

.headline-smaller {
  font-size: 0.9em;
}

.custom-card-hover:hover .custom-img {
    filter: brightness(75%);
}

.clickable {
    cursor: pointer;
}
</style>
