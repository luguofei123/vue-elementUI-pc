!function(e){function t(t){for(var r,a,i=t[0],c=t[1],s=t[2],l=0,h=[];l<i.length;l++)a=i[l],o[a]&&h.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(p&&p(t);h.length;)h.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[];a[e]?t.push(a[e]):0!==a[e]&&{"chunk-0272be8c":1,"chunk-06a530b8":1,"chunk-0e897202":1,"chunk-131b4e33":1,"chunk-2a3bd02a":1,"chunk-33d9f27d":1,"chunk-44545296":1,"chunk-58006ade":1,"chunk-0eeeafc8":1,"chunk-9763b6fc":1,"chunk-707a1d50":1,"chunk-780b062d":1,"chunk-7cd77900":1,"chunk-99ea6fc6":1,"chunk-bbdfcc7a":1,"chunk-c6546178":1,"chunk-f7a56dba":1,"chunk-fb73398c":1}[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="assets/css/"+({pdfjsWorker:"pdfjsWorker"}[e]||e)+".8dd46415a96c440e8fe3.css",o=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=(p=u[c]).getAttribute("data-href")||p.getAttribute("href");if("stylesheet"===p.rel&&(s===r||s===o))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){var p;if((s=(p=l[c]).getAttribute("data-href"))===r||s===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],h.parentNode.removeChild(h),n(u)},h.href=o,document.getElementsByTagName("head")[0].appendChild(h)}).then(function(){a[e]=0}));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(e){return i.p+"assets/js/"+({pdfjsWorker:"pdfjsWorker"}[e]||e)+".8dd46415a96c440e8fe3.js"}(e),u=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");u.type=r,u.request=a,n[1](u)}o[e]=void 0}};var s=setTimeout(function(){u({type:"timeout",target:c})},12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-elementUI-pc/dist/",i.oe=function(e){throw e};var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=s;u.push([0,"chunk-vendors"]),n()}({0:function(e,t,n){e.exports=n("56d7")},"3d39":function(e,t,n){},"4ee2":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"focus",function(){return J}),n.d(r,"tips",function(){return z}),n.d(r,"lazyLoad",function(){return W}),n.d(r,"buttonAuth",function(){return Z});var a={};n.r(a),n.d(a,"formalDate",function(){return ee}),n.d(a,"trim",function(){return te}),n.d(a,"changeCase",function(){return ne}),n.d(a,"repeatStr",function(){return re}),n.d(a,"replaceStr",function(){return ae}),n.d(a,"toDecimal2",function(){return oe}),n("456d"),n("ac6a"),n("cadf"),n("551c"),n("f751"),n("097d");var o=n("8bbf"),u=n.n(o),i=n("2819"),c=n.n(i),s=n("ec7e"),l=n.n(s),p={data:function(){return{}},created:function(){}},h=n("2877"),f=Object(h.a)(p,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},[],!1,null,null,null).exports,d=(n("8e6e"),n("bd86")),m=n("6389"),b=n.n(m),g=n("5880"),y=n.n(g),v={isShowTheme:!1,headStyle:{backgroundColor:"#242f42"},sideStyle:{sideBackgroundColor:"#324157",sideTextColor:"rgb(191, 203, 217)",sideActiveTextColor:"rgb(32, 160, 255)"},collapse:!1,tagsList:[],breadcrumbList:["home","table"],isShowTagList:{flag:!0}},w={doneTodos:function(e){return e.myarr.filter(function(e){return e.done})},isShowTheme:function(e){return e.isShowTheme},isShowTagList:function(e){return e.isShowTagList},headStyle:function(e){return e.headStyle},sideStyle:function(e){return e.sideStyle},collapse:function(e){return e.collapse},tagsList:function(e){return e.tagsList}},k=(n("7f7f"),{namespaced:!0,state:v,getters:w,actions:{setCollapse:function(e){e.commit("SET_COLLAPSE")},setThemeTool:function(e){e.commit("SET_THEME_TOOL")}},mutations:{SET_THEME_TOOL:function(e){var t=!e.isShowTheme;e.isShowTheme=!!t},SET_COLLAPSE:function(e){var t=!e.collapse;e.collapse=!!t},ADD_TAGSLIST:function(e,t){e.tagsList.some(function(e){return e.path===t.fullPath})||(e.tagsList.length>=8&&e.tagsList.shift(),e.tagsList.push({title:t.meta.title,path:t.fullPath,name:t.matched[1].components.default.name}))},DEL_TAGSLIST:function(e,t){var n=e.tagsList.splice(t,1)[0],r=e.tagsList[t]?e.tagsList[t]:e.tagsList[t-1];r?n.path===C.currentRoute.fullPath&&C.push(r.path):C.push("/index/dashboard")},SET_TAGSLIST:function(e,t){e.tagsList=t},SET_BREADCRUBM_LIST:function(e,t){var n=[];t.matched&&t.matched.length>0&&t.matched.forEach(function(e,t){var r={};r.title=e.meta.title,r.path=e.path,r.name=e.name,n.push(r)}),e.breadcrumbList=n}}}),A={userInfo:JSON.parse(sessionStorage.getItem("userInfo"))||{userName:"",userId:0,token:""},authInfo:{menuAuth:[],pageAuth:[],buttonAuth:{}},authRoutes:[{children:!1}]},T=(n("5df3"),n("4f7f"),n("75fc")),E=(n("28a5"),[{path:"/index",redirect:"/dashboard",component:function(e){return n.e("chunk-58006ade").then(function(){var t=[n("bb51")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"主页"},children:[{path:"dashboard",name:"dashboard",component:function(e){return n.e("chunk-c6546178").then(function(){var t=[n("7277")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"系统首页",requiresAuth:!1,passKey:"dashboard"}},{path:"editorTable",name:"editorTable",component:function(e){return n.e("chunk-707a1d50").then(function(){var t=[n("81d7")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"可编辑表格",requiresAuth:!1,passKey:"editorTable"}},{path:"tabs",name:"tabs",component:function(e){return n.e("chunk-131b4e33").then(function(){var t=[n("330b")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"选项卡",requiresAuth:!1,passKey:"tabs"}},{path:"baseform",name:"baseform",component:function(e){return n.e("chunk-2d0c4324").then(function(){var t=[n("3a99")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"基础表单",requiresAuth:!1,passKey:"baseform"}},{path:"editor",name:"editor",component:function(e){return Promise.all([n.e("chunk-6e83591c"),n.e("chunk-9763b6fc")]).then(function(){var t=[n("610f")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"富文本编辑器",requiresAuth:!1,passKey:"editor"}},{path:"editorwang",name:"editorwang",component:function(e){return n.e("chunk-44545296").then(function(){var t=[n("65ab")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"富文本编辑器",requiresAuth:!1,passKey:"editorwang"}},{path:"markdown",name:"markdown",component:function(e){return n.e("chunk-7cd77900").then(function(){var t=[n("d76f")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"markdown编辑器",requiresAuth:!1,passKey:"markdown"}},{path:"BPMN",name:"BPMN",component:function(e){return n.e("chunk-99ea6fc6").then(function(){var t=[n("db9f")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"BPMN流程编辑",requiresAuth:!1,passKey:"BPMN"}},{path:"upload",name:"upload",component:function(e){return n.e("chunk-33d9f27d").then(function(){var t=[n("3d8f")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"文件上传",requiresAuth:!1,passKey:"upload"}},{path:"chart",name:"chart",component:function(e){return n.e("chunk-2d0cc683").then(function(){var t=[n("4e95")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"chart 图标",requiresAuth:!1,passKey:"chart"}},{path:"role",name:"role",component:function(e){return n.e("chunk-2a3bd02a").then(function(){var t=[n("6e48")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"角色列表",requiresAuth:!1,passKey:"role"}},{path:"roleEditor",name:"editorRole",component:function(e){return n.e("chunk-06a530b8").then(function(){var t=[n("a122")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"角色编辑",requiresAuth:!1,passKey:"role"}},{path:"user",name:"user",component:function(e){return n.e("chunk-fb73398c").then(function(){var t=[n("70cf")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"用户列表",requiresAuth:!1,passKey:"user"}},{path:"pdf",name:"pdf",component:function(e){return Promise.all([n.e("chunk-6e83591c"),n.e("chunk-0eeeafc8")]).then(function(){var t=[n("4199")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"pdf预览",requiresAuth:!1,passKey:"pdf"}},{path:"403",name:"403",component:function(e){return n.e("chunk-0272be8c").then(function(){var t=[n("7fa2")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"403错误",requiresAuth:!1,passKey:"403"}},{path:"404",name:"404",component:function(e){return n.e("chunk-f7a56dba").then(function(){var t=[n("2754")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"404错误",requiresAuth:!1,passKey:"404"}},{path:"baidu",name:"baidu",component:function(e){return n.e("chunk-bbdfcc7a").then(function(){var t=[n("62a5")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"模仿百度",requiresAuth:!1,passKey:"baidu"}},{path:"shopcar",name:"shopcar",component:function(e){return n.e("chunk-0e897202").then(function(){var t=[n("c73e")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"购物车",requiresAuth:!1,passKey:"shopcar"}}]}]),S=void 0,O={namespaced:!0,state:A,getters:{menuAuth:function(e){var t=e.authInfo.menuAuth.slice(),n=[];return e.authInfo.menuAuth.forEach(function(e){switch(n=e.split("-"),n.length-1){case 1:t.push(n[0]);break;case 2:t.push(n[0]),t.push(n[0]+"-"+n[1])}}),t=Object(T.a)(new Set(t))},pageAuth:function(e){return e.authInfo.pageAuth},buttonAuth:function(e){return e.authInfo.buttonAuth}},actions:{setAuthInfo:function(e,t){e.commit("SET_AUTH_INFO",t)},setAuthRouter:function(e){var t,n,r=x.state.auth.authInfo.pageAuth;0!==r.length?E[0].children=(t=E[0].children,n=r,t.filter(function(e){return!!function(e,t){return e.some(function(e){return e===t})}(n,e.meta.passKey)&&(e.children&&e.children.length&&(e.children=S.filterAsyncMenu(e.children,n)),!0)})):E[0].children=[],e.commit("SET_ROUTER",E)}},mutations:{SET_USER_INFO:function(e,t){e.userInfo=t,sessionStorage.setItem("userInfo",JSON.stringify(t))},SET_AUTH_INFO:function(e,t){e.authInfo=t},SET_ROUTER:function(e,t){e.authRoutes=t}}};u.a.use(y.a);var x=new y.a.Store({modules:{tagsRecord:k,auth:O}}),L=n("323e"),_=n.n(L),P=(n("a5d8"),[{path:"/",redirect:"/login"},{path:"/login",name:"login",component:function(e){return n.e("chunk-780b062d").then(function(){var t=[n("a55b")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/403",name:"403",component:function(e){return n.e("chunk-0272be8c").then(function(){var t=[n("7fa2")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]);function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}u.a.use(b.a);var R=new b.a({mode:"history",base:"/vue-elementUI-pc/dist/",routes:P}),j={menuAuth:["1","2","2-1","2-2","3","3-1","4","5","5-1","5-2","5-2-1","5-2-2","5-2-3","5-2-4","6","7","8","9","9-1","9-2","10","11","11-1","11-2","11-3","12","13","14"],pageAuth:["dashboard","role","user","editorTable","tabs","baseform","editor","editorwang","markdown","BPMN","upload","icon","chart","drag","dialog","i18n","permission","404","pdf","baidu","shopcar"],buttonAuth:{role:["add","delete"]}};R.beforeEach(function(e,t,n){""===x.state.auth.userInfo.token?"/login"===e.path?(_.a.start(),n()):(_.a.start(),n("/login")):0===x.state.auth.authInfo.pageAuth.length?(x.commit("auth/SET_AUTH_INFO",j),x.dispatch("auth/setAuthRouter").then(function(){R.addRoutes(x.state.auth.authRoutes),R.addRoutes([{path:"*",redirect:"/403",hidden:!0}]),_.a.start(),n(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(n,!0).forEach(function(t){Object(d.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{replace:!0}))}).catch(function(e){})):(_.a.start(),n()),-1!==e.path.indexOf("index/")&&e.meta.title&&(x.commit("tagsRecord/ADD_TAGSLIST",e),x.commit("tagsRecord/SET_BREADCRUBM_LIST",e))}),R.afterEach(function(e){_.a.done()});var C=R,M=(n("4ee2"),n("3d39"),n("59fe"),n("e2b8"),n("5c96")),q=n.n(M),N=(n("a481"),n("cebe")),U=n.n(N).a.create({timeout:5e3,baseURL:"http://127.0.0.1:4886"});U.interceptors.request.use(function(e){if(x.state&&x.state.authen&&x.state.authen.loginmessage){var t=x.state.authen.loginmessage,n=JSON.parse(t);n.token&&(e.headers.Authorization=n.token,e.headers.UserId=n.userId,e.headers.CompanyId=n.companyId)}return e},function(e){return Promise.error(e)});var K=function(e,t){switch(e){case 401:M.Message.error({message:"未登录状态，跳转登录页"}),C.replace({path:"/login",query:{redirect:C.currentRoute.fullPath}});break;case 403:M.Message.error({message:"token过期 清楚token 跳转登录页"});break;case 500:M.Message.error({message:"服务器错误"})}};U.interceptors.response.use(function(e){return 200===e.status?Promise.resolve(e.data):Promise.reject(e.data)},function(e){var t=e.response;if(t)return K(t.status,t.data.message),Promise.reject(t)});var B=U,D=n("4328"),$=n.n(D),H={loginPage:{login:function(e){return B.post("/usermanager/login.php",$.a.stringify(e))},changePassword:function(e){return B.post("/usermanager/updatePassword",$.a.stringify(e))},login1:function(e){return B.post("/usermanager/login",e,{timeout:5e3,headers:{"Content-Type":"application/x-www-form-urlencoded"}})},login2:function(e){var t=$.a.stringify(e);return B({url:"/usermanager/login?".concat(t),method:"POST",data:e})}},pdfPage:{getPdfContent:function(){return B.get("/usermanager/echo.php")}},tablePage:{getData:function(e){return B.post("/usermanager/table.php",$.a.stringify(e))}}},V=new u.a({data:{count:10}}),X={name:"tipsBar",props:{option:{type:Object,default:function(){return{isVisible:!1,title:"提示",message:"删除不可恢复，是否确定删除？"}}}},data:function(){return{}},methods:{nextEvent:function(e){this.option.isVisible=!1,e&&this.$emit("deleteList",e)}}},F=Object(h.a)(X,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{title:e.option.title,visible:e.option.isVisible,width:"300px",center:""},on:{"update:visible":function(t){return e.$set(e.option,"isVisible",t)}}},[n("div",{staticClass:"del-dialog-cnt"},[e._v(e._s(e.option.message))]),e._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){return e.nextEvent(!1)}}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.nextEvent(!0)}}},[e._v("确 定")])],1)])},[],!1,null,"072bdcba",null).exports;u.a.component("tips-bar",F);var J={bind:function(e,t,n){},inserted:function(e,t,n){e.children[0].focus()},update:function(e,t,n){},componentUpdated:function(e,t,n){},unbind:function(e,t,n){}},z={bind:function(e,t,n){var r=!1;e.onmouseover=function(){if(!r){var n,a,o=document.createElement("div");switch("static"===getComputedStyle(e,null).getPropertyValue("position")&&(e.style.position="relative"),o.id="tip",Object.keys(t.modifiers)[0]){case"left":a=0,n="-12px";break;case"right":a=0,n="12px";break;case"top":a="-12px",n=0;break;case"bottom":a="12px",n=0}o.innerHTML=t.value,o.style.position="absolute",o.style.fontSize="12px",o.style.top=a,o.style.left=n,o.style.color="red",o.style.padding="3px 6px",o.style.background="#000",e.append(o),r=!0}},e.onmouseout=function(){document.getElementById("tip").remove(),r=!1}},inserted:function(e,t,n){},update:function(e,t,n){},componentUpdated:function(e,t,n){},unbind:function(e,t,n){}},G=[],W={bind:function(e,t,n){e.src="https://gw.alicdn.com/tps/i1/TB147JCLFXXXXc1XVXXxGsw1VXX-112-168.png",G=[]},inserted:function(e,t,n){e.parentElement.addEventListener("scroll",function(){-1===G.indexOf(t.value)&&e.getBoundingClientRect().top<e.parentElement.offsetTop+e.parentElement.offsetHeight&&e.getBoundingClientRect().top>e.parentElement.offsetTop-e.clientHeight&&(e.src=t.value,G.push(t.value))})},update:function(e,t,n){},componentUpdated:function(e,t,n){},unbind:function(e,t,n){}},Y=function(e,t){return e.some(function(e){return e===t})},Z={bind:function(e,t,n){},inserted:function(e,t,n){var r=e.tagName,a=x.state.auth.authInfo.buttonAuth,o=C.currentRoute.meta.passKey;switch(r){case"BUTTON":a[o]&&a[o].length>0&&Y(a[o],Object.keys(t.modifiers)[0])&&(e.setAttribute("disabled",!0),e.setAttribute("title","没有权限查看"),e.classList.add("is-disabled"),e.style.color="#c8c5ce");break;case"A":if(a[o]&&a[o].length>0&&Y(a[o],Object.keys(t.modifiers)[0])){var u=document.createElement("button");u.innerHTML=e.innerHeight,u.setAttribute("disabled",!0),u.setAttribute("title","没有权限查看"),u.style.border="none",u.style.backgroundColor="none",u.style.padding="5px",e.style={},e.innerHTML="",e.onclick=null,e.appendChild(u)}}},update:function(e,t,n){},componentUpdated:function(e,t,n){},unbind:function(e,t,n){}},Q=(n("3b2b"),function(e){return""===function(e){return e.replace(/(^\s*)|(\s*$)/g,"")}(e)||null===e||void 0===e}),ee=function(e,t){if(Q(e))return"-";var n=new Date(e),r={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"w+":n.getDay(),"q+":Math.floor((n.getMonth()+3)/3),S:n.getMilliseconds()};for(var a in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length))),r)"w+"===a?0===r[a]?t=t.replace("w","周日"):1===r[a]?t=t.replace("w","周一"):2===r[a]?t=t.replace("w","周二"):3===r[a]?t=t.replace("w","周三"):4===r[a]?t=t.replace("w","周四"):5===r[a]?t=t.replace("w","周五"):6===r[a]&&(t=t.replace("w","周六")):new RegExp("("+a+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?r[a]:("00"+r[a]).substr((""+r[a]).length)));return t},te=function(e,t){switch(t){case"all":return e.replace(/\s*/g,"");case"fandb":return e.replace(/^\s+/g,"").replace(/\s+$/g,"");case"front":return e.replace(/^\s+/g,"");case"behind":return e.replace(/\s+$/g,"");default:return e}},ne=function(e,t){switch(t){case 1:return e.replace(/\b\w+\b/g,function(e){return e.substring(0,1).toUpperCase()+e.substring(1).toLowerCase()});case 2:return e.replace(/\b\w+\b/g,function(e){return e.substring(0,1).toLowerCase()+e.substring(1).toUpperCase()});case 3:return function(e){var t="";return e.split("").forEach(function(e){/^([a-z]+)/.test(e)?t+=e.toUpperCase():/^([A-Z]+)/.test(e)?t+=e.toLowerCase():t+=e}),t}(e);case 4:return e.toUpperCase();case 5:return e.toLowerCase();default:return e}},re=function(e,t){if(Q(e))return"-";for(var n="",r=0;r<t;r++)n+=e;return n},ae=function(e,t,n,r){var a="",o=null,u=r||"*";if(3===t.length&&0===n){a="(\\w{"+t[0]+"})\\w{"+t[1]+"}(\\w{"+t[2]+"})",o=new RegExp(a);var i=re(u,t[1]);return e.replace(o,"$1"+i+"$2")}if(3===t.length&&1===n){a="\\w{"+t[0]+"}(\\w{"+t[1]+"})\\w{"+t[2]+"}",o=new RegExp(a);var c=re(u,t[0]),s=re(u,t[2]);return e.replace(o,c+"$1"+s)}if(1===t.length&&0===n){a="(^\\w{"+t[0]+"})",o=new RegExp(a);var l=re(u,t[0]);return e.replace(o,l)}if(1===t.length&&1===n){a="(\\w{"+t[0]+"}$)",o=new RegExp(a);var p=re(u,t[0]);return e.replace(o,p)}},oe=(n("6b54"),function(e){var t=parseFloat(e);if(isNaN(t))return!1;var n=(t=Math.round(100*e)/100).toString(),r=n.indexOf(".");for(r<0&&(r=n.length,n+=".");n.length<=r+2;)n+="0";return n});Object.keys(r).forEach(function(e){return u.a.directive(e,r[e])}),Object.keys(a).forEach(function(e){return u.a.filter(e,a[e])}),u.a.use(c.a),u.a.use(l.a),u.a.prototype.$MyAxios=H,u.a.prototype.$EventBus=V,u.a.config.productionTip=!1,u.a.use(q.a,{size:"small"}),new u.a({router:C,store:x,render:function(e){return e(f)}}).$mount("#app")},5880:function(e,t){e.exports=Vuex},"59fe":function(e,t,n){},6389:function(e,t){e.exports=VueRouter},"8bbf":function(e,t){e.exports=Vue},cebe:function(e,t){e.exports=axios},e2b8:function(e,t,n){}});