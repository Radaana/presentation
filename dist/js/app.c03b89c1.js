(function(e){function t(t){for(var i,n,o=t[0],c=t[1],u=t[2],l=0,d=[];l<o.length;l++)n=o[l],a[n]&&d.push(a[n][0]),a[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);f&&f(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],i=!0,n=1;n<s.length;n++){var o=s[n];0!==a[o]&&(i=!1)}i&&(r.splice(t--,1),e=c(c.s=s[0]))}return e}var i={},n={app:0},a={app:0},r=[];function o(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ab9b5029"}[e]+".js"}function c(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(e){var t=[],s={about:1};n[e]?t.push(n[e]):0!==n[e]&&s[e]&&t.push(n[e]=new Promise(function(t,s){for(var i="css/"+({about:"about"}[e]||e)+"."+{about:"d6944fdf"}[e]+".css",a=c.p+i,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var u=r[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===i||l===a))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===i||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var i=t&&t.target&&t.target.src||a,r=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete n[e],f.parentNode.removeChild(f),s(r)},f.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(f)}).then(function(){n[e]=0}));var i=a[e];if(0!==i)if(i)t.push(i[2]);else{var r=new Promise(function(t,s){i=a[e]=[t,s]});t.push(i[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(e),u=function(t){l.onerror=l.onload=null,clearTimeout(d);var s=a[e];if(0!==s){if(s){var i=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src,r=new Error("Loading chunk "+e+" failed.\n("+i+": "+n+")");r.type=i,r.request=n,s[1](r)}a[e]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=i,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(s,i,function(t){return e[t]}.bind(null,i));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/presentation/dist/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"17e2":function(e,t,s){},"1bb6":function(e,t,s){},"21bb":function(e,t,s){"use strict";var i=s("bcc9"),n=s.n(i);n.a},"2ff7":function(e,t,s){},5314:function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var i=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},a=[],r={name:"app"},o=r,c=(s("5c0b"),s("2877")),u=Object(c["a"])(o,n,a,!1,null,null,null),l=u.exports,d=s("8c4f"),f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("div",{staticClass:"content"},[s("survey"),s("chat-line"),s("bottom-nav")],1),s("slides-list")],1)},m=[],h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"survey",staticClass:"survey"},[s("div",{staticClass:"survey__container"},[s("h3",{staticClass:"survey__title"},[e._v(e._s(this.getActiveSurvey.question))]),s("form",{staticClass:"survey__form"},e._l(this.getActiveSurvey.answers,function(t,i){return s("div",{staticClass:"survey__input"},[s("label",{staticClass:"survey__label"},[s("input",{staticClass:"survey__switch",attrs:{type:"radio",name:"activeSurvey",id:i},domProps:{value:t},on:{change:function(s){return e.updateRadioButton(t)}}}),s("span",{staticClass:"survey__radio"}),s("span",{staticClass:"survey__text"},[e._v(e._s(t))])])])}),0)]),s("div",{staticClass:"survey__sidebar"},[s("button",{staticClass:"survey__link",on:{click:function(t){return e.clickBurger(!e.showSlidesList)}}},[e._m(0)]),e._m(1),s("button",{staticClass:"survey__link"},[s("div",{staticClass:"like",class:{"like--active":this.getActiveSurvey.like},on:{click:function(t){return e.clickLike(!e.activeSurveyLike)}}})])])])},p=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hamburger-menu"},[s("div",{staticClass:"hamburger-menu__bars"})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("button",{staticClass:"survey__link"},[s("div",{staticClass:"share"})])}],g=s("cebc"),v=s("2f62"),k={name:"Survey",data:function(){return{msg:"Survey Cont"}},computed:Object(g["a"])({},Object(v["c"])(["getActiveSurvey","getSlidesListAppearance"]),Object(v["b"])(["changeLike","changeAnswer"]),{activeSurveyLike:function(){return this.getActiveSurvey["like"]},showSlidesList:function(){return this.getSlidesListAppearance}}),methods:{clickLike:function(e){this.$store.dispatch("changeLike",e)},clickBurger:function(e){this.$store.dispatch("changeSlidesListAppearance",e),document.querySelector("body").setAttribute("style","overflow: hidden"),document.querySelector(".slides").setAttribute("style","overflow-y: scroll;")},updateRadioButton:function(e){this.$store.dispatch("changeAnswer",e)},sendHeight:function(){var e="padding-top:"+(this.$refs.survey.offsetHeight+16)+"px;",t=document.querySelector(".chat-line"),s=t.getAttribute("style")?t.getAttribute("style")+e:e;t.setAttribute("style",s)}},mounted:function(){this.sendHeight()},updated:function(){this.sendHeight()}},b=k,_=(s("73c0"),Object(c["a"])(b,h,p,!1,null,"50948e55",null)),S=_.exports,y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"chatline",staticClass:"chat-line"},e._l(this.getSpeakerMessages,function(e){return s("chat-thread",{key:e.id,attrs:{speakerMSG:e}})}),1)},C=[],D=(s("c5f6"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"chat-thread"},[s("div",{staticClass:"bubble speaker"},[s("div",{staticClass:"speaker__img"},[s("img",{attrs:{src:this.getSpeaker.pic}})]),s("div",{staticClass:"speaker__message"},[s("div",{staticClass:"speaker__name"},[e._v(e._s(this.getSpeaker.name))]),s("div",{staticClass:"speaker__text"},[e._v(e._s(this.speakerMSG.text))])])]),e._l(this.getTread,function(e){return s("chat-guest-message",{key:e.id,staticClass:"bubble guest",class:{"guest--question":e.isQuestion},attrs:{guestMSG:e}})})],2)}),L=[],w=s("b816"),A={name:"ChatThread",props:{speakerMSG:Object},components:{chatGuestMessage:w["a"]},computed:Object(g["a"])({},Object(v["c"])(["getCommentsToSpeakerMSG","getSpeaker"]),Object(v["b"])(["changeMessageLike"]),{getTread:function(){return this.getCommentsToSpeakerMSG(this.speakerMSG.ID)}}),methods:{clickMessageLike:function(e,t){var s={messageID:e,like:t};this.$store.dispatch("changeMessageLike",s)}}},j=A,I=(s("a884"),Object(c["a"])(j,D,L,!1,null,"7052d48c",null)),x=I.exports,O={name:"ChatLine",components:{chatThread:x},props:{surveysHeight:Number},computed:Object(g["a"])({},Object(v["c"])(["getSpeakerMessages"])),methods:{attachPadding:function(){var e="padding-top:"+this.surveysHeight+"px";document.querySelector(".chat-line").setAttribute("style",e)}}},M=O,B=(s("bcd5"),Object(c["a"])(M,y,C,!1,null,"3761537f",null)),E=B.exports,N=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"bottom",staticClass:"bottom-nav"},[s("router-link",{staticClass:"bottom-nav__link bottom-nav__link--comment",attrs:{to:"/comments"}},[e._v("Комментарий")]),s("router-link",{staticClass:"bottom-nav__link bottom-nav__link--question",attrs:{to:"/questions"}},[e._v("Вопрос")])],1)},T=[],$={name:"BottomNav",methods:{sendHeight:function(){var e="padding-bottom:"+(this.$refs.bottom.offsetHeight+16)+"px;",t=document.querySelector(".chat-line"),s=t.getAttribute("style")?t.getAttribute("style")+e:e;t.setAttribute("style",s)}},mounted:function(){this.sendHeight()},updated:function(){this.sendHeight()}},G=$,q=(s("86f9"),Object(c["a"])(G,N,T,!1,null,"d433f4a4",null)),P=q.exports,H=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"show",rawName:"v-show",value:e.showSlidesList,expression:"showSlidesList"}],staticClass:"slides"},[s("div",{staticClass:"slides__container"},[s("div",{staticClass:"slides__title"},[e._v(e._s(e.getPresentationTitle)),s("button",{staticClass:"slides__close",on:{click:function(t){return e.clickClose(!e.showSlidesList)}}},[e._m(0)])]),s("div",{staticClass:"slides__list"},e._l(this.getSlides,function(e){return s("slides-item",{key:e.id,attrs:{slide:e}})}),1)])])},Q=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"close"},[s("div",{staticClass:"close__bars"})])}],F=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"slide"},[s("div",{staticClass:"slide__container"},[s("div",{staticClass:"slide__image"},[s("img",{attrs:{src:e.slide.image}})]),s("div",{staticClass:"slide__text"},[e._v(e._s(e.slide.text))])]),s("div",{staticClass:"slide__sidebar"},[e._m(0),s("button",{staticClass:"slide__link"},[s("div",{staticClass:"like",class:{"like--active":e.slide.like},on:{click:function(t){return e.clickLike(e.slide.ID,!e.slide.like)}}})])])])},J=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("button",{staticClass:"slide__link"},[s("div",{staticClass:"share"})])}],R={name:"SlidesItem",computed:Object(g["a"])({},Object(v["c"])([]),Object(v["b"])(["changeSlideLike"])),props:{slide:Object},methods:{clickLike:function(e,t){var s={slideID:e,like:t};this.$store.dispatch("changeSlideLike",s)}}},K=R,U=(s("dcc3"),Object(c["a"])(K,F,J,!1,null,"aaf52652",null)),z=U.exports,V={name:"SlidesList",components:{slidesItem:z},computed:Object(g["a"])({},Object(v["c"])(["getSlidesListAppearance","getPresentationTitle","getSlides"]),Object(v["b"])(["changeSlidesListAppearance"]),{showSlidesList:function(){return this.getSlidesListAppearance}}),methods:{clickClose:function(e){this.$store.dispatch("changeSlidesListAppearance",e),document.querySelector("body").setAttribute("style",""),document.querySelector(".slides").setAttribute("style","")}}},W=V,X=(s("ac51"),Object(c["a"])(W,H,Q,!1,null,"787e1eec",null)),Y=X.exports,Z={name:"home",components:{survey:S,chatLine:E,bottomNav:P,slidesList:Y}},ee=Z,te=(s("21bb"),Object(c["a"])(ee,f,m,!1,null,null,null)),se=te.exports;i["a"].use(d["a"]);var ie=new d["a"]({routes:[{path:"/",name:"home",component:se},{path:"/comments",name:"comments",component:function(){return s.e("about").then(s.bind(null,"0bef"))}},{path:"/questions",name:"questions",component:function(){return s.e("about").then(s.bind(null,"66ba"))}}]}),ne={surveys:[{ID:1,presentationID:1,question:"Давайте выясним кого в зале больше?",answers:["Мужчина","Женщина"],like:!1,active:!0,userAnswer:"",shareLink:"#"},{ID:2,presentationID:1,question:"Вы живете в Москве или ближайшем Подмосковье?",answers:["Да","Нет"],like:!1,active:!1,userAnswer:"",shareLink:"#"}]},ae={getActiveSurvey:function(e){return e.surveys.filter(function(e){return e.active})[0]}},re={changeLike:function(e,t){for(var s=0;s<e.surveys.length;s++)e.surveys[s].active&&(e.surveys[s].like=t)},changeAnswer:function(e,t){for(var s=0;s<e.surveys.length;s++)e.surveys[s].active&&(e.surveys[s].userAnswer=t,console.log(e.surveys[s]))}},oe={changeLike:function(e,t){e.commit("changeLike",t)},changeAnswer:function(e,t){e.commit("changeAnswer",t)}},ce={state:ne,getters:ae,mutations:re,actions:oe},ue={slides:[{ID:1,shareLink:"#",like:!1,image:"http://i.picasion.com/images/example.jpg",text:"Сначала поговорим о температуре"},{ID:2,shareLink:"#",like:!1,image:"http://www.artisi.ru/painting/slides/%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%B7%D0%B8%D1%86%D0%B8%D1%8F%20II-812,%20100x100,%20%D1%85%D0%BE%D0%BB%D1%81%D1%82,%20%D1%81%D0%BC.%D1%82,%202008.jpg",text:"Потом о давлении"},{ID:3,shareLink:"#",like:!1,image:"http://www.artisi.ru/painting/slides/%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%B7%D0%B8%D1%86%D0%B8%D1%8F%200221,%20100x100,%20%D1%85%D0%BE%D0%BB%D1%81%D1%82,%20%D0%BC%D0%B0%D1%81%D0%BB%D0%BE,2002.jpg",text:"Немного о направлении ветра в разрезе деформации"}],showSlidesList:!1,presentationTitle:"Песня про мороз"},le={getSlidesListAppearance:function(e){return e.showSlidesList},getPresentationTitle:function(e){return e.presentationTitle},getSlides:function(e){return e.slides}},de={changeSlidesListAppearance:function(e,t){e.showSlidesList=t},changeSlideLike:function(e,t){for(var s=0;s<e.slides.length;s++)e.slides[s].ID==t.slideID&&(e.slides[s].like=t.like)}},fe={changeSlidesListAppearance:function(e,t){e.commit("changeSlidesListAppearance",t)},changeSlideLike:function(e,t){e.commit("changeSlideLike",t)}},me={state:ue,getters:le,mutations:de,actions:fe},he=(s("55dd"),{messages:[{ID:1,text:"Кто видел кита?",like:!1,likeNumber:0,presentationID:1,authorName:"Самый Главный",isSpeaker:!0,isQuestion:!1,isCommentToID:null},{ID:2,text:"Однажды в студеную зимнюю пору?",like:!1,presentationID:1,authorName:"Самый Главный",isSpeaker:!0,isQuestion:!1,isCommentToID:null},{ID:3,text:"Да, я себе все отморозил",like:!1,likeNumber:0,presentationID:1,authorName:"Сусанин",isSpeaker:!1,isQuestion:!1,isCommentToID:2},{ID:4,text:"А где это было?",like:!1,likeNumber:3,presentationID:1,authorName:"Незнайка",isSpeaker:!1,isQuestion:!0,isCommentToID:2},{ID:5,text:"Ой, а я на другом митапе был, там тоже эту тему поднимали. И даже кондиционер включали для пущего погружения",like:!1,likeNumber:44,presentationID:1,authorName:"Всезнайка",isSpeaker:!1,isQuestion:!1,isCommentToID:2},{ID:6,text:"Видал я, ничего уж себе интересного",like:!1,likeNumber:9,presentationID:1,authorName:"Всезнайка",isSpeaker:!1,isQuestion:!1,isCommentToID:1},{ID:7,text:"Всем пока и спасибо за рыбу",like:!1,presentationID:1,authorName:"Самый Главный",isSpeaker:!0,isQuestion:!1,isCommentToID:null}],speaker:{name:"Самый Главный",pic:"https://kulturologia.ru/img/avatar/avatar375901.jpg"}}),pe={getSpeakerMessages:function(){return he.messages.filter(function(e){return e.isSpeaker})},getGuestQuestions:function(){return he.messages.filter(function(e){return e.isQuestion&&!e.isSpeaker})},getGuestComments:function(){return he.messages.filter(function(e){return!e.isQuestion&&!e.isSpeaker})},getSpeaker:function(){return he.speaker},getCommentsToSpeakerMSG:function(e){return function(t){var s=e.messages.filter(function(e){return e.isCommentToID===t}).sort(function(e,t){return t.likeNumber-e.likeNumber});return s}}},ge={changeMessageLike:function(e,t){for(var s=0;s<e.messages.length;s++)e.messages[s].ID==t.messageID&&(e.messages[s].like=t.like)}},ve={changeMessageLike:function(e,t){e.commit("changeMessageLike",t)}},ke={state:he,getters:pe,mutations:ge,actions:ve};i["a"].use(v["a"]);var be=new v["a"].Store({state:{},getters:{},mutations:{},actions:{},modules:{survey:ce,slides:me,messages:ke}}),_e=s("9483");Object(_e["a"])("".concat("/presentation/dist/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),i["a"].config.productionTip=!1,new i["a"]({router:ie,store:be,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";var i=s("5e27"),n=s.n(i);n.a},"5e27":function(e,t,s){},"73c0":function(e,t,s){"use strict";var i=s("dff0"),n=s.n(i);n.a},"86f9":function(e,t,s){"use strict";var i=s("88a9"),n=s.n(i);n.a},"88a9":function(e,t,s){},"8c64":function(e,t,s){},a884:function(e,t,s){"use strict";var i=s("17e2"),n=s.n(i);n.a},ac51:function(e,t,s){"use strict";var i=s("1bb6"),n=s.n(i);n.a},b816:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"guest__container"},[s("div",{staticClass:"guest__like",class:{"guest__like--active":this.guestMSG.like},on:{click:function(t){return e.clickMessageLike(e.guestMSG.ID,!e.like)}}},[e._v(e._s(this.guestMSG.likeNumber?this.guestMSG.likeNumber:""))]),s("div",{staticClass:"guest__message"},[s("div",{staticClass:"guest__name"},[e._v(e._s(this.guestMSG.authorName))]),s("div",{staticClass:"guest__text"},[e._v(e._s(this.guestMSG.text))])])])},n=[],a=s("cebc"),r=s("2f62"),o={name:"ChatGuestMessage",props:{guestMSG:Object},computed:Object(a["a"])({},Object(r["c"])(["getCommentsToSpeakerMSG"]),Object(r["b"])(["changeMessageLike"]),{like:function(){return this.guestMSG["like"]}}),methods:{clickMessageLike:function(e,t){var s={messageID:e,like:t};this.$store.dispatch("changeMessageLike",s)}}},c=o,u=(s("dfca"),s("2877")),l=Object(u["a"])(c,i,n,!1,null,"f5565534",null);t["a"]=l.exports},bcc9:function(e,t,s){},bcd5:function(e,t,s){"use strict";var i=s("2ff7"),n=s.n(i);n.a},dcc3:function(e,t,s){"use strict";var i=s("8c64"),n=s.n(i);n.a},dfca:function(e,t,s){"use strict";var i=s("5314"),n=s.n(i);n.a},dff0:function(e,t,s){}});
//# sourceMappingURL=app.c03b89c1.js.map