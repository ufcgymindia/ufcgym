(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{306:function(t,e,o){var content=o(317);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("258b4232",content,!0,{sourceMap:!1})},310:function(t,e,o){var content=o(331);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("60621d07",content,!0,{sourceMap:!1})},312:function(t,e,o){var content=o(337);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("55760c0f",content,!0,{sourceMap:!1})},313:function(t,e,o){var content=o(339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("bc5e1bba",content,!0,{sourceMap:!1})},316:function(t,e,o){"use strict";o(306)},317:function(t,e,o){var n=o(7)(!1);n.push([t.i,".blog-row{background-color:#f6f6f6}.blog-row--wrapper{max-width:1280px;margin:0 auto;padding-left:16px;padding-right:16px}.blog-row--header{margin-bottom:32px}.blog-row--header h6{margin-right:17px}.blog-row--header .button-with-icon{background:transparent;border-color:transparent}@media screen and (max-width:768px) and (min-width:414px){.blog-row .blog-single:nth-child(2n){padding-right:0}}",""]),t.exports=n},318:function(t,e,o){"use strict";var n=o(6),r=o(36),c=o(37),l=o(171),d=o(83),m=o(16),h=o(64).f,f=o(65).f,x=o(17).f,v=o(319).trim,y="Number",w=n.Number,_=w,C=w.prototype,k=c(o(112)(C))==y,S="trim"in String.prototype,I=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var o,n,r,c=(e=S?e.trim():v(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(o=e.charCodeAt(2))||120===o)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+e}for(var code,l=e.slice(2),i=0,m=l.length;i<m;i++)if((code=l.charCodeAt(i))<48||code>r)return NaN;return parseInt(l,n)}}return+e};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(t){var e=arguments.length<1?0:t,o=this;return o instanceof w&&(k?m((function(){C.valueOf.call(o)})):c(o)!=y)?l(new _(I(e)),o,w):I(e)};for(var M,T=o(13)?h(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;T.length>N;N++)r(_,M=T[N])&&!r(w,M)&&x(w,M,f(_,M));w.prototype=C,C.constructor=w,o(22)(n,y,w)}},319:function(t,e,o){var n=o(5),r=o(44),c=o(16),l=o(320),d="["+l+"]",m=RegExp("^"+d+d+"*"),h=RegExp(d+d+"*$"),f=function(t,e,o){var r={},d=c((function(){return!!l[t]()||"​"!="​"[t]()})),m=r[t]=d?e(x):l[t];o&&(r[o]=m),n(n.P+n.F*d,"String",r)},x=f.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(m,"")),2&e&&(t=t.replace(h,"")),t};t.exports=f},320:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},322:function(t,e,o){"use strict";var n={components:{Button:o(63).a},props:{ctaTitle:{type:String,default:""},ctaLink:{type:String},ctaButtonText:{type:String},ctaButtonType:{type:String,default:"button-with-icon"},ctaButtonSize:{type:String,default:"button-sm-text"},borderColor:{type:String,default:"red"},responsiveCard:{type:Boolean,default:!1},isExternalLink:{type:Boolean,default:!1}},data:function(){return{expandedCard:!1,cardIcon:"add"}},methods:{expandCard:function(){this.expandedCard=!this.expandedCard,this.expandedCard?this.cardIcon="remove":this.cardIcon="add"}}},r=(o(361),o(3)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"cta-border-top",class:"border-color-"+t.borderColor,attrs:{tabindex:"0"}},[e("div",t._g({staticClass:"cta-border-top--header"},t.responsiveCard&&t.$device.isMobile?{click:t.expandCard}:{}),[e("h3",{staticClass:"text-initial"},[t._v("\n      "+t._s(t.ctaTitle)+"\n      "),e("span",{staticClass:"title-slot"},[t._t("titleSlot"),t.responsiveCard&&t.$device.isMobile?e("span",{staticClass:"material-icons"},[t._v(t._s(t.cardIcon))]):t._e()],2)])]),t._v(" "),e("div",{staticClass:"cta-border-top--content",class:{animatedIn:t.responsiveCard&&t.expandedCard&&t.$device.isMobile,"is-collapsed":t.responsiveCard&&!t.expandedCard&&t.$device.isMobile}},[t._t("default"),t._v(" "),t.ctaLink?e("Button",{attrs:{buttonLinkUrl:t.ctaLink,buttonLabel:t.ctaButtonText,buttonColors:t.ctaButtonType,buttonSizing:t.ctaButtonSize,"icon-path":"button-with-icon"===t.ctaButtonType?"/arrow-right-349.svg":"","is-external":t.isExternalLink}}):t._e()],2)])}),[],!1,null,null,null);e.a=component.exports},323:function(t,e,o){"use strict";o(304),o(30),o(15);var n=o(291),r=o(63),c=o(332),l={components:{Button:r.a,BlogCard:n.a},computed:{featured:function(){var t=this;return c.filter((function(a){return a.link!==t.$route.path})).slice(0,3)}}},d=(o(316),o(3)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"vpanim",rawName:"v-vpanim"}],staticClass:"blog-row padding-top-bottom-72"},[e("div",{staticClass:"row blog-row--wrapper"},[e("div",{staticClass:"blog-row--header col-12 d-flex align-items-center"},[e("h6",[t._v("UFC Gym News")]),t._v(" "),e("Button",{attrs:{"button-label":"View All","button-link-url":"/news",buttonColors:"button-with-icon",buttonSizing:"button-sm-text","icon-path":"/arrow-right-349.svg","has-icon":""}})],1),t._v(" "),t._l(t.featured,(function(article,t){return e("div",{directives:[{name:"vpanim",rawName:"v-vpanim",value:{delay:.3},expression:"{ delay: 0.3 }"}],key:"featured-".concat(t),staticClass:"blog-single",class:{"d-flex col-lg-4 col-md-6":3!==t,"d-flex d-lg-none col-md-6":3===t}},[e("blog-card",{attrs:{"card-title":article.title,"card-featured-image":article.banner,"card-link":article.link,"button-label":"Read More","image-ratio":"ratio-16-9"}})],1)}))],2)])}),[],!1,null,null,null);e.a=component.exports},329:function(t,e,o){var content=o(362);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("941876b6",content,!0,{sourceMap:!1})},330:function(t,e,o){"use strict";o(310)},331:function(t,e,o){var n=o(7)(!1);n.push([t.i,".coach-card{background:#f6f6f6;max-width:344px;margin-bottom:-20%}.coach-card--content{background-color:#fff;padding:24px;transform:translate(32px,-50%)}.coach-card--content h4{text-transform:capitalize;font-size:32px;line-height:1.13}.coach-card--content h6{font-size:14px;letter-spacing:2px;line-height:1.14;margin-top:16px}.coach-card--content p{margin:16px 0 0;font-size:16px;line-height:1.38}@media (min-width:768px){.coach-card{max-width:288px}.coach-card--content{transform:translate(56px,-50%)}}@media (min-width:1024px){.coach-card{max-width:336px}.coach-card--content{transform:translate(48px,-50%)}}@media (min-width:1280px){.coach-card{max-width:384px}.coach-card--content{padding:40px 32px;transform:translate(104px,-50%)}}",""]),t.exports=n},336:function(t,e,o){"use strict";o(312)},337:function(t,e,o){var n=o(7)(!1);n.push([t.i,".modal-mask{position:fixed;z-index:9998;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);display:table;transition:opacity .3s ease}.modal-wrapper{display:table-cell;vertical-align:middle}.modal-container{height:auto;max-width:70vw;width:-webkit-max-content;width:-moz-max-content;width:max-content;margin:0 auto;display:flex;flex-direction:row;align-items:center;justify-content:center;transition:all .3s ease}.close-button-container{align-self:flex-end;margin-bottom:27px}.close-button{padding:11px 14px!important;cursor:pointer;background:#fff}@media (max-width:550px){.close-button{padding:8px!important}}.modal-main-content{display:flex;flex-direction:column;align-items:center;justify-content:center}.modal-body{width:auto;max-width:70vw;max-height:80vh;background:#fff;margin:0;padding:32px}@media (max-width:550px){.modal-body{padding:16px;max-width:85vw}}.main-img{width:auto;max-width:60vw;max-height:70vh}@media (max-width:550px){.main-img{max-width:75vw}}.modal-nav{height:72px;width:72px;margin:0 32px;background:#fff;border-radius:100%;cursor:pointer}@media (max-width:550px){.modal-nav{display:none}}.mobile-nav-buttons{display:flex;flex-direction:row;margin:10px}@media (min-width:550px){.mobile-nav-buttons{display:none}}.mobile-nav{height:50px;width:50px;margin:0 32px;background:#fff;border-radius:100%;cursor:pointer}.nav-icon{margin:24px}@media (max-width:550px){.nav-icon{margin:13px!important}}.image-update-enter-active{transition:opacity .5s;opacity:0}.image-update-enter-to{opacity:1}.image-update-leave-to{opacity:0;height:0}",""]),t.exports=n},338:function(t,e,o){"use strict";o(313)},339:function(t,e,o){var n=o(7)(!1);n.push([t.i,".photo-gallery{padding-bottom:68px}.photo-gallery .gallery-title{text-align:center;font-weight:500;margin-bottom:48px}.photo-gallery .small-photo-gallery{margin-top:32px}@media (min-width:768px){.photo-gallery .large-photo-gallery{margin-right:32px}}@media (max-width:414px){.photo-gallery--right [class*=col-]{padding-left:0;padding-right:0}.photo-gallery--right .col-6{margin-top:32px}.photo-gallery--right .col-6.square-1-gallery-photo{padding-right:16px}.photo-gallery--right .col-6.square-2-gallery-photo{padding-left:16px}}",""]),t.exports=n},344:function(t,e,o){"use strict";o(318);var n=o(63),r={props:{currentPhoto:{type:String,required:!0,default:""},currentID:{type:Number,required:!0,default:0}},components:{Button:n.a}},c=(o(336),o(3)),l=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-mask"},[e("div",{staticClass:"modal-wrapper"},[e("div",{staticClass:"modal-container"},[e("div",{staticClass:"modal-nav",on:{click:function(e){return t.$emit("navPrev")}}},[e("i",{staticClass:"material-icons nav-icon"},[t._v("arrow_back")])]),t._v(" "),e("div",{staticClass:"modal-main-content"},[e("div",{staticClass:"close-button-container",on:{click:function(e){return t.$emit("closeModal")}}},[e("Button",{staticClass:"close-button",attrs:{buttonLabel:"CLOSE",buttonColors:"button-with-icon",buttonSizing:"button-sm-text","icon-path":"/baseline-close-24px.svg","has-icon":"","icon-on-left":"","aria-label":"Close"}})],1),t._v(" "),e("div",{staticClass:"modal-body"},[e("transition",{attrs:{name:"image-update"}},[e("img",{key:t.currentID,staticClass:"main-img",attrs:{src:t.currentPhoto}})])],1),t._v(" "),e("div",{staticClass:"mobile-nav-buttons",attrs:{"aria-label":"Previous"}},[e("div",{staticClass:"mobile-nav",on:{click:function(e){return t.$emit("navPrev")}}},[e("i",{staticClass:"material-icons nav-icon"},[t._v("arrow_back")])]),t._v(" "),e("div",{staticClass:"mobile-nav",attrs:{"aria-label":"Next"},on:{click:function(e){return t.$emit("navNext")}}},[e("i",{staticClass:"material-icons nav-icon"},[t._v("arrow_forward")])])])]),t._v(" "),e("div",{staticClass:"modal-nav",attrs:{"aria-label":"Next"},on:{click:function(e){return t.$emit("navNext")}}},[e("i",{staticClass:"material-icons nav-icon"},[t._v("arrow_forward")])])])])])}),[],!1,null,null,null).exports,d={props:{galleryTitle:{type:String,required:!0,default:""},photos:{type:Array,required:!0,default:[]}},data:function(){return{showModal:!1,currentId:0}},methods:{openModal:function(t){this.currentId=t,this.showModal=!0},handleCloseModal:function(){this.showModal=!1},previousPhoto:function(){this.currentId>0?this.currentId--:this.currentId=this.photos.length-1},nextPhoto:function(){this.currentId<this.photos.length-1?this.currentId++:this.currentId=0}},components:{Modal:l}},m=(o(338),Object(c.a)(d,(function(){var t,e,o,n,r,c=this,l=c._self._c;return l("div",{staticClass:"photo-gallery"},[l("h3",{staticClass:"gallery-title text-initial"},[c._v(c._s(c.galleryTitle))]),c._v(" "),l("div",{staticClass:"row no-gutters"},[l("div",{staticClass:"col-md-6 gallery-photos d-flex",on:{click:function(t){return c.openModal(0)}}},[l("div",{staticClass:"image-ratio large-photo-gallery"},[l("img",{staticClass:"gallery-photo",attrs:{src:null===(t=c.photos[0])||void 0===t?void 0:t.src,alt:"".concat(c.galleryTitle," Photo #1")}})])]),c._v(" "),l("div",{staticClass:"col-md-6 row align-content-between photo-gallery--right m-auto"},[l("div",{staticClass:"col-6 square-1-gallery-photo",on:{click:function(t){return c.openModal(1)}}},[l("div",{staticClass:"image-ratio ratio-1-1"},[l("img",{staticClass:"gallery-photo",attrs:{src:null===(e=c.photos[1])||void 0===e?void 0:e.src,alt:"".concat(c.galleryTitle," Photo #2")}})])]),c._v(" "),l("div",{staticClass:"col-6 square-2-gallery-photo",on:{click:function(t){return c.openModal(2)}}},[l("div",{staticClass:"image-ratio ratio-1-1"},[l("img",{staticClass:"gallery-photo",attrs:{src:null===(o=c.photos[2])||void 0===o?void 0:o.src,alt:"".concat(c.galleryTitle," Photo #3")}})])]),c._v(" "),l("div",{staticClass:"col-md-12",on:{click:function(t){return c.openModal(3)}}},[l("div",{staticClass:"image-ratio small-photo-gallery"},[l("img",{staticClass:"gallery-photo",attrs:{src:null===(n=c.photos[3])||void 0===n?void 0:n.src,alt:"".concat(c.galleryTitle," Photo #4")}})])])])]),c._v(" "),l("transition",{attrs:{name:"modal-fade"}},[c.showModal?l("Modal",{attrs:{currentPhoto:null===(r=c.photos[c.currentId])||void 0===r?void 0:r.src,currentID:c.currentId},on:{closeModal:c.handleCloseModal,navPrev:c.previousPhoto,navNext:c.nextPhoto}}):c._e()],1)],1)}),[],!1,null,null,null));e.a=m.exports},345:function(t,e,o){"use strict";var n={props:{coachImage:String,coachName:String,coachTitle:String,coachContent:String}},r=(o(330),o(3)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"coach-card",attrs:{tabindex:"0"}},[e("div",{staticClass:"image-ratio ratio-1-1"},[e("img",{staticClass:"coach-card--image",attrs:{src:t.coachImage,alt:t.coachName+" Headshot"}})]),t._v(" "),e("div",{staticClass:"coach-card--content"},[e("h4",[t._v(t._s(t.coachName))]),t._v(" "),e("h6",[t._v(t._s(t.coachTitle))]),t._v(" "),e("p",[t._v(t._s(t.coachContent))])])])}),[],!1,null,null,null);e.a=component.exports},361:function(t,e,o){"use strict";o(329)},362:function(t,e,o){var n=o(7)(!1);n.push([t.i,".cta-border-top{padding:32px 24px;border-top-width:4px;border-top-style:solid;background:#fff}.cta-border-top h3{margin-top:0;margin-bottom:16px;font-weight:500}.cta-border-top a:not(.button-text){color:#000}.cta-border-top .button-primary{width:100%}.cta-border-top--header h4{display:flex;justify-content:space-between;align-items:center}@media (min-width:414px){.cta-border-top--content{height:auto;overflow:hidden;max-height:50em;transition:max-height .5s ease}.cta-border-top--content.is-collapsed{max-height:0}}.cta-border-top p{margin-bottom:24px}@media (min-width:768px){.cta-border-top{padding:40px 32px}}@media (min-width:1024px){.cta-border-top{padding:48px 56px;border-top-width:8px}}@media (min-width:414px){.cta-border-top{margin-bottom:32px}}",""]),t.exports=n},400:function(t,e,o){"use strict";var n={props:{hideSearchButton:{type:Boolean,default:!1}}},r=o(3),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"find-your-gym-search site-feature-search"},[e("i",{staticClass:"material-icons search-icon"},[t._v("search")]),t._v(" "),e("input",{attrs:{name:"location-search",placeholder:"Search city or zip..."}}),t._v(" "),t.hideSearchButton?t._e():e("button",{attrs:{type:"submit"}},[t._v("\n    Find Gym "),e("i",{staticClass:"material-icons arrow-icon"},[t._v("arrow_forward")])])])}),[],!1,null,null,null);e.a=component.exports},475:function(t,e,o){var content=o(763);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("a69ebb20",content,!0,{sourceMap:!1})},476:function(t,e,o){var content=o(767);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("366ae858",content,!0,{sourceMap:!1})},762:function(t,e,o){"use strict";o(475)},763:function(t,e,o){var n=o(7),r=o(764),c=o(765),l=n(!1),d=r(c);l.push([t.i,".find-your-gym{background-image:url("+d+");background-size:cover;background-position:50%;padding:120px 0}.find-your-gym,.find-your-gym .search-column{align-items:center}@media (max-width:414px){.find-your-gym{padding:48px 0 72px}.find-your-gym h2{text-align:center;margin-bottom:32px}}",""]),t.exports=l},764:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},765:function(t,e,o){t.exports=o.p+"img/find-your-gym-bg.e27b4e3.png"},766:function(t,e,o){"use strict";o(476)},767:function(t,e,o){var n=o(7)(!1);n.push([t.i,".section-2-cta{padding:32px 16px}.section-2-cta .cta-border-top{padding:48px 40px}.section-2-cta .cta-border-top h3{font-size:40px;text-transform:none;font-weight:500}@media (min-width:768px){.section-2-cta{padding:32px 0}}@media (min-width:1024px){.section-2-cta{padding:64px 0}.section-2-cta .cta-border-top{padding:72px 84px;margin-left:24px;margin-right:16px}.section-2-cta .cta-border-top p{margin-bottom:41px}}",""]),t.exports=n},770:function(t,e,o){"use strict";o.r(e);var n=o(63),r=o(307),c=o(344),l=o(282),d=o(280),m=o(297),h={components:{FindYourGymSearch:o(400).a}},f=(o(762),o(3)),x=Object(f.a)(h,(function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"vpanim",rawName:"v-vpanim"}],staticClass:"find-your-gym"},[e("div",{staticClass:"find-your-gym--content fixed-width-content row d-flex no-gutters"},[t._m(0),t._v(" "),e("div",{staticClass:"col-lg-6 col-md-7 d-flex search-column"},[e("FindYourGymSearch")],1)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"col-lg-6 col-md-5"},[t("h2",[this._v("Find Your Gym")])])}],!1,null,null,null).exports,v=o(296),y=o(477),w={components:{BorderCta:o(322).a},props:{backgroundImage:{type:String,required:!0,default:""},ctaTitle:{type:String,required:!0,default:""},ctaContent:{type:String,required:!0,default:""},ctaLink:{type:String,required:!0,default:""},ctaButtonText:{type:String,required:!0,default:""}}},_=(o(766),Object(f.a)(w,(function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"vpanim",rawName:"v-vpanim"}],staticClass:"section-2-cta container-fluid",style:"background-image: url("+t.backgroundImage+");",attrs:{role:"img","aria-label":t.ctaButtonText+" Background Image",tabindex:"0"}},[e("div",{staticClass:"row no-gutters fixed-width-content"},[e("div",{staticClass:"col-md-6"},[e("border-cta",{attrs:{"cta-link":t.ctaLink,"cta-button-text":t.ctaButtonText,"border-color":"red","cta-title":t.ctaTitle}},[e("p",[t._v(t._s(t.ctaContent))])])],1)])])}),[],!1,null,null,null).exports),C=o(323),k=o(345),S={components:{PassCTA:o(285).a,SectionLeftCta:_,ImgWAnimation:d.a,Button:n.a,Testimonial:r.a,PhotoGallery:c.a,TitleWButton:l.a,TwoSideCTA:v.a,PageHero:m.a,FindYourGym:x,CarouselSlider:y.a,BlogRow:C.a,CoachCard:k.a},computed:{location:function(){return this.$store.state.location}}},I=Object(f.a)(S,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"home no-padding"},[e("PageHero",{attrs:{"page-title":"Seize the opportunity!","page-background":"/images/home/woman_battle_ropes.jpg",imageAlt:"UFC GYM header video","page-sub-text":"It’s time to get in the best shape of your life. Redeem your complimentary all-access pass to experience the classes, community and dynamic energy of UFC GYM. At participating locations only. Terms and conditions may apply.","page-hero-button-link":"/getpass/","page-hero-button-text":"Get Your Free Pass"}}),t._v(" "),e("TwoSideCTA",{staticClass:"container",attrs:{imageSrc:"/images/home/ufcfit_equipment.jpg",imageAlt:"Group of members in hand pyramid",title:"We are UFC GYM",description:"We are the original. The biggest, best and fastest growing. We are UFC GYM. Train Different in 150+ locations around the world — and counting! Find us in 40 countries by 2023. ",buttonLinkUrl:"/about/"}}),t._v(" "),e("SectionLeftCta",{attrs:{"background-image":"images/home/Homepage_4_Promo.jpg","cta-title":"Find Your Fit","cta-button-text":"Join Now","cta-content":" Unlock your potential! Start your journey with the membership tier that fits your needs. From unlimited Group Fitness access to Ultimate Classes, discover the fit that’s right for you.  ","cta-link":(t.location,"/locations/list/")}}),t._v(" "),e("TwoSideCTA",{staticClass:"container",attrs:{imageSrc:"images/home/Homepage_5_Youth.jpg",imageAlt:"Three young members smiling at camera",title:"Youth Programs",description:"Set your kids up for success with a healthy foundation. Designed to build strong athletic and motivational skills that apply in and out of the gym, our Youth Programs help develop coordination, agility, speed and strength.",buttonLinkUrl:"/classes/youth/","image-on-right":""}}),t._v(" "),e("BlogRow"),t._v(" "),e("PassCTA")],1)}),[],!1,null,null,null);e.default=I.exports}}]);