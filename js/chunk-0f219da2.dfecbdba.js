(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f219da2"],{5814:function(e,t,a){},"5a93":function(e,t,a){"use strict";var n=function(){var e=this,t=e._self._c;return t("v-card",[t("v-card-title",{staticClass:"blue-grey lighten-4",attrs:{"primary-title":""}},[t("div",[t("h3",{staticClass:"headline mb-0"},[e._v("Drop us a line")]),t("div",[e._v("Fill out and submit this form to send us an e-mail")])])]),t("div",{staticClass:"pa-3"},[t("v-form",{ref:"form",attrs:{action:"https://formspree.io/f/xzblbyqj",name:"contact",method:"POST"},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t("v-text-field",{attrs:{rules:e.nameRules,label:"Name",name:"Name",required:"",id:"nameInput"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),t("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",name:"email",required:"",id:"emailInput"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),t("div",{staticClass:"caption grey--text"},[e._v("We'll never share your email with anyone else.")]),t("v-textarea",{attrs:{rules:e.messageRules,required:"",name:"message",id:"inquiryInput"},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}},[t("div",{attrs:{slot:"label"},slot:"label"},[e._v("Send us a message")])]),t("v-card-actions",[t("v-spacer"),t("v-btn",{staticClass:"white--text red lighten-1",attrs:{flat:"",round:""},on:{click:e.reset}},[e._v("\n                    Clear\n                "),t("v-icon",{staticClass:"ml-2",attrs:{color:"white"}},[e._v("mdi-cancel")])],1),t("v-btn",{staticClass:"white--text lighten-1",class:{grey:!e.valid,green:e.valid},attrs:{flat:"",round:"",type:"submit",value:"Send",disabled:!e.valid},on:{click:e.submit}},[e._v("\n                    Submit\n                "),t("v-icon",{staticClass:"ml-2",attrs:{color:"white"}},[e._v("mdi-send")])],1)],1)],1)],1)],1)},s=[],i={data:function(){return{valid:!0,name:"",nameRules:[function(e){return!!e||"Name is required"}],email:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/[a-z0-9._%+!$&*=^|~#%'`?{}/-]+@([a-z0-9-]+.){1,}([a-z]{2,16})/.test(e)||"Must be a valid e-mail"}],message:"",messageRules:[function(e){return!!e||"Message is required"}]}},methods:{reset:function(){this.$refs.form.reset(),this.$refs.form.resetValidation()},submit:function(){this.$refs.form.validate()}}},r=i,l=a("2877"),c=Object(l["a"])(r,n,s,!1,null,"816cf626",null);t["a"]=c.exports},"7ab2":function(e,t,a){"use strict";a("9362")},9362:function(e,t,a){},a45f:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("span",[t("insurance-defense-header"),t("insurance-defense-details")],1)},s=[],i=function(){var e=this,t=e._self._c;return t("v-container",{staticClass:"insurance-defense-header",staticStyle:{"max-height":"60vh"},attrs:{fluid:"","fill-height":""}},[t("v-layout",{attrs:{"justify-center":"","align-center":"",column:"","pa-5":""}},[t("div",{staticClass:"outline-text display-3 white--text font-weight-black text-xs-center mb-3"},[e._v("Insurance Defense")]),t("v-btn",{staticClass:"mt-5 white--text",attrs:{large:"",outline:""},on:{click:function(t){return e.$vuetify.goTo("#bottom")}}},[t("v-icon",{attrs:{color:"white"}},[e._v("mdi-chevron-down")]),e._v("\n            Get Help Today!\n            "),t("v-icon",{attrs:{color:"white"}},[e._v("mdi-chevron-down")])],1)],1)],1)},r=[],l={name:"InsuranceDefenseHeader"},c=l,o=(a("aa27"),a("2877")),d=Object(o["a"])(c,i,r,!1,null,"728af7ee",null),u=d.exports,v=function(){var e=this,t=e._self._c;return t("div",[t("v-container",{staticStyle:{"max-width":"800px"}},[t("v-layout",{attrs:{column:""}},[t("v-flex",[t("div",{staticClass:"display-1"},[e._v("Insurance Defense at TLO")]),t("p",[e._v("\n                    At Taylor Law Office, we specialize in providing robust legal solutions and defense strategies\n                    for a\n                    variety of insurance-related disputes. Our practice is dedicated to insurance defense,\n                    reflecting\n                    our commitment to excellence and thorough legal support for insurers across West Virginia.\n                ")])])],1)],1),t("v-container",{attrs:{fluid:""}},[t("v-layout",{staticStyle:{"max-width":"1200px",margin:"0 auto"},attrs:{row:"",wrap:""}},[t("v-flex",{staticClass:"why-tlo-block",attrs:{xs12:"",md3:""}},[t("v-icon",{attrs:{size:"128",color:"amber darken-2"}},[e._v("mdi-trophy")]),t("h1",{staticClass:"display-1 text-xs-center mt-4"},[e._v("Proven Track Record")]),t("p",{staticClass:"subheading text-xs-center my-3"},[e._v("\n                    With thousands of cases and countless successful verdicts, our firm has established itself as a\n                    leader in the field of insurance defense.\n                ")])],1),t("v-flex",{staticClass:"why-tlo-block",attrs:{xs12:"",md3:""}},[t("v-icon",{attrs:{size:"128",color:"amber darken-2"}},[e._v("mdi-gavel")]),t("h1",{staticClass:"display-1 text-xs-center mt-4"},[e._v("Extensive Trial Experience")]),t("p",{staticClass:"subheading text-xs-center my-3"},[e._v("\n                    Our attorneys have a comprehensive understanding of the legal landscape across West Virginia,\n                    having engaged with nearly every sitting judge in the state.\n                ")])],1),t("v-flex",{staticClass:"why-tlo-block",attrs:{xs12:"",md3:""}},[t("v-icon",{attrs:{size:"128",color:"amber darken-2"}},[e._v("mdi-magnify")]),t("h1",{staticClass:"display-1 text-xs-center mt-4"},[e._v("Dedicated Focus")]),t("p",{staticClass:"subheading text-xs-center my-3"},[e._v("\n                    Insurance defense is the cornerstone of our practice at Taylor Law Office. Our dedicated\n                    approach ensures we are always aligned with the latest legal trends and judicial insights.\n                ")])],1),t("v-flex",{staticClass:"why-tlo-block",attrs:{xs12:"",md3:""}},[t("v-icon",{attrs:{size:"128",color:"amber darken-2"}},[e._v("mdi-account-multiple")]),t("h1",{staticClass:"display-1 text-xs-center mt-4"},[e._v("Client-Centric Approach")]),t("p",{staticClass:"subheading text-xs-center my-3"},[e._v("\n                    We ensure that each client receives personalized attention and a defense strategy tailored to\n                    their specific case and coverage stipulations.\n                ")])],1)],1)],1),t("v-container",{staticStyle:{"max-width":"800px"}},[t("v-layout",{attrs:{column:""}},[t("v-flex",[t("div",{staticClass:"headline my-3"},[e._v("Our Expertise")]),t("p",[e._v("\n                    Taylor Law Office has a profound legacy and expertise in handling complex insurance defense\n                    cases.\n                    We've successfully litigated over 2,000 cases, providing us with unique insights and a pragmatic\n                    approach tailored to the nuances of insurance law. Our attorneys are well-acquainted with the\n                    judiciary landscape of West Virginia, having represented clients before the vast majority of\n                    judges in the state.\n                ")])]),t("v-flex",[t("div",{staticClass:"headline my-3"},[e._v("Our Clients")]),t("p",[e._v("\n                    We have been trusted by an extensive list of clients, reflecting our reputation and reliability\n                    in\n                    the field of insurance defense. Some of the insurers we have represented include:\n                ")]),t("ul",[t("li",[e._v("State Auto Insurance Companies")]),t("li",[e._v("State Farm Insurance Company")]),t("li",[e._v("Nationwide")]),t("li",[e._v("USAA")]),t("li",[e._v("West Virginia National")]),t("li",[e._v("Geico")]),t("li",[e._v("Cincinnati Insurance")]),t("li",[e._v("Liberty Mutual")]),t("li",[e._v("Milbank Insurance")]),t("li",[e._v("Great American Insurance")]),t("li",[e._v("Markel")]),t("li",[e._v("National Insurance")])]),t("p",{staticClass:"mt-3"},[e._v("\n                    Every client receives our focused and seasoned legal advocacy, aimed at reducing liability and\n                    upholding principles of justice and fairness.\n                ")])]),t("v-flex",{staticClass:"form-container mt-3",attrs:{xs12:"",id:"bottom"}},[t("contact-form")],1),t("div",{staticClass:"headline my-3"},[e._v("Learn More")]),t("v-flex",[t("v-expansion-panel",e._l(e.items,(function(a,n){return t("v-expansion-panel-content",{key:n,staticStyle:{background:"#CFD8DC","font-size":"larger"},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n                            "+e._s(a.title)+"\n                        ")]},proxy:!0}],null,!0)},[t("v-card",{staticClass:"mx-3"},[t("v-card-text",{staticStyle:{"font-size":"smaller","padding-top":"0px",background:"#CFD8DC"}},[e._v(e._s(a.content))])],1)],1)})),1)],1)],1)],1)],1)},f=[],m=a("5a93"),h={name:"InsuranceDefenseDetails",components:{ContactForm:m["a"]},data:function(){return{items:[{title:"What is insurance defense?",content:"Insurance defense involves legal representation in cases where insurance companies are sued by plaintiffs. These cases often involve claims related to accidents, injuries, or damages where the insurance company defends its insured or itself against the claims filed. The goal is to limit the insurance company’s liability and ensure fair legal treatment."},{title:"What types of cases do we handle?",content:"We handle a variety of cases within the realm of insurance defense, including but not limited to, automobile accidents, workers' compensation claims, liability disputes, property damage, and medical malpractice defenses."},{title:"How does the insurance defense process work?",content:"The process starts with an initial assessment of the claim, followed by a detailed investigation to gather facts and evidence. Strategic planning includes preparing legal arguments, engaging in negotiations, or proceeding to trial if necessary. Throughout the case, we ensure to align our defense strategies with the specific needs and outcomes desired by our clients."},{title:"What are the benefits of hiring an insurance defense attorney?",content:"Hiring an insurance defense attorney provides expertise in navigating complex legal and procedural issues effectively. It helps in minimizing liability, reducing litigation costs, and defending claims aggressively to ensure a favorable outcome for the insurer."}]}}},p=h,g=(a("7ab2"),Object(o["a"])(p,v,f,!1,null,"1947c794",null)),y=g.exports,x={name:"Insurance Defense",title:"Insurance Defense | TLO",components:{InsuranceDefenseHeader:u,InsuranceDefenseDetails:y}},b=x,_=Object(o["a"])(b,n,s,!1,null,"1cdec0a3",null);t["default"]=_.exports},aa27:function(e,t,a){"use strict";a("5814")}}]);
//# sourceMappingURL=chunk-0f219da2.dfecbdba.js.map