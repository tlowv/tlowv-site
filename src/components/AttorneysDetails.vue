<template>
    <v-container grid-list-lg>
        <v-layout row nowrap>
            <v-flex>
                <div class="headline mt-3">Lorem ipsum</div>
                <p class="subheading mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Cras pulvinar risus quis mauris interdum, in euismod nibh 
                    pretium. Etiam pulvinar tincidunt dapibus. Quisque 
                    sollicitudin, mauris a consequat consectetur, turpis nisl 
                    sollicitudin enim, id consectetur neque neque nec metus. </p>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm12 md6 xl3>
                <v-card elevation=10>
                    <v-img src="https://i.imgur.com/xxUPAV0.jpg" height="400px">
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline white--text">TREVOR K. TAYLOR</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>
                    <v-card-title primary-title>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Nullam mauris felis, varius rutrum massa a, dignissim ornare dui. 
                            Cras eget velit eu dui tristique lobortis sit amet vel tellus.
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
                                    <p>Trevor earned his J.D. from West Virginia College of law in 2001.</p>
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
                    <v-img src="https://i.imgur.com/nMHVPGr.jpg" height="400px">
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline white--text">PAUL W. GWALTNEY, JR.</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>
                    <v-card-title primary-title>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Nullam mauris felis, varius rutrum massa a, dignissim ornare 
                            dui. Cras eget velit eu dui tristique lobortis sit amet vel tellus.
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
                    <v-img src="https://i.imgur.com/FcRxE4B.jpg" height="400px">
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline white--text">CHRIS DENSON</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>
                    <v-card-title primary-title>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Nullam mauris felis, varius rutrum massa a, dignissim ornare 
                            dui. Cras eget velit eu dui tristique lobortis sit amet vel tellus.
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
                                    <p>Chris concentrates his practice in the areas of insurance coverage, extra-contractural defense, personal injury, wrongful death, products liability, property damage claims, and construction law.</p>
                                    <p>He also serves as a member of The Defense Trial Counsel of West Virginia</p>
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
                    <v-img src="https://i.imgur.com/ybahMCg.jpg" height="400px">
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline white--text">TIFFANY A. CROPP</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>
                    <v-card-title primary-title>
                        <div>
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
                <div class="headline mt-3">Lorem ipsum</div>
                <p class="subheading mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Cras pulvinar risus quis mauris interdum, in euismod nibh 
                        pretium. Etiam pulvinar tincidunt dapibus. Quisque 
                        sollicitudin, mauris a consequat consectetur, turpis nisl 
                        sollicitudin enim, id consectetur neque neque nec metus. </p>
                <p class="subheading mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Cras pulvinar risus quis mauris interdum, in euismod nibh 
                        pretium. Etiam pulvinar tincidunt dapibus. Quisque 
                        sollicitudin, mauris a consequat consectetur, turpis nisl 
                        sollicitudin enim, id consectetur neque neque nec metus. </p>
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
        dialog4: false,

        attorneys: [
            {
                name: 'Trevor K. Taylor',
                education: 'J.D., West Virginia College of Law, 2001',
                descriptions: [
                    {
                        blurb:
                            'Concentrates his practice in the areas of defense of large loss liability claims, first party coverage disputes, insurance coverage, and extra-contractual defense.'
                    },
                    {
                        blurb:
                            'Successfully tried over 20 cases, several before the Supreme Court, and resolved countless others through mediation.'
                    }
                ]
            },
            {
                name: 'Paul W. Gwaltney, Jr.',
                education: 'J.D., West Virginia College of Law, 2003',
                descriptions: [
                    {
                        blurb: 'Joined Taylor Law Office in 2009'
                    },
                    {
                        blurb:
                            'Concentrates his practice in the areas of automobile accident defense, insurance coverage, uninsured, and underinsured motorist claims.'
                    }
                ]
            },
            {
                name: 'Christopher B. Denson',
                education: 'J.D., Widener University, 1999',
                descriptions: [
                    {
                        blurb: 'Joined Taylor Law Office in 2012'
                    },
                    {
                        blurb:
                            'Member of The Defense Trial Counsel of West Virginia'
                    },
                    {
                        blurb:
                            'Concentrates his practice in the areas of insurance coverage, extra-contractural defense, personal injury, wrongful death, products liability, property damage claims, and construction law.'
                    }
                ]
            },
            {
                name: 'Tiffany A. Cropp',
                education: 'J.D., West Virginia College of Law, 2006',
                descriptions: [
                    {
                        blurb: 'Joined Taylor Law Office in 2013'
                    },
                    {
                        blurb:
                            'Concentrates her practice in the areas of insurance coverage, declaratory judgment actions, and deliberate intent.'
                    }
                ]
            }
        ]
    })
};
</script>

<style scoped>
</style>
