(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0bef":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"chatline",staticClass:"comments chat-line"},[s("button-back"),s("div",{staticClass:"comments__title"},[t._v("Все  комментарии:")]),s("div",{staticClass:"comments__thread"},t._l(this.getGuestComments,function(t){return s("chat-message",{key:t.id,staticClass:"bubble guest",attrs:{MSG:t}})}),1),s("input-message")],1)},i=[],u=s("cebc"),o=s("bfe1"),a=s("96c7"),c=s("3352"),r=s("2f62"),l={name:"Questions",components:{buttonBack:o["a"],chatMessage:a["a"],inputMessage:c["a"]},computed:Object(u["a"])({},Object(r["c"])(["getGuestComments"])),methods:{},mounted:function(){window.scrollTo(0,this.$refs.chatline.offsetHeight)}},f=l,d=(s("6b49"),s("2877")),h=Object(d["a"])(f,n,i,!1,null,"61cdfd72",null);e["default"]=h.exports},1071:function(t,e,s){},"183e":function(t,e,s){"use strict";var n=s("d205"),i=s.n(n);i.a},3352:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"input",staticClass:"input-message"},[s("form",{staticClass:"form"},[s("router-link",{staticClass:"form__back",attrs:{to:"/"}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputText,expression:"inputText"}],ref:"field",staticClass:"form__input",attrs:{type:"text"},domProps:{value:t.inputText},on:{focus:function(e){return t.inputFocus()},blur:function(e){return t.inputBlur()},input:function(e){e.target.composing||(t.inputText=e.target.value)}}}),s("button",{ref:"submit",staticClass:"form__submit",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.inputSubmit()},focus:function(e){return e.stopPropagation(),t.submitFocus()}}}),s("transition",{attrs:{name:"message"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showMessage,expression:"showMessage"}],staticClass:"form__message"},[t._v("Сообщение отправлено")])])],1)])},i=[],u=s("cebc"),o=s("2f62"),a={name:"InputMessage",data:function(){return{inputText:"",showMessage:!1}},computed:Object(u["a"])({},Object(o["b"])(["addGuestMessage"])),methods:{sendHeight:function(){var t="padding-bottom:"+(this.$refs.input.offsetHeight+16)+"px;",e=document.querySelector(".chat-line");e.setAttribute("style",t)},inputSubmit:function(){var t=this;if(this.inputText){this.$refs.submit.setAttribute("disabled","disabled"),this.showMessage=!0;var e="/questions"==this.$route.path,s=this.inputText,n={text:s,isQuestion:e};this.$store.dispatch("addGuestMessage",n).then(function(){window.scrollTo(0,document.querySelector(".chat-line").offsetHeight),setTimeout(function(){t.showMessage=!1,t.$refs.submit.removeAttribute("disabled")},1500)}),this.inputText=""}},inputFocus:function(){window.scrollTo(0,document.querySelector(".chat-line").offsetHeight-window.innerHeight),document.querySelector(".chat-line").addEventListener("touchmove",this.preventScrolling(event),!1)},inputBlur:function(){document.querySelector(".chat-line").removeEventListener("touchmove",this.preventScrolling(event),!1),window.scrollTo(0,document.querySelector(".chat-line").offsetHeight+this.$refs.input.offsetHeight)},submitFocus:function(){},preventScrolling:function(t){1===t.targetTouches.length&&t.preventDefault()}},mounted:function(){this.sendHeight(),this.$refs.field.focus(),window.scrollTo(0,document.querySelector(".chat-line").offsetHeight-this.$refs.input.offsetHeight)},updated:function(){this.sendHeight()}},c=a,r=(s("d112"),s("2877")),l=Object(r["a"])(c,n,i,!1,null,"4be5f3d2",null);e["a"]=l.exports},3530:function(t,e,s){"use strict";var n=s("1071"),i=s.n(n);i.a},"39e2":function(t,e,s){},"66ba":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"chatline",staticClass:"questions chat-line"},[s("button-back"),s("div",{staticClass:"questions__title"},[t._v("Все  вопросы:")]),s("div",{staticClass:"questions__thread"},t._l(this.getGuestQuestions,function(t){return s("chat-message",{key:t.id,staticClass:"bubble guest",class:{"guest--question":t.isQuestion},attrs:{MSG:t}})}),1),s("input-message")],1)},i=[],u=s("cebc"),o=s("bfe1"),a=s("96c7"),c=s("3352"),r=s("2f62"),l={name:"Questions",components:{buttonBack:o["a"],chatMessage:a["a"],inputMessage:c["a"]},computed:Object(u["a"])({},Object(r["c"])(["getGuestQuestions"])),methods:{},mounted:function(){window.scrollTo(0,this.$refs.chatline.offsetHeight)}},f=l,d=(s("3530"),s("2877")),h=Object(d["a"])(f,n,i,!1,null,"5405965a",null);e["default"]=h.exports},"6b49":function(t,e,s){"use strict";var n=s("f7ae"),i=s.n(n);i.a},bfe1:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-link",{staticClass:"button-back",attrs:{to:"/"}})},i=[],u={name:"ButtonBack",methods:{}},o=u,a=(s("183e"),s("2877")),c=Object(a["a"])(o,n,i,!1,null,"cdfb1c9a",null);e["a"]=c.exports},d112:function(t,e,s){"use strict";var n=s("39e2"),i=s.n(n);i.a},d205:function(t,e,s){},f7ae:function(t,e,s){}}]);
//# sourceMappingURL=about.37ad5e27.js.map