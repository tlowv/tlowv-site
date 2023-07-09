<template>
  <span>
    <v-container grid-list-lg  style="max-width: 700px;">
        <v-layout 
            row 
            nowrap
        >
            <v-flex>
                <div class="headline mt-3">Quality Defense</div>
                <p class="mt-3">
                    The primary focus of the practice at Taylor Law Office is 
                    insurance defense litigation. Collectively, our attorneys 
                    have handled thousands of cases for various insurers 
                    in all State and Federal jurisdictions throughout West Virginia. 
                    While these cases range in size and complexity, they are all 
                    approached with the same intense focus for providing a superior 
                    product. The relative small size of Taylor Law Office provides 
                    inherent advantages to insurers concerned with the mechanics for how 
                    cases are being handled. 
                </p>
            </v-flex>
        </v-layout>
    </v-container>
    <v-sheet 
      color="grey lighten-3" 
      class="px-3"
    >
    <!-- BIG TIMELINE -->
      <v-timeline class="timeline hidden-sm-and-down">
          
          <!-- TREVOR TAYLOR -->
          <v-timeline-item color="indigo darken-1">
              <span slot="opposite">
                  <strong>2008 </strong>
                  Trevor Taylor Opens Taylor Law Office
              </span>

              <v-card>
                  <v-card-title class="indigo darken-1">
                      <v-icon
                          dark
                          size="42"
                          class="mr-3"
                      >
                          mdi-gavel
                      </v-icon>
                      <h2 class="display-1 white--text font-weight-light">
                          Trevor Taylor
                      </h2>
                  </v-card-title>
                  <v-container>
                      <v-layout class="px-2">
                          In addition to maintaining an active and vigorous trial practice, Trevor Taylor focuses his 
                          practice in areas of insurance defense, appeals, insurance
                          coverage, wrongful death defense, defense of first-party insurance claims, extra-
                          contractual defense of insurers, products liability, first-party and third-party pre-litigation 
                          investigations and examinations under oath, property damage defense,
                          commercial defense, defense of insurers before the West Virginia Insurance
                          Commissioner, trucking and commercial carrier defense, personal and bodily
                          injury defense, and defense of mass litigation and toxic tort claims.
                      </v-layout>
                  </v-container>
                  <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-dialog 
                          v-model="dialog1" 
                          width="500"
                      >
                          <v-btn 
                              slot="activator" 
                              flat 
                              color="blue-grey"
                          >
                              See Bio
                          </v-btn>
                          <v-card>
                              <v-card-title 
                                  class="headline grey lighten-2" 
                                  primary-title
                              >
                                  Trevor K. Taylor
                              </v-card-title>
                              <v-card-text>
                                  <p>
                                      Trevor earned his J.D. from West Virginia 
                                      College of law, and was admitted to the West 
                                      Virginia Bar in 2001. He then started Taylor 
                                      Law Office in 2008.
                                  </p>
                                  <ul>
                                    <li>West Virginia University (B.A., Philosophy 1993)</li>
                                    <li>West Virginia University School of Law (J.D. 2001)</li><br />
                                    <h4>Reported Cases</h4>
                                    <li>Sneberger v. Morrison, 776 S.E.2d 156 (W. Va. 2015)</li>
                                    <li>Ashraf v. State Auto Prop. &amp; Cas. Ins. Co., 799 S.E.2d 550 (W. Va. 2017)</li>
                                    <li>Farmers &amp; Mechanics Mut. Ins. Co. v. Allen, 778 S.E.2d 718 (W. Va. 2015)</li>
                                    <li>Brickstreet Mut. Ins. Co. v. Zurich Am. Ins. Co., 813 S.E.2d 67 (W. Va. 2018)</li>
                                    <li>State ex rel. State Auto Prop. Ins. Cos. v. Stucky, 806 S.E.2d 160 (W. Va. 2017)</li>
                                    <li>State Auto Prop. &amp; Cas. Ins. Co. v. Kober (W. Va. 2015)</li>
                                    <li>Dolly v. United Disposal Serv. (W. Va. 2020)</li>
                                    <li>Am. Nat&#39;l Prop. &amp; Cas. Co. v. Clendenen, 793 S.E.2d 899 (W. Va. 2016)</li>
                                    <li>State ex rel. Potomac Trucking &amp; Excavating, Inc. v. Courrier (W. Va. 2016)</li>
                                    <li>Ashraf v. State Auto Prop. &amp; Cas. Ins. Co. (W. Va. 2019)</li>
                                    <li>Redman v. Fed. Grp., Inc. (W. Va. 2013)</li>
                                    <li>State ex rel State Auto Prop. Ins. Co. v. Stucky (W. Va. 2016)</li>
                                    <li>State ex rel Hope Clinic, PLLC v. McGraw, 858 S.E.2d (W. Va. 2021)</li>
                                  </ul>
                                  <p>
                                      
                                  </p>
                              </v-card-text>
                              <v-divider></v-divider>
                              <v-card-actions>
                                  <v-spacer></v-spacer>
                                  <v-btn 
                                      flat 
                                      @click="dialog1=false"
                                  >
                                      Dismiss
                                  </v-btn>
                              </v-card-actions>
                          </v-card>
                      </v-dialog>
                  </v-card-actions>
              </v-card>
          </v-timeline-item>
          
          <!-- CHRIS DENSON -->
          <v-timeline-item color="amber lighten-1">
              <span slot="opposite">
                  <strong>2012 </strong>
                  Chris Denson Comes Aboard
              </span>
              <v-card>
                  <v-card-title class="amber lighten-1">
                  <v-icon
                      class="mr-3"
                      dark
                      size="42"
                  >
                      mdi-scale-balance
                  </v-icon>
                  <h2 class="display-1 white--text font-weight-light">
                      Chris Denson
                  </h2>
                  </v-card-title>
                  <v-container>
                  <v-layout class="px-2">
                      Chris Denson concentrates his practice in the areas of general 
                      litigation, insurance coverage and extra-contractual defense, 
                      personal injury, wrongful death, products liability, property 
                      damage claims, and construction law. Mr. Denson's practice 
                      involves reviewing insurance policies, researching insurance 
                      coverage issues, drafting coverage opinions, representing 
                      clients in coverage disputes, representing clients in "bad 
                      faith" or other extra-contractual claims. Mr. Denson also 
                      represents clients in fraud and arson cases involving 
                      insurance matters.
                  </v-layout>
                  </v-container>
                  <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-dialog 
                          v-model="dialog3" 
                          width="500"
                      >
                          <v-btn 
                              slot="activator" 
                              flat 
                              color="blue-grey"
                          >
                              See Bio
                          </v-btn>
                          <v-card>
                              <v-card-title 
                                  class="headline grey lighten-2" 
                                  primary-title
                              >
                                  Chris Denson
                              </v-card-title>
                              <v-card-text>
                                  <p>
                                      Chris earned his J.D. from Widener University 
                                      in 1999, and joined Taylor Law Office in 2012.
                                  </p>
                                  <p>
                                      His representative experience includes 
                                      defending the largest major convenience store 
                                      chains in West Virginia, the handling of 
                                      numerous large exposure property damage/fire 
                                      loss claims on behalf of insurers, representing 
                                      drilling companies in defense of wrongful 
                                      death and deliberate intent claims arising out 
                                      of incidents occurring on well sites.  He's 
                                      also defended engineers, real estate companies, 
                                      brokers and agents in professional liability 
                                      matters, as well as timbering, manufacturing, 
                                      and energy clients in deliberate intent cases 
                                      involving serious injury or death.
                                  </p>
                                  <p>
                                      Chris has represented insurance companies 
                                      before the West Virginia Insurance Commissioner 
                                      on administrative first and third party claims 
                                      associated with alleged violations of the West 
                                      Virginia Unfair Trade Practices Act, and has 
                                      trial experience with cases ranging from 
                                      deliberate intent, wrongful death, and serious 
                                      personal injury.  He also serves as a member of 
                                      The Defense Trial Counsel of West Virginia
                                  </p>
                                  <p>
                                      He's previously been Co-Chair of the 
                                      construction division for the United Way of 
                                      Harrison County, and a past member of the 
                                      American Red Cross North Center WV Board of 
                                      Directors.
                                  </p>
                              </v-card-text>
                              <v-divider></v-divider>
                              <v-card-actions>
                                  <v-spacer></v-spacer>
                                  <v-btn 
                                      flat 
                                      @click="dialog3=false"
                                  >
                                      Dismiss
                                  </v-btn>
                              </v-card-actions>
                          </v-card>
                      </v-dialog>
                  </v-card-actions>
              </v-card>
          </v-timeline-item>

          
        <!-- TIFFANY CROPP  -->
          <v-timeline-item color="red lighten-1">
              <span slot="opposite">
                  <strong>2013 </strong> 
                  Tiffany Cropp Joins TLO
              </span>
              <v-card>
                  <v-card-title class="red lighten-1 justify-end">
                  <h2 class="display-1 mr-3 white--text font-weight-light">
                      Tiffany Cropp
                  </h2>
                  <v-icon
                      dark
                      size="42"
                  >
                      mdi-book-open-page-variant
                  </v-icon>
                  </v-card-title>
                  <v-container>
                  <v-layout px-2>
                      Tiffany earned her J.D. from West Virginia College of law in 
                      2006, and joined Taylor Law Office in 2013. She concentrates 
                      her practice in the areas of insurance coverage, declaratory 
                      judgment actions, and deliberate intent.
                  </v-layout>
                  </v-container>
                  <v-card-actions>
                      <v-dialog v-model="dialog4" width="500">
                          <v-btn 
                              slot="activator" 
                              flat 
                              color="blue-grey"
                          >
                              See Bio
                          </v-btn>
                          <v-card>
                              <v-card-title 
                                  class="headline grey lighten-2" 
                                  primary-title
                              >
                                  Tiffany A. Cropp
                              </v-card-title>
                              <v-card-text>
                                  <p>
                                    Tiffany earned her J.D. from West Virginia 
                                    College of law in 2006, and joined Taylor Law 
                                    Office in 2013.
                                  </p>
                                  <ul>
                                    <li>Admitted to the West Virginia bar, 2006</li>
                                    <li>West Virginia University (B.A., Political Science, 2003)</li>
                                    <li>West Virginia University College of Law (J.D., 2006)</li>
                                  </ul>
                                  <p>
                                    She concentrates her practice in the areas of 
                                    insurance coverage, declaratory judgment 
                                    actions, and deliberate intent.
                                  </p>
                              </v-card-text>
                              <v-divider></v-divider>
                              <v-card-actions>
                                  <v-spacer></v-spacer>
                                  <v-btn 
                                      flat 
                                      @click="dialog4=false"
                                  >
                                      Dismiss
                                  </v-btn>
                              </v-card-actions>
                          </v-card>
                      </v-dialog>
                  </v-card-actions>
              </v-card>
          </v-timeline-item>

            <!-- Matthew W. Misfeldt  -->
            <v-timeline-item color="grey darken-1">
                <span slot="opposite">
                    <strong>2019 </strong> 
                    Matthew Misdfeldt Joins TLO
                </span>
                <v-card>
                    <v-card-title class="grey darken-1 justify-end">
                    <h2 class="display-1 mr-3 white--text font-weight-light">
                        Matt Misdfeldt
                    </h2>
                    <v-icon
                        dark
                        size="42"
                    >
                        mdi-gavel
                    </v-icon>
                    </v-card-title>
                    <v-container>
                    <v-layout px-2>
                        Matt earned his J.D. from the University of Wisconsin Law in 2015, and joined TLO in 2019.
                        He concentrates his practice in the areas of automobile accident defense,
                        deliberate intent, insurance coverage, uninsured and underinsured motorist
                        claims.
                    </v-layout>
                    </v-container>
                    <v-card-actions>
                        <v-dialog v-model="dialog5" width="500">
                            <v-btn 
                                slot="activator" 
                                flat 
                                color="blue-grey"
                            >
                                See Bio
                            </v-btn>
                            <v-card>
                                <v-card-title 
                                    class="headline grey lighten-2" 
                                    primary-title
                                >
                                    Matthew W. Misfeldt
                                </v-card-title>
                                <v-card-text>
                                    <p>
                                    Matt earned his J.D. from the University of Wisconsin Law in 2015, and joined TLO in 2019.
                                    </p>
                                    <ul>
                                    <li>Admitted to the West Virginia bar, 2018</li>
                                    <li>B.S. in Psychology from the University of Wisconsin, 2011</li>
                                    </ul>
                                    <p>
                                    Matt concentrates his practice primarily in the area of 
                                    insurance coverage.
                                    </p>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn 
                                        flat 
                                        @click="dialog4=false"
                                    >
                                        Dismiss
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-card-actions>
                </v-card>
            </v-timeline-item>

            <!-- HAMILTON D. SKEENS  -->
            <v-timeline-item color="green lighten-1">
                <span slot="opposite">
                    <strong>2020 </strong>
                    Hamilton D. Skeens Joins TLO
                </span>
                <v-card>
                    <v-card-title class="green lighten-1 justify-end">
                        <h2 class="display-1 mr-3 white--text font-weight-light">
                            Hamilton D. Skeens
                        </h2>
                        <v-icon
                            dark
                            size="42"
                        >
                            mdi-bank
                        </v-icon>
                    </v-card-title>
                    <v-container>
                        <v-layout class="px-2">
                            Concentrates his practice in areas of defense litigation; with particular
                            emphasis on the defense of complex commercial litigation involving
                            commercial trucking, construction defect, products liability, premises liability
                            and lap slip cases
                        </v-layout>
                    </v-container>
                    <v-card-actions>
                        <v-dialog 
                            v-model="dialog2" 
                            width="500"
                        >
                            <v-btn 
                                slot="activator" 
                                flat 
                                color="blue-grey"
                            >
                                See Bio
                            </v-btn>
                            <v-card>
                                <v-card-title 
                                    class="headline grey lighten-2" 
                                    primary-title
                                >
                                    Hamilton D. Skeens
                                </v-card-title>
                                <v-card-text>
                                    <p>
                                        Hamilton was admitted to the West Virginia Bar in 1996, and joined Taylor Law 
                                        Office in 2020.
                                    </p>
                                    <ul>
                                    <li>District Court for the Northern District of West Virginia, 1996</li>
                                    <li>District Court for the Southern District of West Virginia, 1996</li>
                                    <li>Admitted to the North Carolina bar, 2004</li>
                                    <li>Concord College (B.S., Business Administration, 1992)</li>
                                    <li>Regent University (M.B.A., 1997)</li>
                                    <li>West Virginia University College of Law (J.D., 1996)</li>
                                    <li>Covington v. Smith, 213 W. Va. 309, 582 S.E.2d. 756 (2003)</li>
                                    </ul>
                                    <br />
                                    <p>
                                        Concentrates his practice in the areas of 
                                        automobile accident defense, insurance 
                                        coverage, uninsured, and underinsured motorist 
                                        claims.
                                    </p>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn 
                                        flat 
                                        @click="dialog2=false"
                                    >
                                        Dismiss
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-card-actions>
                </v-card>
            </v-timeline-item>

        </v-timeline>

        <!-- SMALL TIMELINE -->
        <v-timeline 
            dense 
            class="hidden-md-and-up"
        >
            <!-- TREVOR TAYLOR SMALL -->
            <v-timeline-item 
                fill-dot 
                large 
                color="indigo darken-1"
                >
                <span 
                    class="white--text font-weight-black" 
                    slot="icon"
                >
                    2008
                </span>
                <v-card>
                    <v-card-title class="indigo darken-1">
                        <v-icon
                        dark
                        size="42"
                        class="mr-2"
                        >
                        mdi-gavel
                        </v-icon>
                        <h2 class="font-weight-bold white--text">Trevor Taylor</h2>
                    </v-card-title>
                    <v-container>
                        <v-layout class="px-2">
                        In addition to maintaining an active and vigorous trial practice, Trevor Taylor focuses his 
                          practice in areas of insurance defense, appeals, insurance
                          coverage, wrongful death defense, defense of first-party insurance claims, extra-
                          contractual defense of insurers, products liability, first-party and third-party pre-litigation 
                          investigations and examinations under oath, property damage defense,
                          commercial defense, defense of insurers before the West Virginia Insurance
                          Commissioner, trucking and commercial carrier defense, personal and bodily
                          injury defense, and defense of mass litigation and toxic tort claims.
                        </v-layout>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-dialog 
                                v-model="dialog1" 
                                width="500"
                            >
                                <v-btn 
                                    slot="activator" 
                                    flat 
                                    color="blue-grey"
                                >
                                    See Bio
                                </v-btn>
                            </v-dialog>
                        </v-card-actions>
                    </v-container>   
                </v-card>
            </v-timeline-item>
                
            <!-- CHRIS DENSON SMALL -->
            <v-timeline-item 
                fill-dot 
                large 
                color="amber lighten-1"
            >
                <span 
                class="white--text font-weight-black" 
                slot="icon"
                >
                    2012
                </span>
                <v-card>
                    <v-card-title class="amber darken-1">
                        <v-icon
                            class="mr-2"
                            dark
                            size="42"
                        >
                            mdi-scale-balance
                        </v-icon>
                        <h2 class="white--text font-weight-bold">Chris Denson</h2>
                    </v-card-title>
                    <v-container>
                        <v-layout class="px-2">
                            Chris Denson concentrates his practice in the areas of general litigation, 
                            insurance coverage and extra-contractual defense, personal injury, wrongful 
                            death, products liability, property damage claims, and construction law. 
                            Mr. Denson's practice involves reviewing insurance policies, researching 
                            insurance coverage issues, drafting coverage opinions, representing clients 
                            in coverage disputes, representing clients in "bad faith" or other 
                            extra-contractual claims. Mr. Denson also represents clients in fraud and 
                            arson cases involving insurance matters.
                        </v-layout>
                    </v-container>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-dialog 
                            v-model="dialog3" 
                            width="500"
                        >
                            <v-btn 
                                slot="activator" 
                                flat 
                                color="blue-grey"
                            >
                                See Bio
                            </v-btn>
                            <v-card>
                                <v-card-title 
                                    class="headline grey lighten-2" 
                                    primary-title
                                >
                                    Christopher B. Denson
                                </v-card-title>
                                <v-card-text>
                                    <p>
                                        Chris earned his J.D. from Widener University in 1999, and joined Taylor Law Office in 2012.
                                    </p>
                                    <p>
                                        His representative experience includes defending the largest major convenience store 
                                        chains in West Virginia, the handling of numerous large exposure property damage/fire 
                                        loss claims on behalf of insurers, representing drilling companies in defense of wrongful 
                                        death and deliberate intent claims arising out of incidents occurring on well sites.  
                                        He's also defended engineers, real estate companies, brokers and agents in professional 
                                        liability matters, as well as timbering, manufacturing, and energy clients in deliberate 
                                        intent cases involving serious injury or death.
                                    </p>
                                    <p>
                                        Chris has represented insurance companies before the West Virginia Insurance Commissioner 
                                        on administrative first and third party claims associated with alleged violations of 
                                        the West Virginia Unfair Trade Practices Act, and has trial experience with cases 
                                        ranging from deliberate intent, wrongful death, and serious personal injury.  He also 
                                        serves as a member of The Defense Trial Counsel of West Virginia.
                                    </p>
                                    <p>
                                        He's previously been Co-Chair of the construction division for the United Way of Harrison County, 
                                        and a past member of the American Red Cross North Center WV Board of Directors.
                                    </p>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn 
                                        flat 
                                        @click="dialog3=false"
                                    >
                                        Dismiss
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-card-actions>
                </v-card>
            </v-timeline-item>

            <!-- TIFFANY CROPP SMALL -->
            <v-timeline-item 
                fill-dot 
                large 
                color="red lighten-1"
            >
                <span 
                class="white--text font-weight-black" 
                slot="icon"
                >
                2013
                </span>
                <v-card>
                    <v-card-title class="red lighten-1">
                        <v-icon
                            dark
                            size="42"
                            class="mr-2"
                        >
                            mdi-bank
                        </v-icon>
                        <h2 class="font-weight-bold white--text">Tiffany Cropp</h2>
                    </v-card-title>
                    <v-container>
                        <v-layout 
                            class="px-2"
                        >
                            Tiffany earned her J.D. from West Virginia College of law in 2006, 
                            and joined Taylor Law Office in 2013. She concentrates her practice 
                            in the areas of insurance coverage, declaratory judgment 
                            actions, and deliberate intent.
                        </v-layout>
                    </v-container>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-dialog 
                            v-model="dialog4" 
                            width="500"
                        >
                            <v-btn 
                                slot="activator" 
                                flat 
                                color="blue-grey"
                            >
                                See Bio
                            </v-btn>
                        </v-dialog>
                    </v-card-actions>
                </v-card>
            </v-timeline-item>

            <!-- MATT MISFELDT SMALL -->
            <v-timeline-item 
                fill-dot 
                large 
                color="grey darken-1"
                >
                <span 
                    class="white--text font-weight-black" 
                    slot="icon"
                >
                    2019
                </span>
                <v-card>
                    <v-card-title class="grey darken-1">
                        <v-icon
                        dark
                        size="42"
                        class="mr-2"
                        >
                        mdi-gavel
                        </v-icon>
                        <h2 class="font-weight-bold white--text">Matt Misfeldt</h2>
                    </v-card-title>
                    <v-container>
                        <v-layout class="px-2">
                            Matt earned his J.D. from the University of Wisconsin Law in 2015, 
                            and joined TLO in 2019. He concentrates his practice in the 
                            areas of automobile accident defense, deliberate intent, 
                            insurance coverage, uninsured and underinsured motorist claims. 
                        </v-layout>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-dialog 
                                v-model="dialog5" 
                                width="500"
                            >
                                <v-btn 
                                    slot="activator" 
                                    flat 
                                    color="blue-grey"
                                >
                                    See Bio
                                </v-btn>
                            </v-dialog>
                        </v-card-actions>
                    </v-container>   
                </v-card>
            </v-timeline-item>

            <!-- HAMILTON SKEENS SMALL -->
            <v-timeline-item 
                fill-dot 
                large 
                color="green lighten-1"
            >
                <span 
                class="white--text font-weight-black" 
                slot="icon"
                >
                2020
                </span>
                <v-card>
                    <v-card-title class="green lighten-1">
                        <v-icon
                            dark
                            size="42"
                            class="mr-2"
                        >
                            mdi-bank
                        </v-icon>
                        <h2 class="font-weight-bold white--text">Hamilton Skeens</h2>
                    </v-card-title>
                    <v-container>
                        <v-layout 
                            class="px-2"
                        >
                            Hamilton concentrates his practice in areas of defense litigation; 
                            with particular emphasis on the defense of complex commercial 
                            litigation involving commercial trucking, construction defect, 
                            products liability, premises liability and lap slip cases.
                        </v-layout>
                    </v-container>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-dialog 
                            v-model="dialog2" 
                            width="500"
                        >
                            <v-btn 
                                slot="activator" 
                                flat 
                                color="blue-grey"
                            >
                                See Bio
                            </v-btn>
                        </v-dialog>
                    </v-card-actions>
                </v-card>
            </v-timeline-item>
        </v-timeline>
      </v-sheet>
      <v-container grid-list-lg style="max-width: 700px;">
        <v-flex>
          <div class="headline mt-3">
            Experienced, Knowledgable Attorneys Are Ready to Assist You Today
          </div>
          <p class="mt-3">
            The frustration of paying associates to learn how to practice 
            insurance defense simply is not an issue at Taylor Law Office. 
            Our attorneys have already traversed the gauntlet of legal obstacles 
            presented by the West Virginia civil legal system. For well over a 
            decade, the collective experience of attorneys at Taylor Law Office 
            have forged the skill and knowledge necessary to provide an insurer 
            with the quality legal representation required for its insureds.
          </p>
        </v-flex>
      </v-container>
  </span>            
</template>

<script>
export default {
    name: 'AttorneysDetails',

    data: () => ({
        dialog1: false,
        dialog2: false,
        dialog3: false,
        dialog4: false,
        dialog5: false
    })
};
</script>

<style scoped>
.timeline {
    max-width: 1100px;
    margin: 0 auto;
}
</style>
