(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8a81c7a8"],{"09a8":function(e,t,a){"use strict";a("61da")},"5a93":function(e,t,a){"use strict";var s=function(){var e=this,t=e._self._c;return t("v-card",[t("v-card-title",{staticClass:"blue-grey lighten-4",attrs:{"primary-title":""}},[t("div",[t("h3",{staticClass:"headline mb-0"},[e._v("Drop us a line")]),t("div",[e._v("Fill out and submit this form to send us an e-mail")])])]),t("div",{staticClass:"pa-3"},[t("v-form",{ref:"form",attrs:{action:"https://formspree.io/f/xzblbyqj",name:"contact",method:"POST"},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t("v-text-field",{attrs:{rules:e.nameRules,label:"Name",name:"Name",required:"",id:"nameInput"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),t("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",name:"email",required:"",id:"emailInput"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),t("div",{staticClass:"caption grey--text"},[e._v("We'll never share your email with anyone else.")]),t("v-textarea",{attrs:{rules:e.messageRules,required:"",name:"message",id:"inquiryInput"},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}},[t("div",{attrs:{slot:"label"},slot:"label"},[e._v("Send us a message")])]),t("v-card-actions",[t("v-spacer"),t("v-btn",{staticClass:"white--text red lighten-1",attrs:{flat:"",round:""},on:{click:e.reset}},[e._v("\n                    Clear\n                "),t("v-icon",{staticClass:"ml-2",attrs:{color:"white"}},[e._v("mdi-cancel")])],1),t("v-btn",{staticClass:"white--text lighten-1",class:{grey:!e.valid,green:e.valid},attrs:{flat:"",round:"",type:"submit",value:"Send",disabled:!e.valid},on:{click:e.submit}},[e._v("\n                    Submit\n                "),t("v-icon",{staticClass:"ml-2",attrs:{color:"white"}},[e._v("mdi-send")])],1)],1)],1)],1)],1)},i=[],n={data:function(){return{valid:!0,name:"",nameRules:[function(e){return!!e||"Name is required"}],email:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/[a-z0-9._%+!$&*=^|~#%'`?{}/-]+@([a-z0-9-]+.){1,}([a-z]{2,16})/.test(e)||"Must be a valid e-mail"}],message:"",messageRules:[function(e){return!!e||"Message is required"}]}},methods:{reset:function(){this.$refs.form.reset(),this.$refs.form.resetValidation()},submit:function(){this.$refs.form.validate()}}},r=n,o=a("2877"),l=Object(o["a"])(r,s,i,!1,null,"816cf626",null);t["a"]=l.exports},"61da":function(e,t,a){},b630:function(e,t,a){},b775:function(e,t,a){"use strict";a("b630")},ec21:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("span",[t("coverage-decisions-header"),t("coverage-decisions-details")],1)},i=[],n=function(){var e=this,t=e._self._c;return t("v-container",{staticClass:"coverage-decisions-header",staticStyle:{"max-height":"60vh"},attrs:{fluid:"","fill-height":""}},[t("v-layout",{attrs:{"justify-center":"","align-center":"",column:"","pa-5":""}},[t("div",{staticClass:"outline-text display-3 white--text font-weight-black text-xs-center mb-3"},[e._v("Insurance Coverage - Decisions & Appeals")]),t("v-btn",{staticClass:"mt-5 white--text",attrs:{large:"",outline:""},on:{click:function(t){return e.$vuetify.goTo("#bottom")}}},[t("v-icon",{attrs:{color:"white"}},[e._v("mdi-chevron-down")]),e._v("\n            Get Help Today!\n            "),t("v-icon",{attrs:{color:"white"}},[e._v("mdi-chevron-down")])],1)],1)],1)},r=[],o={name:"CoverageDecisionsHeader"},l=o,c=(a("b775"),a("2877")),u=Object(c["a"])(l,n,r,!1,null,"128e4ab2",null),d=u.exports,v=function(){var e=this,t=e._self._c;return t("div",[t("v-container",{staticStyle:{"max-width":"800px"}},[t("v-layout",{attrs:{column:""}},[t("v-flex",[t("div",{staticClass:"display-1"},[e._v("Insurance Coverage Decisions at TLO")]),t("p",[e._v("\n          At Taylor Law Office, we specialize in assisting insurers in West Virginia with complex coverage decisions\n          and the appeals process. Our practice is committed to providing detailed legal analysis and strategic\n          counsel to navigate the intricacies of insurance law, ensuring our clients achieve favorable outcomes.\n        ")])])],1)],1),t("v-container",{attrs:{fluid:""}},[t("v-layout",{staticStyle:{"max-width":"1200px",margin:"0 auto"},attrs:{row:"",wrap:""}},[t("v-flex",{staticClass:"why-tlo-block",attrs:{xs12:"",md3:""}},[t("v-icon",{attrs:{size:"128",color:"amber darken-2"}},[e._v("mdi-trophy")]),t("h1",{staticClass:"display-1 text-xs-center mt-4"},[e._v("Proven Track Record")]),t("p",{staticClass:"subheading text-xs-center my-3"},[e._v("\n          Taylor Law Office has a history of securing favorable outcomes for insurers at the circuit court level and\n          before the West Virginia Supreme Court of Appeals.\n        ")])],1),t("v-flex",{staticClass:"why-tlo-block",attrs:{xs12:"",md3:""}},[t("v-icon",{attrs:{size:"128",color:"amber darken-2"}},[e._v("mdi-book-open-page-variant")]),t("h1",{staticClass:"display-1 text-xs-center mt-4"},[e._v("Expert Legal Team")]),t("p",{staticClass:"subheading text-xs-center my-3"},[e._v("\n          Our attorneys possess deep knowledge of insurance law complexities and are skilled in both trial advocacy\n          and appellate procedures.\n        ")])],1),t("v-flex",{staticClass:"why-tlo-block",attrs:{xs12:"",md3:""}},[t("v-icon",{attrs:{size:"128",color:"amber darken-2"}},[e._v("mdi-file-find")]),t("h1",{staticClass:"display-1 text-xs-center mt-4"},[e._v("Strategic Analysis")]),t("p",{staticClass:"subheading text-xs-center my-3"},[e._v("\n          We offer detailed evaluation of policy provisions, coverage disputes, and claims to ensure informed,\n          tactical decision-making.\n        ")])],1),t("v-flex",{staticClass:"why-tlo-block",attrs:{xs12:"",md3:""}},[t("v-icon",{attrs:{size:"128",color:"amber darken-2"}},[e._v("mdi-account-multiple")]),t("h1",{staticClass:"display-1 text-xs-center mt-4"},[e._v("Client-Centric Approach")]),t("p",{staticClass:"subheading text-xs-center my-3"},[e._v("\n          We provide tailored legal advice aimed at protecting the interests of insurers and minimizing risks.\n        ")])],1)],1)],1),t("v-container",{staticStyle:{"max-width":"800px"}},[t("v-layout",{attrs:{column:""}},[t("v-flex",[t("div",{staticClass:"headline mt-3"},[e._v("Our Expertise")]),t("p",{staticClass:"mt-3"},[e._v("\n          Taylor Law Office is adept at handling a range of complex insurance coverage matters including:\n        ")]),t("ul",[t("li",[t("p",[t("strong",[e._v("Analyzing Policy Coverage:")]),e._v(" We interpret insurance policies and assess coverage options\n              to guide insurers in making informed decisions.")])]),t("li",[t("p",[t("strong",[e._v("Litigating Disputes:")]),e._v(" When disputes arise, we are prepared to defend insurers in court,\n              advocating for their interpretation of policy terms.\n            ")])]),t("li",[t("p",[t("strong",[e._v("Navigating Appeals:")]),e._v(" Our seasoned attorneys have significant experience in appealing\n              unfavorable decisions, striving for outcomes that align with our clients' objectives.")])])]),t("p",{staticClass:"mt-3"},[e._v("\n          We are proud of our record in achieving favorable decisions for our clients. Whether it is through\n          negotiating settlements or vigorous representation in court, our focus is always on securing the best\n          possible results.\n        ")])]),t("v-flex",{staticClass:"form-container mt-3",attrs:{xs12:"",id:"bottom"}},[t("contact-form")],1)],1)],1)],1)},m=[],p=a("5a93"),f={name:"CoverageDecisionsDetails",components:{ContactForm:p["a"]}},g=f,h=(a("09a8"),Object(c["a"])(g,v,m,!1,null,"0f13da21",null)),x=h.exports,b={name:"Insurance Coverage - Decisions & Appeals",title:"Insurance Coverage - Decisions & Appeals | TLO",components:{CoverageDecisionsHeader:d,CoverageDecisionsDetails:x}},y=b,_=Object(c["a"])(y,s,i,!1,null,"35616794",null);t["default"]=_.exports}}]);
//# sourceMappingURL=chunk-8a81c7a8.26775c9a.js.map