(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bbdfcc7a"],{"2bd9":function(e,t,n){e.exports=n.p+"assets/img/bd_logo.1e67d224aadf2e4a1ed57589ab563ae8.png"},"386d":function(e,t,n){"use strict";var i=n("cb7c"),s=n("83a1"),a=n("5f1b");n("214f")("search",1,function(e,t,n,r){return[function(n){var i=e(this),s=void 0==n?void 0:n[t];return void 0!==s?s.call(n,i):new RegExp(n)[t](String(i))},function(e){var t=r(n,e,this);if(t.done)return t.value;var o=i(e),u=String(this),c=o.lastIndex;s(c,0)||(o.lastIndex=0);var d=a(o,u);return s(o.lastIndex,c)||(o.lastIndex=c),null===d?-1:d.index}]})},"62a5":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[e._m(0),e._v(" "),n("div",{staticClass:"search"},[n("span",{staticClass:"inputbox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.keyword,expression:"keyword"}],staticClass:"baiduinput",attrs:{id:"baiduinput",value:"",maxlength:"255",autocomplete:"off"},domProps:{value:e.keyword},on:{keyup:[function(t){return e.keyup(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.selectEnter(t))}],keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:(t.preventDefault(),e.selectUp(t))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:(t.preventDefault(),e.selectDown(t))}],input:function(t){t.target.composing||(e.keyword=t.target.value)}}}),e._v(" "),n("span",{staticClass:"soutu"})]),e._v(" "),n("input",{staticClass:"submit",attrs:{type:"submit",id:"submit",value:"百度一下"},on:{click:function(t){return e.search(e.keyword)}}}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.keyarr.length>0,expression:"keyarr.length>0"}]},[n("ul",{staticClass:"keytag"},e._l(e.keyarr,function(t,i){return n("li",{key:t,class:[e.index===i?"active":""],on:{click:function(t){return e.mouseSearch(t)}}},[e._v(e._s(t))])}),0)])])])},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"logo"},[i("a",{attrs:{href:"#",target:"_blank"}},[i("img",{attrs:{src:n("2bd9"),width:"270",height:"129"}})])])}],a=(n("386d"),{data:function(){return{keyword:"",keyarr:[],index:-1}},components:{},methods:{mouseSearch:function(e){this.keyword=e.target.firstChild.nodeValue,this.search(this.keyword)},search:function(e){window.open("https://www.baidu.com/s?wd="+e)},keyup:function(e){var t=this;38!==e.keyCode&&40!==e.keyCode&&(this.index=-1,this.$jsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",{wd:this.keyword,callbackQuery:"cb",callbackName:"jsonpFunc"}).then(function(e){t.keyarr=e.s}))},selectUp:function(){this.index>0&&this.index--,this.keyword=this.keyarr[this.index]},selectDown:function(){this.index<this.keyarr.length-1&&this.index++,this.keyword=this.keyarr[this.index]},selectEnter:function(e){this.search(this.keyword)},onSubmit:function(){console.log("submit!"),this.isloading=!0}}}),r=a,o=(n("b26a"),n("2877")),u=Object(o["a"])(r,i,s,!1,null,"f5226a1e",null);t["default"]=u.exports},"7ae6":function(e,t,n){},"83a1":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},b26a:function(e,t,n){"use strict";var i=n("7ae6"),s=n.n(i);s.a}}]);