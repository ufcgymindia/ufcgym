(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{418:function(e,r,t){var content=t(515);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(8).default)("507d8e52",content,!0,{sourceMap:!1})},514:function(e,r,t){"use strict";t(418)},515:function(e,r,t){var o=t(7)(!1);o.push([e.i,'form{display:flex;flex-wrap:wrap}form h3{margin-bottom:24px}form .button-text{width:100%;margin-top:24px}@media (max-width:414px){form .button-text{display:block;max-width:200px;margin-left:auto;margin-right:auto}}form input:not([type=checkbox]),form textarea{border:none;background:#f6f6f6;padding:16px;width:100%;font-size:1.6rem;line-height:1.38;color:#999}form input:not([type=checkbox]).is-danger,form input:not([type=checkbox]):active,form input:not([type=checkbox]):focus,form textarea.is-danger,form textarea:active,form textarea:focus{border:2px solid #1a1a1a}form input:not([type=checkbox]):not(:-moz-placeholder-shown),form textarea:not(:-moz-placeholder-shown){border-bottom:2px solid #1a1a1a}form input:not([type=checkbox]):not(:placeholder-shown),form textarea:not(:placeholder-shown){border-bottom:2px solid #1a1a1a}form option{border-radius:0}form label{font-size:2.4rem;font-weight:500;line-height:1.33;font-family:urw-din-condensed,sans-serif}form .form-field{width:100%}form .form-field,form .form-field-half{margin-bottom:32px}form .form-field-half{width:45%}form .form-field-half--left{margin-right:16px}form .form-field-half--right{margin-left:16px}form .custom-checkbox{-webkit-user-select:none;-moz-user-select:none;user-select:none;position:relative;padding-left:40px;margin-bottom:16px;display:block}form .custom-checkbox input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}form .custom-checkbox .checkmark{position:absolute;top:0;left:0;height:32px;width:32px;background-color:#f6f6f6;border:2px solid #4d4d4d}form .custom-checkbox .checkmark:after{content:"";position:absolute;display:none;left:9px;top:0;width:10px;height:24px;border:solid #4d4d4d;border-width:0 4px 4px 0;transform:rotate(45deg)}form .custom-checkbox input:checked~.checkmark:after{display:block}form .custom-dropdown{border-radius:0;height:48px;overflow:hidden;width:100%;display:inline-block;margin-right:32px;font-family:proxima-nova,"Montserrat",sans-serif;background:url(/baseline-arrow_drop_down.svg) #f6f6f6 no-repeat 100%}form .custom-dropdown select{background:transparent;border:none;font-size:16px;font-weight:400;line-height:2;height:48px;padding:5px 16px;width:100%;-webkit-appearance:none;-moz-appearance:none;appearance:none;color:#999;border-radius:0}form .custom-dropdown select.is-danger,form .custom-dropdown select:focus{border:2px solid #1a1a1a}form .custom-dropdown select:valid{border-bottom:2px solid #1a1a1a}form .required-field-msg{font-size:1.4rem;font-family:proxima-nova,"Montserrat",sans-serif;line-height:1.14;color:#d20a0a;margin-top:8px;margin-bottom:8px}.get-membership .column{background:#fff}.get-membership .column p{margin-top:40px}.get-membership .payment-form{transition:all .5s ease}.get-membership .review-payment{width:100%;background:#fff;transform:translateX(100%);transition:all .5s ease}.get-membership .review-payment h3{margin-bottom:16px}.get-membership .review-payment h3:not(:first-child){margin-top:32px}.get-membership .review-payment h5{text-transform:none;font-weight:400}.get-membership .review-payment--row{display:flex;justify-content:space-between;align-items:flex-end;margin:32px 0}.get-membership .review-payment--row span{font-size:1.8rem}.get-membership .review-payment.in-review{transform:translateX(0)}.get-membership .review-payment .button-text{width:100%;margin:16px 0}@media (min-width:414px){.get-membership .review-payment--row{margin:0 0 16px}}@media (max-width:414px){.get-membership .section-intro{text-align:left}}.membership-card{border-left:2px solid #e9e9e9;border-right:2px solid #e9e9e9;border-bottom:2px solid #e9e9e9;margin-bottom:32px}.membership-card .payment-details{font-size:1.6rem;line-height:1.38;padding:24px 0;margin:24px 0;border-top:2px solid #e9e9e9;border-bottom:2px solid #e9e9e9}.membership-card .payment-details--row{display:flex;justify-content:space-between;margin-bottom:10px}.membership-card .payment-total{text-transform:none;display:flex;justify-content:space-between}#loading-spinner{display:inline-block;width:35px;height:35px;border-radius:50%;border:3px solid hsla(0,0%,100%,.3);border-top-color:#000;animation:spin 1s ease-in-out infinite;-webkit-animation:spin 1s ease-in-out infinite}@keyframes spin{to{-webkit-transform:rotate(1turn)}}@-webkit-keyframes spin{to{-webkit-transform:rotate(1turn)}}',""]),e.exports=o},789:function(e,r,t){"use strict";t.r(r);t(10),t(49),t(50),t(30),t(33),t(15),t(20);var o,n=t(2),d=(t(18),t(293)),l=t(63),c={components:{LocationSection:d.a,Button:l.a},head:function(){return{meta:[{name:"robots",content:"noindex"}]}},data:function(){return{months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"],currentYear:(new Date).getFullYear(),loading:!1,purchaseError:!1,firstname:"",lastname:"",email:"",address1:"",address2:"",city:"",state:"",zipcode:"",phone:"",address1card:"",address2card:"",citycard:"",statecard:"",zipcodecard:"",namecard:"",cardnumber:"",codecard:"",cardmonth:"",cardyear:"",billingaddresscheck:!0,inReview:!1,isSubmitted:!1,termsChecked:!1,consentChecked:!1}},computed:{selectedPackage:function(){var e=this.$store.state.packages;if(e&&e.selected)return e.selected},taxes:function(){if(this.selectedPackage)return this.selectedPackage.items.reduce((function(e,r){return e+r.taxAmount}),0)},color:function(){if(this.selectedPackage)return{Fitness:"black",Ultimate:"gold",Champion:"red"}[this.selectedPackage.packageName]}},beforeMount:function(){var e=this.$store.state,r=e.packages,t=e.location;r&&r.selected||(t?this.$router.push("/locations/".concat(t.code,"/join/")):this.$router.push("/locations/"))},methods:{formatNumber:function(e){return e.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})},checkAddress:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.billingaddresscheck?(this.address1card=this.address1,this.address2card=this.address2,this.citycard=this.city,this.statecard=this.state,this.zipcodecard=this.zipcode):e&&(this.address1card="",this.address2card="",this.citycard="",this.statecard="",this.zipcodecard="")},clickPay:(o=Object(n.a)(regeneratorRuntime.mark((function e(){var r,t,o,n,d,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.purchaseError=!1,this.loading=!0,r=this.selectedPackage,t=r.storeId,o=r.packageId,n=r.installmentId,d=r.totalDueToday,l={StoreId:t,PackageId:o,InstallmentId:n,PaymentAmount:d,FirstName:this.firstname,LastName:this.lastname,Address1:this.address1,Address2:this.address2,City:this.city,State:this.state,PostalCode:this.zipcode,Email:this.email,PhoneNumber:this.phone,BillingName:this.namecard,BillingAddress1:this.address1card,BillingAddress2:this.address2card,BillingCity:this.citycard,BillingState:this.statecard,BillingPostalCode:this.zipcodecard,AccountNumber:this.cardnumber,CcExpMonth:this.cardmonth,CcExpYear:parseInt(this.cardyear.toString().substr(2,2)),CcCode:this.codecard,recaptcha:{token:"fakekey",action:"membership"}},e.next=8,this.$store.dispatch("PURCHASE_GYM_PACKAGE",l);case 8:!0===e.sent?(this.isSubmitted=!0,this.$store.commit("SET_ENROLLMENT",!0),this.$router.push({path:"/locations/"+this.$store.state.location.code+"/schedule?type=joined"})):this.purchaseError="Purchase failed!",this.loading=!1;case 11:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)}),onSubmit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.checkAddress(!1),r.next=3,e.$validator.validateAll();case 3:if(r.sent){r.next=6;break}return r.abrupt("return");case 6:e.inReview=!0;case 7:case"end":return r.stop()}}),r)})))()}}},m=c,v=(t(514),t(3)),component=Object(v.a)(m,(function(){var e=this,r=e._self._c;return r("div",{staticClass:"get-membership form-page-padding"},[e.selectedPackage?r("LocationSection"):e._e(),e._v(" "),r("div",{staticClass:"fixed-width-content padding-top-56"},[r("div",{staticClass:"section-intro"},[e.inReview?r("h3",{staticClass:"text-initial"},[e._v("Review your order")]):r("h3",{staticClass:"text-initial"},[e._v("Complete your order")]),e._v(" "),r("p",[e._v("Fill out the details below to finish your order and receive your membership.")])]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-xl-4 col-lg-5 offset-lg-1 offset-xl-2 col-md-6 order-2 order-sm-1 column"},[r("form",{staticClass:"payment-form",class:{"d-none":e.inReview},on:{submit:function(r){return r.preventDefault(),e.onSubmit.apply(null,arguments)}}},[r("h3",{staticClass:"text-initial text-light"},[e._v("Your Information")]),e._v(" "),r("div",{staticClass:"form-field"},[r("label",{attrs:{for:"firstname"}},[e._v("First Name")]),e._v(" "),r("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha",expression:"'required|alpha'"},{name:"model",rawName:"v-model",value:e.firstname,expression:"firstname"}],class:{"is-danger":e.errors.has("firstname")},attrs:{type:"text",name:"firstname",placeholder:"​",id:"firstname"},domProps:{value:e.firstname},on:{input:function(r){r.target.composing||(e.firstname=r.target.value)}}}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("firstname"),expression:"errors.has('firstname')"}],staticClass:"required-field-msg",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("firstname")))])]),e._v(" "),r("div",{staticClass:"form-field"},[r("label",{attrs:{for:"lastname"}},[e._v("Last Name")]),e._v(" "),r("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.lastname,expression:"lastname"}],class:{"is-danger":e.errors.has("lastname")},attrs:{type:"text",name:"lastname",placeholder:"​",id:"lastname"},domProps:{value:e.lastname},on:{input:function(r){r.target.composing||(e.lastname=r.target.value)}}}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("lastname"),expression:"errors.has('lastname')"}],staticClass:"required-field-msg",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("lastname")))])]),e._v(" "),r("div",{staticClass:"form-field"},[r("label",{attrs:{for:"address1"}},[e._v("Address Line 1")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.address1,expression:"address1"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-danger":e.errors.has("address1")},attrs:{type:"text",name:"address1",placeholder:"​",id:"address1"},domProps:{value:e.address1},on:{input:function(r){r.target.composing||(e.address1=r.target.value)}}}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("address1"),expression:"errors.has('address1')"}],staticClass:"required-field-msg",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("address1")))])]),e._v(" "),r("div",{staticClass:"form-field"},[r("label",{attrs:{for:"address2"}},[e._v("Address Line 2")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.address2,expression:"address2"}],attrs:{type:"text",name:"address2",placeholder:"​",id:"address2"},domProps:{value:e.address2},on:{input:function(r){r.target.composing||(e.address2=r.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-field"},[r("label",{attrs:{for:"city"}},[e._v("City")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.city,expression:"city"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-danger":e.errors.has("city")},attrs:{type:"text",name:"city",placeholder:"​",id:"city"},domProps:{value:e.city},on:{input:function(r){r.target.composing||(e.city=r.target.value)}}}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("city"),expression:"errors.has('city')"}],staticClass:"required-field-msg",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("city")))])]),e._v(" "),r("div",{staticClass:"form-field-half form-field-half--left"},[r("label",{attrs:{for:"state"}},[e._v("State/Province")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.state,expression:"state"},{name:"validate",rawName:"v-validate",value:"required|alpha|length:2",expression:"'required|alpha|length:2'"}],class:{"is-danger":e.errors.has("state")},attrs:{type:"text",name:"state",placeholder:"​",id:"state"},domProps:{value:e.state},on:{input:function(r){r.target.composing||(e.state=r.target.value)}}}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("state"),expression:"errors.has('state')"}],staticClass:"required-field-msg",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("state")))])]),e._v(" "),r("div",{staticClass:"form-field-half form-field-half--right"},[r("label",{attrs:{for:"zipcode"}},[e._v("Zip Code")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.zipcode,expression:"zipcode"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-danger":e.errors.has("zipcode")},attrs:{type:"text",name:"zipcode",placeholder:"​",id:"zipcode"},domProps:{value:e.zipcode},on:{input:function(r){r.target.composing||(e.zipcode=r.target.value)}}}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("zipcode"),expression:"errors.has('zipcode')"}],staticClass:"required-field-msg",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("zipcode")))])]),e._v(" "),r("div",{staticClass:"form-field"},[r("label",{attrs:{for:"email"}},[e._v("Email Address")]),e._v(" "),r("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"},{name:"model",rawName:"v-model",value:e.email,expression:"email"}],class:{"is-danger":e.errors.has("email")},attrs:{type:"email",name:"email",placeholder:"​",id:"email"},domProps:{value:e.email},on:{input:function(r){r.target.composing||(e.email=r.target.value)}}}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("email"),expression:"errors.has('email')"}],staticClass:"required-field-msg",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("email")))])]),e._v(" "),r("div",{staticClass:"form-field"},[r("label",{attrs:{for:"phone"}},[e._v("Phone Number")]),e._v(" "),r("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|numeric",expression:"'required|numeric'"},{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],class:{"is-danger":e.errors.has("phone")},attrs:{type:"tel",name:"phone",placeholder:"​",id:"phone"},domProps:{value:e.phone},on:{input:function(r){r.target.composing||(e.phone=r.target.value)}}}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("phone"),expression:"errors.has('phone')"}],staticClass:"required-field-msg",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("phone")))])]),e._v(" "),r("h3",{staticClass:"text-initial text-light"},[e._v("Billing Information")]),e._v(" "),r("label",{staticClass:"custom-checkbox",attrs:{role:"checkbox","aria-checked":e.billingaddresscheck.toString(),"aria-labelledby":"checkbillingaddress",tabindex:"0"}},[e._v("\n            Billing address is same as personal\n            "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.billingaddresscheck,expression:"billingaddresscheck"}],attrs:{type:"checkbox",name:"billingaddresscheck",id:"billingaddresscheck","aria-labelledby":"checkbillingaddress"},domProps:{checked:Array.isArray(e.billingaddresscheck)?e._i(e.billingaddresscheck,null)>-1:e.billingaddresscheck},on:{change:[function(r){var t=e.billingaddresscheck,o=r.target,n=!!o.checked;if(Array.isArray(t)){var d=e._i(t,null);o.checked?d<0&&(e.billingaddresscheck=t.concat([null])):d>-1&&(e.billingaddresscheck=t.slice(0,d).concat(t.slice(d+1)))}else e.billingaddresscheck=n},e.checkAddress]}}),e._v(" "),r("span",{staticClass:"checkmark",on:{click:function(r){e.billingaddresscheck=!e.billingaddresscheck}}})]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.billingaddresscheck,expression:"!billingaddresscheck"}]},[r("div",{staticClass:"form-field"},[r("label",{attrs:{for:"address1card"}},[e._v("Address Line 1")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.address1card,expression:"address1card"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-danger":e.errors.has("address1card")},attrs:{type:"text",name:"address1card",placeholder:"​",id:"address1card"},domProps:{value:e.address1card},on:{input:function(r){r.target.composing||(e.address1card=r.target.value)}}}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("address1card"),expression:"errors.has('address1card')"}],staticClass:"required-field-msg",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("address1card")))])]),e._v(" "),r("div",{staticClass:"form-field"},[r("label",{attrs:{for:"address2card"}},[e._v("Address Line 2")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.address2card,expression:"address2card"}],attrs:{type:"text",name:"address2card",placeholder:"​",id:"address2card"},domProps:{value:e.address2card},on:{input:function(r){r.target.composing||(e.address2card=r.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-field"},[r("label",{attrs:{for:"citycard"}},[e._v("City")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.citycard,expression:"citycard"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-danger":e.errors.has("citycard")},attrs:{type:"text",name:"citycard",placeholder:"​",id:"citycard"},domProps:{value:e.citycard},on:{input:function(r){r.target.composing||(e.citycard=r.target.value)}}}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("citycard"),expression:"errors.has('citycard')"}],staticClass:"required-field-msg",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("citycard")))])])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.billingaddresscheck,expression:"!billingaddresscheck"}],staticClass:"form-field-half form-field-half--left"},[r("label",{attrs:{for:"state"}},[e._v("State/Province")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.statecard,expression:"statecard"},{name:"validate",rawName:"v-validate",value:"required|alpha|length:2",expression:"'required|alpha|length:2'"}],class:{"is-danger":e.errors.has("statecard")},attrs:{type:"text",name:"statecard",placeholder:"​",id:"statecard"},domProps:{value:e.statecard},on:{input:function(r){r.target.composing||(e.statecard=r.target.value)}}}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("statecard"),expression:"errors.has('statecard')"}],staticClass:"required-field-msg",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("statecard")))])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.billingaddresscheck,expression:"!billingaddresscheck"}],staticClass:"form-field-half form-field-half--right"},[r("label",{attrs:{for:"zipcode"}},[e._v("Zip Code")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.zipcodecard,expression:"zipcodecard"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-danger":e.errors.has("zipcodecard")},attrs:{type:"text",name:"zipcodecard",placeholder:"​",id:"zipcodecard"},domProps:{value:e.zipcodecard},on:{input:function(r){r.target.composing||(e.zipcodecard=r.target.value)}}}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("zipcodecard"),expression:"errors.has('zipcodecard')"}],staticClass:"required-field-msg",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("zipcodecard")))])]),e._v(" "),r("div",{staticClass:"form-field"},[r("label",{attrs:{for:"namecard"}},[e._v("Name on Card")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.namecard,expression:"namecard"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-danger":e.errors.has("namecard")},attrs:{type:"text",name:"namecard",placeholder:"​",id:"namecard"},domProps:{value:e.namecard},on:{input:function(r){r.target.composing||(e.namecard=r.target.value)}}}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("namecard"),expression:"errors.has('namecard')"}],staticClass:"required-field-msg",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("namecard")))])]),e._v(" "),r("div",{staticClass:"form-field"},[r("label",{attrs:{for:"cardnumber"}},[e._v("Credit/Debit Card Number")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.cardnumber,expression:"cardnumber"},{name:"validate",rawName:"v-validate",value:"required|credit_card",expression:"'required|credit_card'"}],class:{"is-danger":e.errors.has("cardnumber")},attrs:{type:"text",name:"cardnumber",placeholder:"​",id:"cardnumber"},domProps:{value:e.cardnumber},on:{input:function(r){r.target.composing||(e.cardnumber=r.target.value)}}}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("cardnumber"),expression:"errors.has('cardnumber')"}],staticClass:"required-field-msg",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("cardnumber")))])]),e._v(" "),r("div",{staticClass:"form-field-half form-field-half--left"},[r("label",{attrs:{for:"cardmonth"}},[e._v("Expiration Date")]),e._v(" "),r("div",{staticClass:"custom-dropdown"},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.cardmonth,expression:"cardmonth"},{name:"validate",rawName:"v-validate",value:"required|numeric",expression:"'required|numeric'"}],class:{"is-danger":e.errors.has("cardmonth")},attrs:{name:"cardmonth",id:"cardmonth"},on:{change:function(r){var t=Array.prototype.filter.call(r.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.cardmonth=r.target.multiple?t:t[0]}}},[r("option",{attrs:{disabled:"",selected:"",value:""}},[e._v("Select Month")]),e._v(" "),e._l(e.months,(function(t,o){return r("option",{key:o,domProps:{value:o+1}},[e._v(e._s(t))])}))],2)]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("cardmonth"),expression:"errors.has('cardmonth')"}],staticClass:"required-field-msg",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("cardmonth")))])]),e._v(" "),r("div",{staticClass:"form-field-half form-field-half--right"},[r("label",{attrs:{for:"cardyear"}}),e._v(" "),r("div",{staticClass:"custom-dropdown"},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.cardyear,expression:"cardyear"},{name:"validate",rawName:"v-validate",value:"required|numeric",expression:"'required|numeric'"}],class:{"is-danger":e.errors.has("cardyear")},attrs:{name:"cardyear",id:"cardyear"},on:{change:function(r){var t=Array.prototype.filter.call(r.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.cardyear=r.target.multiple?t:t[0]}}},[r("option",{attrs:{disabled:"",selected:"",value:""}},[e._v("Select Year")]),e._v(" "),e._l(10,(function(t){return r("option",{key:t,domProps:{value:e.currentYear+t}},[e._v(e._s(e.currentYear+t))])}))],2)]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("cardyear"),expression:"errors.has('cardyear')"}],staticClass:"required-field-msg",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("cardyear")))])]),e._v(" "),r("div",{staticClass:"form-field-half form-field-half--left"},[r("label",{attrs:{for:"codecard"}},[e._v("Security Code")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.codecard,expression:"codecard"},{name:"validate",rawName:"v-validate",value:"required|min:3|max:4",expression:"'required|min:3|max:4'"}],class:{"is-danger":e.errors.has("codecard")},attrs:{type:"text",name:"codecard",placeholder:"​",id:"codecard"},domProps:{value:e.codecard},on:{input:function(r){r.target.composing||(e.codecard=r.target.value)}}}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("codecard"),expression:"errors.has('codecard')"}],staticClass:"required-field-msg",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("codecard")))])]),e._v(" "),r("label",{staticClass:"custom-checkbox",attrs:{role:"checkbox","aria-checked":e.termsChecked.toString(),"aria-labelledby":"terms",tabindex:"0"}},[e._v("Agree to "),r("a",{staticClass:"underline-text",attrs:{href:"https://fakekey.cloudfront.net/production/assets/122/terms_and_conditions_doc/CA-_RECURRING_MEMBERSHIP_AGREEMENT_-_CLEAN.pdf",target:"_blank"}},[e._v("Terms and Conditions")]),e._v(" "),r("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{type:"checkbox",name:"terms",id:"terms","aria-labelledby":"terms"}}),e._v(" "),r("span",{staticClass:"checkmark",on:{click:function(r){e.termsChecked=!e.termsChecked}}})]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("terms"),expression:"errors.has('terms')"}],staticClass:"required-field-msg",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("terms")))]),e._v(" "),r("label",{staticClass:"custom-checkbox",attrs:{role:"checkbox","aria-checked":e.consentChecked.toString(),"aria-labelledby":"consent",tabindex:"0"}},[e._v("Agree to "),r("a",{staticClass:"underline-text",attrs:{href:"/UFC_Gym_Consent_and_Release.pdf",target:"_blank"}},[e._v("Member Consent and Release")]),e._v(" "),r("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{type:"checkbox",name:"consent",id:"consent","aria-labelledby":"consent"}}),e._v(" "),r("span",{staticClass:"checkmark",on:{click:function(r){e.consentChecked=!e.consentChecked}}})]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("consent"),expression:"errors.has('consent')"}],staticClass:"required-field-msg",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("consent")))]),e._v(" "),r("button",{staticClass:"button-text button-secondary button-lg-text",attrs:{type:"submit"},on:{click:function(r){e.purchaseError=!1}}},[r("span",[e._v("Review Payment")])])]),e._v(" "),r("div",{staticClass:"review-payment",class:{"in-review":e.inReview,"d-none":!e.inReview}},[r("h3",{staticClass:"text-initial text-light"},[e._v("Your Information")]),e._v(" "),r("div",{staticClass:"review-payment--row"},[r("h5",[e._v("First Name")]),e._v(" "),r("span",[e._v(e._s(e.firstname))])]),e._v(" "),r("div",{staticClass:"review-payment--row"},[r("h5",[e._v("Last Name")]),e._v(" "),r("span",[e._v(e._s(e.lastname))])]),e._v(" "),r("div",{staticClass:"review-payment--row"},[r("h5",[e._v("Address Line 1")]),e._v(" "),r("span",[e._v(e._s(e.address1))])]),e._v(" "),r("div",{staticClass:"review-payment--row"},[r("h5",[e._v("Address Line 2")]),e._v(" "),r("span",[e._v(e._s(e.address2))])]),e._v(" "),r("div",{staticClass:"review-payment--row"},[r("h5",[e._v("City")]),e._v(" "),r("span",[e._v(e._s(e.city))])]),e._v(" "),r("div",{staticClass:"review-payment--row"},[r("h5",[e._v("State/Province")]),e._v(" "),r("span",[e._v(e._s(e.state))])]),e._v(" "),r("div",{staticClass:"review-payment--row"},[r("h5",[e._v("Zip Code")]),e._v(" "),r("span",[e._v(e._s(e.zipcode))])]),e._v(" "),r("div",{staticClass:"review-payment--row"},[r("h5",[e._v("Phone Number")]),e._v(" "),r("span",[e._v(e._s(e.phone))])]),e._v(" "),r("h3",{staticClass:"text-initial text-light"},[e._v("Billing Information")]),e._v(" "),r("div",{staticClass:"review-payment--row"},[r("h5",[e._v("Address Line 1")]),e._v(" "),r("span",[e._v(e._s(e.address1card))])]),e._v(" "),r("div",{staticClass:"review-payment--row"},[r("h5",[e._v("Address Line 2")]),e._v(" "),r("span",[e._v(e._s(e.address2card))])]),e._v(" "),r("div",{staticClass:"review-payment--row"},[r("h5",[e._v("City")]),e._v(" "),r("span",[e._v(e._s(e.citycard))])]),e._v(" "),r("div",{staticClass:"review-payment--row"},[r("h5",[e._v("State/Province")]),e._v(" "),r("span",[e._v(e._s(e.statecard))])]),e._v(" "),r("div",{staticClass:"review-payment--row"},[r("h5",[e._v("Zip Code")]),e._v(" "),r("span",[e._v(e._s(e.zipcodecard))])]),e._v(" "),r("div",{staticClass:"review-payment--row"},[r("h5",[e._v("Name on Card")]),e._v(" "),r("span",[e._v(e._s(e.namecard))])]),e._v(" "),r("div",{staticClass:"review-payment--row"},[r("h5",[e._v("Card Number")]),e._v(" "),r("span",[e._v(e._s(e.cardnumber))])]),e._v(" "),r("div",{staticClass:"review-payment--row"},[r("h5",[e._v("Security Code")]),e._v(" "),r("span",[e._v(e._s(e.codecard))])]),e._v(" "),r("div",{staticClass:"review-payment--row"},[r("h5",[e._v("Expiration Date")]),e._v(" "),r("span",[e._v(e._s(e.cardmonth)+"/"+e._s(e.cardyear))])]),e._v(" "),r("Button",{attrs:{"button-label":"Pay now","button-link-url":"#",isDisabled:e.loading},nativeOn:{click:function(r){return e.clickPay.apply(null,arguments)}}}),e._v(" "),r("Button",{attrs:{"button-label":"Cancel","button-link-url":"#","button-colors":"button-secondary",isDisabled:e.loading},nativeOn:{click:function(r){e.inReview=!e.inReview}}}),e._v(" "),r("br"),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.purchaseError,expression:"purchaseError"}],staticStyle:{color:"red"}},[e._v("\n            "+e._s(e.purchaseError)+"\n          ")]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}]},[r("span",{attrs:{id:"loading-spinner"}}),e._v("      Please wait... \n          ")])],1),e._v(" "),e.selectedPackage?r("p",[e._v("\n          Annual enhancement fee of "+e._s(e._f("asMoney")(e.selectedPackage.enhancementFee))+" for facility updates will be billed in the second month of your membership.\n        ")]):e._e(),e._v(" "),r("p",[e._v("You won't be charged until you select purchase on the next screen.")])]),e._v(" "),r("no-ssr",[e.selectedPackage?r("div",{staticClass:"col-xl-4 col-lg-5 col-md-6 order-1 order-sm-2 column"},[r("div",{staticClass:"membership-card cta-border-top",class:"border-color-"+e.color},[r("h3",{staticClass:"center-align"},[e._v(e._s(e.selectedPackage.packageName))]),e._v(" "),r("h4",{staticClass:"text-initial"},[e._v("Amount Due")]),e._v(" "),r("div",{staticClass:"payment-details"},[e._l(e.selectedPackage.items,(function(t,o){return r("div",{key:"payment-item-".concat(o),staticClass:"payment-details--row"},[r("span",[e._v(e._s(t.name))]),e._v(" "),r("span",[r("b",[e._v("\n                  "+e._s(e._f("asMoney")(t.amount))+"\n                  ")])])])})),e._v(" "),e.taxes?r("div",{staticClass:"payment-details--row"},[r("span",[e._v("Taxes")]),e._v(" "),r("span",[r("b",[e._v("\n                  "+e._s(e._f("asMoney")(e.taxes))+"\n                  ")])])]):e._e()],2),e._v(" "),r("div",{staticClass:"payment-total"},[r("h5",{staticClass:"text-initial"},[e._v("Total Due Today")]),e._v(" "),r("h5",{staticClass:"text-initial"},[e._v("\n                "+e._s(e._f("asMoney")(e.selectedPackage.totalDueToday))+"\n              ")])])])]):e._e()])],1)])],1)}),[],!1,null,null,null);r.default=component.exports}}]);