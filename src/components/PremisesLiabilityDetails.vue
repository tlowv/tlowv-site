<template>
  <div>
    <v-container style="max-width: 800px;">
      <v-layout column>
        <v-flex>
          <div class="display-1">Premises Liability Defense at TLO</div>
          <p>
            At Taylor Law Office, we specialize in defending homeowners and commercial enterprises against premises
            liability claims. Our practice is well-versed in the nuances of premises liability law, providing
            knowledgeable and strategic defense to ensure that our clients receive robust representation tailored to
            their specific needs.
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
            Our firm has a proven track record of defending premises liability cases, using strategic legal approaches
            to protect our clients effectively.
          </p>
        </v-flex>
        <v-flex xs12 md3 class="why-tlo-block">
          <v-icon size="128" color="amber darken-2">mdi-book-open-page-variant</v-icon>
          <h1 class="display-1 text-xs-center mt-4">Expert Legal Team</h1>
          <p class="subheading text-xs-center my-3">
            Our attorneys are well-versed in all facets of premises liability law, understanding the nuances necessary
            to defend our clients successfully.
          </p>
        </v-flex>
        <v-flex xs12 md3 class="why-tlo-block">
          <v-icon size="128" color="amber darken-2">mdi-sync</v-icon>
          <h1 class="display-1 text-xs-center mt-4">Comprehensive Support</h1>
          <p class="subheading text-xs-center my-3">
            From the initial claim to the courtroom, Taylor Law Office provides full legal support, guiding our clients
            through each step of the process.
          </p>
        </v-flex>
        <v-flex xs12 md3 class="why-tlo-block">
          <v-icon size="128" color="amber darken-2">mdi-account-multiple</v-icon>
          <h1 class="display-1 text-xs-center mt-4">Client-Centric Approach</h1>
          <p class="subheading text-xs-center my-3">
            We focus on creating customized defense strategies tailored to the unique aspects of each case, ensuring the
            best possible outcomes for our clients.
          </p>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container style="max-width: 800px;">
      <v-layout column>
        <v-flex>
          <div class="headline my-3">Our Expertise</div>
          <p><strong>Handling Diverse Premises Liability Claims</strong><br>
            We regularly defend claims involving
            various issues, such as injuries from slips, trips, and falls, inadequate building maintenance, and
            inadequate security.</p>
          <p><strong>Expertise in Dog Bite Defense</strong><br>
            With substantial experience in dog bite cases, our
            legal team is prepared to tackle these challenging and sensitive cases with expert knowledge and
            strategic defense.</p>
          <p><strong>Navigating the Legal Landscape</strong><br>
            Our firm is adept at managing the complexities of
            premises liability, focusing on critical aspects like the open and obvious doctrine and reasonable
            safety standards.</p>
          <p><strong>Mitigating Risk and Liability</strong><br>
            We work diligently to minimize potential liability for
            our clients, aiming to reduce the financial and reputational impact of premises liability claims.</p>
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
                <v-card-text v-html="item.content" style="font-size: smaller; padding-top: 0px; background: #CFD8DC;">{{
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
  name: 'PremisesLiabilityDetails',
  components: {
    ContactForm
  },
  data() {
    return {
      items: [
        {
          title: 'What is premises liability?',
          content: 'Premises liability refers to the legal responsibility of property owners (and sometimes tenants or property managers) to ensure their premises are reasonably safe for visitors. If someone is injured due to unsafe conditions on a property, the property owner may be liable for damages if they failed to maintain the property adequately or did not provide sufficient warning about potential hazards.'
        },
        {
          title: 'What constitutes a valid premises liability defense?',
          content: 'A valid premises liability defense may include demonstrating that the hazard was open and obvious, arguing that the injured party was negligent (such as through contributory or comparative negligence), proving that the property owner had no knowledge of the hazard, or that the hazard had not existed long enough for the owner to reasonably know about it. Additionally, demonstrating that the property owner took reasonable steps to secure the property can also serve as a defense.'
        },
        {
          title: 'What are my responsibilities as a property owner to prevent injuries?',
          content: 'As a property owner, you are responsible for maintaining a safe environment for visitors. This includes regular inspections of the property to identify and rectify potential hazards, adequate warnings about existing dangers, and ensuring that all safety measures comply with local, state, and federal regulations. The specific duties can vary depending on the type of property and the expected visitors.'
        },
        {
          title: 'What should I do if an accident occurs on my property?',
          content: 'As a property owner, you are responsible for maintaining a safe environment for visitors. This includes regular inspections of the property to identify and rectify potential hazards, adequate warnings about existing dangers, and ensuring that all safety measures comply with local, state, and federal regulations. The specific duties can vary depending on the type of property and the expected visitors.'
        },
        {
          title: 'Can I still be held liable if the injured person was trespassing?',
          content: 'As a property owner, you are responsible for maintaining a safe environment for visitors. This includes regular inspections of the property to identify and rectify potential hazards, adequate warnings about existing dangers, and ensuring that all safety measures comply with local, state, and federal regulations. The specific duties can vary depending on the type of property and the expected visitors.'
        },
        {
          title: 'How can a lawyer help me with a premises liability defense?',
          content: 'A lawyer can help you by assessing the specifics of the claim, developing a robust defense strategy, and representing you in negotiations and court proceedings. They can gather and analyze evidence, consult experts, and challenge the plaintiff\'s allegations regarding your negligence. Additionally, an attorney can navigate the legal intricacies and procedural requirements, potentially reducing your liability or dismissing the claim altogether.'
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
