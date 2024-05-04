<template>
  <div>
    <v-container style="max-width: 800px;">
      <v-layout column>
        <v-flex>
          <div class="display-1">Personal Injury Cases at TLO</div>
          <p>

            At Taylor Law Office, we also handle cases involving individuals who have suffered personal injuries due to
            accidents, negligence, and misconduct. While our practice commonly represents defendants, insurers, and
            corporate clients, we are equally committed to advocating for the rights of seriously injured individuals
            when they need us the most.
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
            Taylor Law Office has a track record of tenaciously representing clients in personal injury cases. We ensure
            that every case is handled with the utmost diligence and aggressiveness.
          </p>
        </v-flex>
        <v-flex xs12 md3 class="why-tlo-block">
          <v-icon size="128" color="amber darken-2">mdi-book-open-page-variant</v-icon>
          <h1 class="display-1 text-xs-center mt-4">Expert Legal Team</h1>
          <p class="subheading text-xs-center my-3">
            Our attorneys bring a wealth of knowledge about insurance standards and legal requirements, applying their
            extensive litigation skills to advance your case through every phase.
          </p>
        </v-flex>
        <v-flex xs12 md3 class="why-tlo-block">
          <v-icon size="128" color="amber darken-2">mdi-sync</v-icon>
          <h1 class="display-1 text-xs-center mt-4">Comprehensive Support</h1>
          <p class="subheading text-xs-center my-3">
            From the moment you entrust us with your case, our team provides full legal support, guiding you through the
            litigation process with expert advice and personalized attention.
          </p>
        </v-flex>
        <v-flex xs12 md3 class="why-tlo-block">
          <v-icon size="128" color="amber darken-2">mdi-account-multiple</v-icon>
          <h1 class="display-1 text-xs-center mt-4">Client-Centric Approach</h1>
          <p class="subheading text-xs-center my-3">
            We provide tailored legal strategies designed to meet the specific needs and objectives of each client,
            focusing on achieving the best possible outcome.
          </p>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container style="max-width: 800px;">
      <v-layout column>
        <v-flex>
          <div class="headline mt-3">Our Expertise</div>
          <p class="mt-3">
            Understanding the intricacies of insurance claims and legal hurdles is our forte. We leverage this expertise
            to represent our clients effectively, ensuring that they receive the compensation they deserve. Taylor
            Law Office excels in handling personal injury claims involving:
          </p>
          <ul>
            <li>
              <p><strong>Serious Auto Accidents:</strong> Our team is experienced in tackling severe and complex auto
                accident cases, ensuring that your rights are protected throughout the process.</p>
            </li>
            <li>
              <p><strong>Products Liability:</strong> We manage cases involving defective or dangerous products that
                have caused injury, using our detailed understanding of products liability law to support your claim.
              </p>
            </li>
            <li>
              <p><strong>Acts of Negligence and Misconduct:</strong> We are skilled in addressing cases where negligence
                or misconduct has led to serious injuries, utilizing our legal expertise to hold responsible parties
                accountable.</p>
            </li>
          </ul>
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
  name: 'PersonalInjuriesDetails',
  components: {
    ContactForm
  },
  data() {
    return {
      items: [
        {
          title: 'What constitutes a personal injury claim?',
          content: 'A personal injury claim arises when an individual suffers harm from an accident or injury, and someone else might be legally responsible for that harm. This can involve various situations where injuries are caused due to the negligence, recklessness, or intentional actions of another party. Here are some common types of incidents that can give rise to personal injury claims:<ul><li>Car Accidents</li><li>Slip and Fall Cases</li><li>Product Liability</li><li>Medical Malpractice</li>'
        },
        {
          title: 'How long do I have to file a claim?',
          content: 'In West Virginia, the statute of limitations for filing a personal injury claim is generally two years from the date of the injury. This means that you must file a lawsuit within two years of the date on which the injury occurred.<br><br>It\'s important to note that there are some exceptions to this general rule that may extend or shorten the deadline. Therefore, it\'s advisable to consult with a personal injury attorney as soon as possible after an accident to ensure that your legal rights are preserved.'
        },
        {
          title: 'What benefits am I entitled to receive?',
          content: 'At Taylor Law Office, we understand that the compensation you may be entitled to receive following a personal injury can vary. Generally, you might be eligible for damages covering medical expenses, lost wages, pain and suffering, property damage, and other losses like loss of enjoyment and consortium. We can help evaluate your specific situation and advocate for the full range of benefits to which you are entitled.'
        },
        {
          title: 'How does the claims process work?',
          content: 'At Taylor Law Office, we start by thoroughly investigating your claim, gathering all necessary evidence and documentation. We then handle the filing of your claim and negotiate with the involved parties to seek fair compensation. Throughout this process, we provide you with guidance and support, aiming to resolve your case efficiently and effectively while striving for the best possible outcome. If necessary, we are prepared to represent you in court to ensure your rights are protected.'
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
