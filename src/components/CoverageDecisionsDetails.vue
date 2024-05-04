<template>
  <div>
    <v-container style="max-width: 800px;">
      <v-layout column>
        <v-flex>
          <div class="display-1">Insurance Coverage Decisions at TLO</div>
          <p>
            At Taylor Law Office, we specialize in assisting insurers in West Virginia with complex coverage decisions
            and the appeals process. Our practice is committed to providing detailed legal analysis and strategic
            counsel to navigate the intricacies of insurance law, ensuring our clients achieve favorable outcomes.
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
            Taylor Law Office has a history of securing favorable outcomes for insurers at the circuit court level and
            before the West Virginia Supreme Court of Appeals.
          </p>
        </v-flex>
        <v-flex xs12 md3 class="why-tlo-block">
          <v-icon size="128" color="amber darken-2">mdi-book-open-page-variant</v-icon>
          <h1 class="display-1 text-xs-center mt-4">Expert Legal Team</h1>
          <p class="subheading text-xs-center my-3">
            Our attorneys possess deep knowledge of insurance law complexities and are skilled in both trial advocacy
            and appellate procedures.
          </p>
        </v-flex>
        <v-flex xs12 md3 class="why-tlo-block">
          <v-icon size="128" color="amber darken-2">mdi-file-find</v-icon>
          <h1 class="display-1 text-xs-center mt-4">Strategic Analysis</h1>
          <p class="subheading text-xs-center my-3">
            We offer detailed evaluation of policy provisions, coverage disputes, and claims to ensure informed,
            tactical decision-making.
          </p>
        </v-flex>
        <v-flex xs12 md3 class="why-tlo-block">
          <v-icon size="128" color="amber darken-2">mdi-account-multiple</v-icon>
          <h1 class="display-1 text-xs-center mt-4">Client-Centric Approach</h1>
          <p class="subheading text-xs-center my-3">
            We provide tailored legal advice aimed at protecting the interests of insurers and minimizing risks.
          </p>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container style="max-width: 800px;">
      <v-layout column>
        <v-flex>
          <div class="headline mt-3">Our Expertise</div>
          <p class="mt-3">
            Taylor Law Office is adept at handling a range of complex insurance coverage matters including:
          </p>
          <ul>
            <li>
              <p><strong>Analyzing Policy Coverage:</strong> We interpret insurance policies and assess coverage options
                to guide insurers in making informed decisions.</p>
            </li>
            <li>
              <p><strong>Litigating Disputes:</strong> When disputes arise, we are prepared to defend insurers in court,
                advocating for their interpretation of policy terms.
              </p>
            </li>
            <li>
              <p><strong>Navigating Appeals:</strong> Our seasoned attorneys have significant experience in appealing
                unfavorable decisions, striving for outcomes that align with our clients' objectives.</p>
            </li>
          </ul>
          <p class="mt-3">
            We are proud of our record in achieving favorable decisions for our clients. Whether it is through
            negotiating settlements or vigorous representation in court, our focus is always on securing the best
            possible results.
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
  name: 'CoverageDecisionsDetails',
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
