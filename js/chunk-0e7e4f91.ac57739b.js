(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e7e4f91"],{"0e93":function(e,t,a){"use strict";var n=a("7c3a"),s=a.n(n);s.a},"33cb":function(e,t,a){},"7c3a":function(e,t,a){},b8fa:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("contact-header"),a("contact-details")],1)},s=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"contact-header",staticStyle:{"max-height":"60vh"},attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{"justify-center":"","align-center":"",column:"","pa-5":""}},[a("div",{staticClass:"outline-text display-3 white--text font-weight-black text-xs-center mb-3"},[e._v("Contact Us")]),a("v-divider"),a("h2",{staticClass:"outline-text hidden-sm-and-up white--text text-xs-center"},[e._v("Get help today")]),a("h2",{staticClass:"outline-text display-3 font-weight-light white--text hidden-xs-only text-xs-center"},[e._v("Get help today")])],1)],1)},l=[],o={name:"ContactHeader"},r=o,c=(a("dc34"),a("2877")),u=Object(c["a"])(r,i,l,!1,null,"1961d442",null);u.options.__file="ContactHeader.vue";var m=u.exports,d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-layout",{staticStyle:{"max-width":"1100px",margin:"0 auto"},attrs:{row:"",wrap:"","align-center":""}},[a("v-flex",{staticClass:"contact-row",attrs:{xs12:"",sm6:"","mb-2":""}},[a("p",{staticClass:"subheading"},[e._v("\n                Here at Taylor Law Office, we always enjoy hearing from our \n                current and potential clients. If you have a question or would like to comment \n                on anything you've seen or read on this website, contact us by phone or by simply \n                filling out the form below.\n            ")]),a("div",{staticClass:"headline"},[e._v("Taylor Law Office")]),a("div",{staticClass:"subheading"},[e._v("330 Scott Avenue")]),a("div",{staticClass:"subheading"},[e._v("Suite 3")]),a("div",{staticClass:"subheading"},[e._v("Morgantown, WV 26508")]),a("div",{staticClass:"headline"},[e._v("Phone: 304-225-8529")]),a("div",{staticClass:"headline mb-5"},[e._v("Fax: 304-225-8531")])]),a("v-flex",{staticClass:"mb-5",attrs:{xs12:"",sm6:""}},[a("google-map",{attrs:{name:"example"}})],1),a("v-flex",{staticClass:"form-container",attrs:{xs12:""}},[a("contact-form")],1)],1)],1)},v=[],f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"google-map",attrs:{id:e.mapName}})},p=[],h={name:"google-map",props:["name"],data:function(){return{mapName:this.name+"-map",markerCoordinates:[{latitude:39.5868,longitude:-79.967}]}},mounted:function(){var e=document.getElementById(this.mapName),t={zoom:14.75,center:new google.maps.LatLng(39.586,-79.963)},a=new google.maps.Map(e,t);this.markerCoordinates.forEach(function(e){var t=new google.maps.LatLng(e.latitude,e.longitude);new google.maps.Marker({position:t,map:a})})}},g=h,b=(a("0e93"),Object(c["a"])(g,f,p,!1,null,"caed6030",null));b.options.__file="GoogleMap.vue";var x=b.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-card-title",{staticClass:"grey lighten-2",attrs:{"primary-title":""}},[a("div",[a("h3",{staticClass:"headline mb-0"},[e._v("Drop us a line")]),a("div",[e._v("Fill out and submit this form to send us an e-mail")])])]),a("div",{staticClass:"pa-3"},[a("v-form",{ref:"form",attrs:{action:"https://formspree.io/f/xzblbyqj",name:"contact",method:"POST"},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{rules:e.nameRules,label:"Name",name:"Name",required:"",id:"nameInput"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",name:"email",required:"",id:"emailInput"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("div",{staticClass:"caption grey--text "},[e._v("We'll never share your email with anyone else.")]),a("v-textarea",{attrs:{rules:e.messageRules,required:"",name:"message",id:"inquiryInput"},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}},[a("div",{attrs:{slot:"label"},slot:"label"},[e._v("Send us a message")])]),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"white--text red lighten-1",attrs:{flat:"",round:""},on:{click:e.reset}},[e._v("\n                    Clear\n                "),a("v-icon",{staticClass:"ml-2",attrs:{color:"white"}},[e._v("mdi-cancel")])],1),a("v-btn",{staticClass:"white--text lighten-1",class:{grey:!e.valid,green:e.valid},attrs:{flat:"",round:"",type:"submit",value:"Send",disabled:!e.valid},on:{click:e.submit}},[e._v("\n                    Submit\n                "),a("v-icon",{staticClass:"ml-2",attrs:{color:"white"}},[e._v("mdi-send")])],1)],1)],1)],1)],1)},C=[],w={data:function(){return{valid:!0,name:"",nameRules:[function(e){return!!e||"Name is required"}],email:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/[a-z0-9._%+!$&*=^|~#%'`?{}/-]+@([a-z0-9-]+.){1,}([a-z]{2,16})/.test(e)||"Must be a valid e-mail"}],message:"",messageRules:[function(e){return!!e||"Message is required"}]}},methods:{reset:function(){this.$refs.form.reset(),this.$refs.form.resetValidation()},submit:function(){this.$refs.form.validate()}}},y=w,k=Object(c["a"])(y,_,C,!1,null,"7c3ed7e4",null);k.options.__file="ContactForm.vue";var q=k.exports,E={components:{GoogleMap:x,ContactForm:q}},O=E,$=Object(c["a"])(O,d,v,!1,null,"54d0b827",null);$.options.__file="ContactDetails.vue";var j=$.exports,S={name:"Contact",title:"Contact Us | TLO",components:{ContactHeader:m,ContactDetails:j}},L=S,M=Object(c["a"])(L,n,s,!1,null,"435f22b7",null);M.options.__file="Contact.vue";t["default"]=M.exports},dc34:function(e,t,a){"use strict";var n=a("33cb"),s=a.n(n);s.a}}]);
//# sourceMappingURL=chunk-0e7e4f91.ac57739b.js.map