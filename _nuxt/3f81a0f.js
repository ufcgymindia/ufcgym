(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{333:function(t,e,o){var r=o(19);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},365:function(t,e,o){"use strict";var strong=o(366),r=o(333);t.exports=o(367)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return strong.def(r(this,"Set"),t=0===t?0:t,t)}},strong)},366:function(t,e,o){"use strict";var r=o(17).f,n=o(112),l=o(175),c=o(41),d=o(173),f=o(174),h=o(116),m=o(177),v=o(117),x=o(13),w=o(172).fastKey,y=o(333),_=x?"_s":"size",k=function(t,e){var o,r=w(e);if("F"!==r)return t._i[r];for(o=t._f;o;o=o.n)if(o.k==e)return o};t.exports={getConstructor:function(t,e,o,h){var m=t((function(t,r){d(t,m,e,"_i"),t._t=e,t._i=n(null),t._f=void 0,t._l=void 0,t[_]=0,null!=r&&f(r,o,t[h],t)}));return l(m.prototype,{clear:function(){for(var t=y(this,e),data=t._i,o=t._f;o;o=o.n)o.r=!0,o.p&&(o.p=o.p.n=void 0),delete data[o.i];t._f=t._l=void 0,t[_]=0},delete:function(t){var o=y(this,e),r=k(o,t);if(r){var n=r.n,l=r.p;delete o._i[r.i],r.r=!0,l&&(l.n=n),n&&(n.p=l),o._f==r&&(o._f=n),o._l==r&&(o._l=l),o[_]--}return!!r},forEach:function(t){y(this,e);for(var o,r=c(t,arguments.length>1?arguments[1]:void 0,3);o=o?o.n:this._f;)for(r(o.v,o.k,this);o&&o.r;)o=o.p},has:function(t){return!!k(y(this,e),t)}}),x&&r(m.prototype,"size",{get:function(){return y(this,e)[_]}}),m},def:function(t,e,o){var r,n,l=k(t,e);return l?l.v=o:(t._l=l={i:n=w(e,!0),k:e,v:o,p:r=t._l,n:void 0,r:!1},t._f||(t._f=l),r&&(r.n=l),t[_]++,"F"!==n&&(t._i[n]=l)),t},getEntry:k,setStrong:function(t,e,o){h(t,e,(function(t,o){this._t=y(t,e),this._k=o,this._l=void 0}),(function(){for(var t=this,e=t._k,o=t._l;o&&o.r;)o=o.p;return t._t&&(t._l=o=o?o.n:t._t._f)?m(0,"keys"==e?o.k:"values"==e?o.v:[o.k,o.v]):(t._t=void 0,m(1))}),o?"entries":"values",!o,!0),v(e)}}},367:function(t,e,o){"use strict";var r=o(6),n=o(5),l=o(22),c=o(175),meta=o(172),d=o(174),f=o(173),h=o(19),m=o(16),v=o(115),x=o(67),w=o(171);t.exports=function(t,e,o,y,_,k){var C=r[t],M=C,z=_?"set":"add",A=M&&M.prototype,S={},T=function(t){var e=A[t];l(A,t,"delete"==t||"has"==t?function(a){return!(k&&!h(a))&&e.call(this,0===a?0:a)}:"get"==t?function(a){return k&&!h(a)?void 0:e.call(this,0===a?0:a)}:"add"==t?function(a){return e.call(this,0===a?0:a),this}:function(a,b){return e.call(this,0===a?0:a,b),this})};if("function"==typeof M&&(k||A.forEach&&!m((function(){(new M).entries().next()})))){var j=new M,E=j[z](k?{}:-0,1)!=j,I=m((function(){j.has(1)})),B=v((function(t){new M(t)})),F=!k&&m((function(){for(var t=new M,e=5;e--;)t[z](e,e);return!t.has(-0)}));B||((M=e((function(e,o){f(e,M,t);var r=w(new C,e,M);return null!=o&&d(o,_,r[z],r),r}))).prototype=A,A.constructor=M),(I||F)&&(T("delete"),T("has"),_&&T("get")),(F||E)&&T(z),k&&A.clear&&delete A.clear}else M=y.getConstructor(e,t,_,z),c(M.prototype,o),meta.NEED=!0;return x(M,t),S[t]=M,n(n.G+n.W+n.F*(M!=C),S),k||y.setStrong(M,t,_),M}},413:function(t,e,o){var content=o(504);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("4f3a9175",content,!0,{sourceMap:!1})},414:function(t,e,o){var content=o(506);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("12e4e153",content,!0,{sourceMap:!1})},503:function(t,e,o){"use strict";o(413)},504:function(t,e,o){var r=o(7)(!1);r.push([t.i,".featured-blog{position:relative;display:flex;justify-content:center}.featured-blog .fixed-width-content{width:100%;min-height:100%;height:auto;position:absolute;top:0;display:flex;align-items:flex-end;padding-top:192px}.featured-blog--card{position:relative;z-index:0;background:#fff;padding:40px}.featured-blog--card .blog-date{font-size:1.6rem;line-height:1.38;margin:16px 0 8px;display:inline-block}.featured-blog--card .blog-categories{text-transform:uppercase;font-size:16px;line-height:1.5;font-weight:500;margin-bottom:24px;font-family:urw-din-condensed,sans-serif}@media (min-width:768px){.featured-blog{max-height:552px}.featured-blog--card{margin-bottom:48px;margin-left:16px;margin-right:16px}}@media (max-width:414px){.featured-blog{margin-bottom:120px}.featured-blog .fixed-width-content{height:auto;padding-top:72px;padding-right:32px}.featured-blog .img-w-anim,.featured-blog .overlay{height:248px}}",""]),t.exports=r},505:function(t,e,o){"use strict";o(414)},506:function(t,e,o){var r=o(7)(!1);r.push([t.i,'form{display:flex;flex-wrap:wrap}form h3{margin-bottom:24px}form .button-text{width:100%;margin-top:24px}@media (max-width:414px){form .button-text{display:block;max-width:200px;margin-left:auto;margin-right:auto}}form input:not([type=checkbox]),form textarea{border:none;background:#f6f6f6;padding:16px;width:100%;font-size:1.6rem;line-height:1.38;color:#999}form input:not([type=checkbox]).is-danger,form input:not([type=checkbox]):active,form input:not([type=checkbox]):focus,form textarea.is-danger,form textarea:active,form textarea:focus{border:2px solid #1a1a1a}form input:not([type=checkbox]):not(:-moz-placeholder-shown),form textarea:not(:-moz-placeholder-shown){border-bottom:2px solid #1a1a1a}form input:not([type=checkbox]):not(:placeholder-shown),form textarea:not(:placeholder-shown){border-bottom:2px solid #1a1a1a}form option{border-radius:0}form label{font-size:2.4rem;font-weight:500;line-height:1.33;font-family:urw-din-condensed,sans-serif}form .form-field{width:100%}form .form-field,form .form-field-half{margin-bottom:32px}form .form-field-half{width:45%}form .form-field-half--left{margin-right:16px}form .form-field-half--right{margin-left:16px}form .custom-checkbox{-webkit-user-select:none;-moz-user-select:none;user-select:none;position:relative;padding-left:40px;margin-bottom:16px;display:block}form .custom-checkbox input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}form .custom-checkbox .checkmark{position:absolute;top:0;left:0;height:32px;width:32px;background-color:#f6f6f6;border:2px solid #4d4d4d}form .custom-checkbox .checkmark:after{content:"";position:absolute;display:none;left:9px;top:0;width:10px;height:24px;border:solid #4d4d4d;border-width:0 4px 4px 0;transform:rotate(45deg)}form .custom-checkbox input:checked~.checkmark:after{display:block}form .custom-dropdown{border-radius:0;height:48px;overflow:hidden;width:100%;display:inline-block;margin-right:32px;font-family:proxima-nova,"Montserrat",sans-serif;background:url(/baseline-arrow_drop_down.svg) #f6f6f6 no-repeat 100%}form .custom-dropdown select{background:transparent;border:none;font-size:16px;font-weight:400;line-height:2;height:48px;padding:5px 16px;width:100%;-webkit-appearance:none;-moz-appearance:none;appearance:none;color:#999;border-radius:0}form .custom-dropdown select.is-danger,form .custom-dropdown select:focus{border:2px solid #1a1a1a}form .custom-dropdown select:valid{border-bottom:2px solid #1a1a1a}form .required-field-msg{font-size:1.4rem;font-family:proxima-nova,"Montserrat",sans-serif;line-height:1.14;color:#d20a0a;margin-top:8px;margin-bottom:8px}.blog-categories-row{display:flex;flex-wrap:wrap;padding-top:24px;padding-bottom:48px}.blog-categories-row .blog-category{margin-right:16px;line-height:1.2;font-weight:500;color:#a4a7ac;text-transform:uppercase;font-family:urw-din-condensed,sans-serif;cursor:pointer}.blog-categories-row .blog-category.active{color:#000}@media (min-width:1024px){.blog-categories-row .blog-category{margin-right:32px}}.custom-category-dropdown{border-radius:0;overflow:hidden;display:inline-block;margin-bottom:32px;border:2px solid #1a1a1a;background:url(/baseline-arrow_drop_down.svg) #f6f6f6 no-repeat 100%}.custom-category-dropdown,.custom-category-dropdown select{height:48px;width:100%;font-family:proxima-nova,"Montserrat",sans-serif}.custom-category-dropdown select{background:transparent;border:none;font-size:16px;font-weight:700;line-height:2;padding:5px 16px;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:0}',""]),t.exports=r},771:function(t,e,o){"use strict";o.r(e);o(304),o(20);var r=o(2),n=(o(18),o(30),o(365),o(39),o(10),o(40),o(21),o(38),o(15),o(51),o(45),o(63)),l=o(280),c={components:{Button:n.a,ImageAnim:l.a},props:{blogImage:String,blogTitle:String,blogDate:String,blogCategories:String,blogUrl:String}},d=(o(503),o(3)),f=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"featured-blog page-hero"},[e("ImageAnim",{attrs:{"img-src":t.blogImage,"image-ratio":"ratio-3-2"}}),t._v(" "),e("div",{staticClass:"overlay"}),t._v(" "),e("div",{staticClass:"fixed-width-content"},[e("div",{directives:[{name:"vpanim",rawName:"v-vpanim",value:{delay:1},expression:"{ delay: 1 }"}],staticClass:"featured-blog--card col-lg-5 col-md-8 vpanin-delayed",attrs:{tabindex:"0"}},[e("h3",{staticClass:"text-light text-initial"},[t._v(t._s(t.blogTitle))]),t._v(" "),e("span",{staticClass:"blog-date"},[t._v(t._s(t.blogDate))]),t._v(" "),e("div",{staticClass:"blog-categories"},[t._v(t._s(t.blogCategories))]),t._v(" "),e("Button",{attrs:{"button-link-url":t.blogUrl,"button-label":"Read More","button-sizing":"button-md-text"}})],1)])],1)}),[],!1,null,null,null).exports,h=o(291),m=o(332);function v(t,e){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=function(t,e){if(!t)return;if("string"==typeof t)return x(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return x(t,e)}(t))||e&&t&&"number"==typeof t.length){o&&(t=o);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,l=!0,c=!1;return{s:function(){o=o.call(t)},n:function(){var t=o.next();return l=t.done,t},e:function(t){c=!0,n=t},f:function(){try{l||null==o.return||o.return()}finally{if(c)throw n}}}}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}var w={components:{BlogFeatured:f,BlogCard:h.a,Button:n.a},head:function(){return{title:"News | Gym & Fitness | MMA Training"}},asyncData:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){var e,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=m.slice(0,6),o=m[0],t.abrupt("return",{articles:e,featured:o});case 3:case"end":return t.stop()}}),t)})))()},data:function(){return{activeTag:"",canLoadMore:!0}},computed:{tags:function(){var t,e=new Set,o=v(m);try{for(o.s();!(t=o.n()).done;){t.value.tags.forEach((function(t){return e.add(t)}))}}catch(t){o.e(t)}finally{o.f()}return Array.from(e)},isMobile:function(){return this.$device.isMobile}},methods:{loadArticles:function(t){var e=this.activeTag,o=6;t||(o+=this.articles.length);var r=m.filter((function(t){var o=t.tags;return!e||o.includes(e)}));this.canLoadMore=r.length>o,this.articles=r.slice(0,o)},setTag:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.activeTag=t,this.loadArticles(!0)},onCategoryChange:function(t){this.setTag(t.target.value)},loadMore:function(){this.loadArticles(!1)}}},y=w,_=(o(505),Object(d.a)(y,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"post-archive gray-background no-padding"},[e("blog-featured",{attrs:{"blog-image":t.featured.banner,"blog-title":t.featured.title,"blog-date":t._f("asDate")(t.featured.date),"blog-categories":t._f("join")(t.featured.tags),"blog-url":t.featured.link}}),t._v(" "),e("div",{staticClass:"fixed-width-content padding-top-bottom-72"},[t.isMobile?[e("div",{staticClass:"custom-category-dropdown"},[e("select",{attrs:{name:"blogcategory",id:"blogcategory"},on:{change:t.onCategoryChange}},[e("option",{attrs:{selected:"",value:""}},[t._v("All Categories")]),t._v(" "),t._l(t.tags,(function(o){return e("option",{key:"tag-".concat(o),domProps:{value:o}},[t._v(t._s(t._f("upper")(o)))])}))],2)])]:[e("h3",{staticClass:"text-initial text-light"},[t._v("UFC GYM News")]),t._v(" "),e("div",{staticClass:"blog-categories-row"},[e("div",{staticClass:"blog-category",class:{active:!t.activeTag},on:{click:function(e){return t.setTag()}}},[t._v("\n          All Categories\n        ")]),t._v(" "),t._l(t.tags,(function(o){return e("div",{key:"tag-".concat(o),staticClass:"blog-category",class:{active:o===t.activeTag},on:{click:function(e){return t.setTag(o)}}},[t._v("\n          "+t._s(o)+"\n        ")])}))],2)],t._v(" "),e("div",{staticClass:"row"},t._l(t.articles,(function(article,t){return e("div",{key:"article-".concat(t),staticClass:"col-lg-4 col-md-6 d-flex"},[e("blog-card",{attrs:{"card-title":article.title,"card-featured-image":article.banner,"card-link":article.link,"button-label":"Read More","image-ratio":"ratio-16-9"}})],1)})),0),t._v(" "),t.canLoadMore?e("Button",{staticClass:"load-more-button",attrs:{"button-label":"Load More","button-colors":"button-secondary"},nativeOn:{click:function(e){return t.loadMore.apply(null,arguments)}}}):t._e()],2)],1)}),[],!1,null,null,null));e.default=_.exports}}]);