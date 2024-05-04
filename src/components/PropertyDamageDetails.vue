<template>
  <div>
    <v-container style="max-width: 800px;">
      <v-layout column>
        <v-flex>
          <div class="display-1">Property Damage Claims at TLO</div>
          <p>
            At Taylor Law Office, we specialize in assisting insurance carriers with thorough investigations and
            examinations related to property damage claims in West Virginia. Our firm is committed to providing insurers
            with meticulous legal support and expertise, enabling well-informed decisions regarding coverage.
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
            We have a history of successfully assisting insurers with examinations under oath and evidence
            collection, adhering strictly to West Virginia insurance regulations.
          </p>
        </v-flex>
        <v-flex xs12 md3 class="why-tlo-block">
          <v-icon size="128" color="amber darken-2">mdi-book-open-page-variant</v-icon>
          <h1 class="display-1 text-xs-center mt-4">Dedicated Expertise</h1>
          <p class="subheading text-xs-center my-3">
            Our firm understands the complexities of property damage cases deeply, making us a trusted partner for
            insurance carriers.
          </p>
        </v-flex>
        <v-flex xs12 md3 class="why-tlo-block">
          <v-icon size="128" color="amber darken-2">mdi-magnify</v-icon>
          <h1 class="display-1 text-xs-center mt-4">Rigorous Investigations</h1>
          <p class="subheading text-xs-center my-3">
            We collaborate with local authorities and employ comprehensive investigative techniques to ensure every
            aspect of a claim is thoroughly examined.
          </p>
        </v-flex>
        <v-flex xs12 md3 class="why-tlo-block">
          <v-icon size="128" color="amber darken-2">mdi-account-multiple</v-icon>
          <h1 class="display-1 text-xs-center mt-4">Client-Centric Approach</h1>
          <p class="subheading text-xs-center my-3">
            We customize our strategies to meet the specific needs of each insurer, ensuring personalized and detailed
            attention to every case.
          </p>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container style="max-width: 800px;">
      <v-layout column>
        <v-flex>
          <div class="headline my-3">Our Expertise</div>
          <p>At Taylor Law Office, we handle complex property damage claims including storm, water, and fire damage. Our
            team expertly assesses each situation to provide thorough support and detailed investigative services.</p>
          <ul>
            <li>
              <p><strong>Examinations Under Oath</strong><br>
                We conduct examinations under oath to gather crucial information and ensure compliance with policy
                conditions, facilitating the proper handling of claims.</p>
            </li>
            <li>
              <p><strong>Evidence Collection</strong><br>
                Our team diligently compiles evidence from local authorities and other relevant sources, ensuring all
                necessary documentation is secured for a comprehensive evaluation of the claim.</p>
            </li>
            <li>
              <p><strong>Navigating Insurance Regulations</strong><br>
                With an in-depth knowledge of West Virginia insurance laws, Taylor Law Office helps insurers navigate
                the
                regulatory landscape, ensuring all actions comply with legal responsibilities and uphold the highest
                standards.</p>
            </li>
          </ul>
        </v-flex>
        <v-flex xs12 class="form-container mt-3" id="bottom"><contact-form></contact-form></v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm';

export default {
  name: 'PropertyDamageDetails',
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
