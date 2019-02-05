<template>
    <v-container grid-list-lg>
        <v-layout row nowrap>
            <v-flex>
                <div class="headline mt-3">Quality Defense</div>
                <p class="subheading mt-3">
                    The primary focus of the practice at Taylor Law Office is 
                    insurance defense litigation. Collectively, our attorneys 
                    have handled many hundreds of cases for various insurers 
                    in all State and Federal jurisdictions throughout West Virginia. 
                    While these cases range in size and complexity, they are all 
                    approached with the same intense focus for providing a superior 
                    product. The relative small size of Taylor Law Office provides 
                    inherent advantages to insurers concerned with who and how 
                    cases are being handled. 
                </p>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm12 md6 xl3>
                <v-card elevation=10>
                    <v-img src="https://i.imgur.com/xxUPAV0.jpg" aspect-ratio="1.5" contain>
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline white--text">TREVOR K. TAYLOR</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>
                    <v-card-title primary-title>
                        <div class="subheading">
                            Trevor's primary litigation focus is dedicated to Civil Defense in 
                            areas including, but not limited to coverage determinations; 
                            security, hotel, and airport/airplane liability; deliberate 
                            intent, and wrongful death.
                        </div>                        
                    </v-card-title>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialog1" width="500">
                            <v-btn slot="activator" flat color="blue-grey">See Bio</v-btn>
                            <v-card>
                                <v-card-title class="headline grey lighten-2" primary-title>
                                    Trevor K. Taylor
                                </v-card-title>
                                <v-card-text>
                                    <p>Trevor earned his J.D. from West Virginia College of law in 2001, and started Taylor Law Office in 2008.</p>
                                    <p>Concentrates his practice in the areas of defense of large loss liability claims, first party coverage disputes, insurance coverage, and extra-contractual defense.</p>
                                    <p>Successfully tried over 20 cases, several before the Supreme Court, and resolved countless others through mediation.</p>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn flat @click="dialog1=false">
                                        Dismiss
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs12 sm12 md6 xl3>
                <v-card elevation=10>
                    <v-img src="https://i.imgur.com/nMHVPGr.jpg" aspect-ratio="1.5" contain>
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline white--text">PAUL W. GWALTNEY, JR.</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>
                    <v-card-title primary-title>
                        <div class="subheading">
                            Paul focus his practice on uninsured or underinsured motorists, 
                            premises liability, serious injury and wrongful death, with bar 
                            admissions to West Virginia, U.S. District Courts for Southern and 
                            Northern districts.
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialog2" width="500">
                            <v-btn slot="activator" flat color="blue-grey">See Bio</v-btn>
                            <v-card>
                                <v-card-title class="headline grey lighten-2" primary-title>
                                    Paul W. Gwaltney, Jr.
                                </v-card-title>
                                <v-card-text>
                                    <p>Paul earned his J.D. from West Virginia College of law in 2003, and joined Taylor Law Office in 2009.</p>
                                    <p>Concentrates his practice in the areas of automobile accident defense, insurance coverage, uninsured, and underinsured motorist claims.</p>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn flat @click="dialog2=false">
                                        Dismiss
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs12 sm12 md6 xl3>
                <v-card elevation=10>
                    <v-img src="https://i.imgur.com/FcRxE4B.jpg" aspect-ratio="1.5" contain>
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline white--text">CHRIS DENSON</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>
                    <v-card-title primary-title>
                        <div class="subheading">
                            Chris Denson concentrates his practice in the areas of general litigation, 
                            insurance coverage and extra-contractual defense, personal injury, wrongful 
                            death, products liability, property damage claims, and construction law. 
                            Mr. Denson's practice involves reviewing insurance policies, researching 
                            insurance coverage issues, drafting coverage opinions, representing clients 
                            in coverage disputes, representing clients in "bad faith" or other 
                            extra-contractual claims. Mr. Denson also represents clients in fraud and 
                            arson cases involving insurance matters. Mr. Denson has handled examinations 
                            under oath, claim evaluations, and settlement negotiations. Mr. Denson has 
                            briefed and argued appeals before the West Virginia Supreme Court of Appeals 
                            and the Fourth Circuit Court of Appeals.
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialog3" width="500">
                            <v-btn slot="activator" flat color="blue-grey">See Bio</v-btn>
                            <v-card>
                                <v-card-title class="headline grey lighten-2" primary-title>
                                    Chris Denson
                                </v-card-title>
                                <v-card-text>
                                    <p>Chris earned his J.D. from Widener University in 1999, and joined Taylor Law Office in 2012.</p>
                                    <p>His representative experience includes defending the largest major convenience store 
                                        chains in West Virginia, the handling of numerous large exposure property damage/fire 
                                        loss claims on behalf of insurers, representing drilling companies in defense of wrongful 
                                        death and deliberate intent claims arising out of incidents occurring on well sites.  
                                        He's also defended engineers, real estate companies, brokers and agents in professional 
                                        liability matters, as well as timbering, manufacturing, and energy clients in deliberate 
                                        intent cases involving serious injury or death.</p>
                                    <p>Chris has represented insurance companies before the West Virginia Insurance Commissioner 
                                        on administrative first and third party claims associated with alleged violations of 
                                        the West Virginia Unfair Trade Practices Act, and has trial experience with cases 
                                        ranging from deliberate intent, wrongful death, and serious personal injury.  He also 
                                        serves as a member of The Defense Trial Counsel of West Virginia</p>
                                    <p>
                                        He's previously been Co-Chair of the construction division for the United Way of Harrison County, 
                                        and a past member of the American Red Cross North Center WV Board of Directors.
                                    </p>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn flat @click="dialog3=false">
                                        Dismiss
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs12 sm12 md6 xl3>
                <v-card elevation=10>
                    <v-img src="https://i.imgur.com/ybahMCg.jpg" aspect-ratio="1.5" contain>
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline white--text">TIFFANY A. CROPP</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>
                    <v-card-title primary-title>
                        <div class="subheading">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Nullam mauris felis, varius rutrum massa a, dignissim ornare 
                            dui. Cras eget velit eu dui tristique lobortis sit amet vel tellus.
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialog4" width="500">
                            <v-btn slot="activator" flat color="blue-grey">See Bio</v-btn>
                            <v-card>
                                <v-card-title class="headline grey lighten-2" primary-title>
                                    Tiffany A. Cropp
                                </v-card-title>
                                <v-card-text>
                                    <p>Tiffany earned her J.D. from West Virginia College of law in 2006, and joined Taylor Law Office in 2013.</p>
                                    <p>She concentrates her practice in the areas of insurance coverage, declaratory judgment actions, and deliberate intent.</p>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn flat @click="dialog4=false">
                                        Dismiss
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex>
                <div class="headline mt-3">Experienced, Knowledgable Attorneys Are Ready to Assist You Today</div>
                <p class="subheading mt-3">
                    The frustration of paying associates to learn how to practice 
                    insurance defense simply is not an issue at Taylor Law Office. 
                    Our attorneys have already traversed the gauntlet of legal obstacles 
                    presented by the West Virginia civil legal system. For well over a 
                    decade, the collective experience of attorneys at Taylor Law Office 
                    have forged the skill and knowledge necessary to provide an insurer 
                    with the quality legal representation required for its insureds.
                </p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'AttorneysDetails',
    data: () => ({
        dialog1: false,
        dialog2: false,
        dialog3: false,
        dialog4: false
    })
};
</script>

<style scoped>
</style>
