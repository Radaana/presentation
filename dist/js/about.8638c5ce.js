(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"03a0":function(t,e,s){"use strict";var n=s("d2d6"),a=s.n(n);a.a},"0bef":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"questions chat-line"},[s("button-back"),s("div",{staticClass:"questions__title"},[t._v("Все  комментарии:")]),t._l(this.getGuestComments,function(t){return s("chat-guest-message",{key:t.id,staticClass:"bubble guest",class:{"guest--question":t.isQuestion},attrs:{guestMSG:t}})}),s("input-message")],2)},a=[],u=s("cebc"),i=s("bfe1"),c=s("b816"),o=s("3352"),r=s("2f62"),l={name:"Questions",components:{buttonBack:i["a"],chatGuestMessage:c["a"],inputMessage:o["a"]},computed:Object(u["a"])({},Object(r["c"])(["getGuestComments"])),methods:{}},b=l,f=(s("16fb"),s("2877")),d=Object(f["a"])(b,n,a,!1,null,"054cef40",null);e["default"]=d.exports},"0ee3":function(t,e,s){},"16fb":function(t,e,s){"use strict";var n=s("78b5"),a=s.n(n);a.a},"183e":function(t,e,s){"use strict";var n=s("d205"),a=s.n(n);a.a},3352:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"input",staticClass:"input-message"},[s("form",{staticClass:"form"},[s("router-link",{staticClass:"form__back",attrs:{to:"/"}}),s("input",{staticClass:"form__input",attrs:{type:"text",autofocus:""}}),s("button",{staticClass:"form__submit",attrs:{type:"submit"}})],1)])},a=[],u={name:"InputMessage",methods:{sendHeight:function(){var t="padding-bottom:"+(this.$refs.input.offsetHeight+16)+"px;",e=document.querySelector(".chat-line"),s=e.getAttribute("style")?e.getAttribute("style")+t:t;e.setAttribute("style",s)}},mounted:function(){this.sendHeight()},updated:function(){this.sendHeight()}},i=u,c=(s("d0ec"),s("2877")),o=Object(c["a"])(i,n,a,!1,null,"66cc96a5",null);e["a"]=o.exports},"66ba":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"questions chat-line"},[s("button-back"),s("div",{staticClass:"questions__title"},[t._v("Все  вопросы:")]),t._l(this.getGuestQuestions,function(t){return s("chat-guest-message",{key:t.id,staticClass:"bubble guest",class:{"guest--question":t.isQuestion},attrs:{guestMSG:t}})}),s("input-message")],2)},a=[],u=s("cebc"),i=s("bfe1"),c=s("b816"),o=s("3352"),r=s("2f62"),l={name:"Questions",components:{buttonBack:i["a"],chatGuestMessage:c["a"],inputMessage:o["a"]},computed:Object(u["a"])({},Object(r["c"])(["getGuestQuestions"])),methods:{}},b=l,f=(s("03a0"),s("2877")),d=Object(f["a"])(b,n,a,!1,null,"16abf649",null);e["default"]=d.exports},"78b5":function(t,e,s){},bfe1:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-link",{staticClass:"button-back",attrs:{to:"/"}})},a=[],u={name:"ButtonBack",methods:{}},i=u,c=(s("183e"),s("2877")),o=Object(c["a"])(i,n,a,!1,null,"cdfb1c9a",null);e["a"]=o.exports},d0ec:function(t,e,s){"use strict";var n=s("0ee3"),a=s.n(n);a.a},d205:function(t,e,s){},d2d6:function(t,e,s){}}]);
//# sourceMappingURL=about.8638c5ce.js.map