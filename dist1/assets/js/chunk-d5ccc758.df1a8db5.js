(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d5ccc758"],{1083:function(t,e,s){"use strict";var n=s("56a4"),i=s.n(n);i.a},"56a4":function(t,e,s){},"57da":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[s("v-head"),s("v-sidebar"),s("div",{staticClass:"content-box",class:{"content-collapse":t.collapse}},[s("v-tags"),s("div",{staticClass:"content"},[s("transition",{attrs:{name:"move",mode:"out-in"}},[s("keep-alive",{attrs:{include:t.tagsList}},[s("router-view")],1)],1)],1)],1)],1)},i=[],l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("div",{staticClass:"collapse-btn",on:{click:t.collapseChage}},[s("i",{staticClass:"el-icon-menu"})]),s("div",{staticClass:"logo"},[t._v("后台管理系统")]),s("div",{staticClass:"header-right"},[s("div",{staticClass:"header-user-con"},[s("div",{staticClass:"btn-fullscreen",on:{click:t.handleFullScreen}},[s("el-tooltip",{attrs:{effect:"dark",content:t.fullscreen?"取消全屏":"全屏",placement:"bottom"}},[s("i",{staticClass:"el-icon-rank"})])],1),s("div",{staticClass:"btn-bell"},[s("el-tooltip",{attrs:{effect:"dark",content:t.message?"有"+t.message+"条未读消息":"消息中心",placement:"bottom"}},[s("router-link",{attrs:{to:"/tabs"}},[s("i",{staticClass:"el-icon-bell"})])],1),t.message?s("span",{staticClass:"btn-bell-badge"}):t._e()],1),t._m(0),s("el-dropdown",{staticClass:"user-name",attrs:{trigger:"click"},on:{command:t.handleCommand}},[s("span",{staticClass:"el-dropdown-link"},[t._v("\n                    "+t._s(t.username)+" "),s("i",{staticClass:"el-icon-caret-bottom"})]),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("a",{attrs:{href:"http://blog.gdfengshuo.com/about/",target:"_blank"}},[s("el-dropdown-item",[t._v("关于作者")])],1),s("a",{attrs:{href:"https://github.com/lin-xin/vue-manage-system",target:"_blank"}},[s("el-dropdown-item",[t._v("项目仓库")])],1),s("el-dropdown-item",{attrs:{divided:"",command:"loginout"}},[t._v("退出登录")])],1)],1)],1)])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-avator"},[n("img",{attrs:{src:s("7159")}})])}],o={data:function(){return{fullscreen:!1,username:"lufei",message:2}},methods:{collapseChage:function(){var t=!this.$store.state.Tagsrecord.collapse;this.$store.commit("Tagsrecord/SET_COLLAPSE",t)},handleCommand:function(t){"loginout"===t&&this.$router.push("/login")},handleFullScreen:function(){var t=document.documentElement;this.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullScreen?t.webkitRequestFullScreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen(),this.fullscreen=!this.fullscreen}}},c=o,r=(s("b233"),s("2877")),u=Object(r["a"])(c,l,a,!1,null,"3bc7bb55",null),d=u.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sidebar"},[s("el-menu",{staticClass:"sidebar-el-menu",attrs:{"default-active":t.activeRoute,collapse:t.collapse,"background-color":"#324157","text-color":"#bfcbd9","active-text-color":"#20a0ff","unique-opened":"",router:""}},[t._l(t.items,function(e){return[e.subs?[s("el-submenu",{key:e.index,attrs:{index:e.index}},[s("template",{slot:"title"},[s("i",{class:e.icon}),s("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])]),t._l(e.subs,function(e){return[e.subs?s("el-submenu",{key:e.index,attrs:{index:e.index}},[s("template",{slot:"title"},[t._v(t._s(e.title))]),t._l(e.subs,function(e,n){return s("el-menu-item",{key:n,attrs:{index:e.index}},[t._v("\n                                "+t._s(e.title)+"\n                            ")])})],2):s("el-menu-item",{key:e.index,attrs:{index:e.index}},[t._v("\n                            "+t._s(e.title)+"\n                        ")])]})],2)]:[s("el-menu-item",{key:e.index,attrs:{index:e.index}},[s("i",{class:e.icon}),s("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])])]]})],2)],1)},p=[],h=(s("a481"),{data:function(){return{items:[{icon:"el-icon-lx-home",index:"dashboard",title:"系统首页"},{icon:"el-icon-lx-cascades",index:"table",title:"基础表格"},{icon:"el-icon-lx-copy",index:"tabs",title:"tab选项卡"},{icon:"el-icon-lx-calendar",index:"3",title:"表单相关",subs:[{index:"form",title:"基本表单"},{index:"3-2",title:"三级菜单",subs:[{index:"editor",title:"富文本编辑器"},{index:"markdown",title:"markdown编辑器"}]},{index:"upload",title:"文件上传"}]},{icon:"el-icon-lx-emoji",index:"icon",title:"自定义图标"},{icon:"el-icon-pie-chart",index:"charts",title:"schart图表"},{icon:"el-icon-rank",index:"6",title:"拖拽组件",subs:[{index:"drag",title:"拖拽列表"},{index:"dialog",title:"拖拽弹框"}]},{icon:"el-icon-lx-global",index:"i18n",title:"国际化功能"},{icon:"el-icon-lx-warn",index:"7",title:"错误处理",subs:[{index:"permission",title:"权限测试"},{index:"404",title:"404页面"}]},{icon:"el-icon-lx-redpacket_fill",index:"/donate",title:"支持作者"}]}},computed:{activeRoute:function(){return this.$route.path.replace("/","")},collapse:function(){return this.$store.state.Tagsrecord.collapse}}}),f=h,g=(s("1083"),Object(r["a"])(f,m,p,!1,null,"6d65a51c",null)),b=g.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.showTags?s("div",{staticClass:"tags"},[s("ul",t._l(t.tagsList,function(e,n){return s("li",{key:n,staticClass:"tags-li",class:{active:t.isActive(e.path)}},[s("router-link",{staticClass:"tags-li-title",attrs:{to:e.path}},[t._v("\n                "+t._s(e.title)+"\n            ")]),s("span",{staticClass:"tags-li-icon",on:{click:function(e){return t.closeTags(n)}}},[s("i",{staticClass:"el-icon-close"})])],1)}),0),s("div",{staticClass:"tags-close-box"},[s("el-dropdown",{on:{command:t.handleTags}},[s("el-button",{attrs:{size:"mini",type:"primary"}},[t._v("\n                标签选项"),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),s("el-dropdown-menu",{attrs:{slot:"dropdown",size:"small"},slot:"dropdown"},[s("el-dropdown-item",{attrs:{command:"other"}},[t._v("关闭其他")]),s("el-dropdown-item",{attrs:{command:"all"}},[t._v("关闭所有")])],1)],1)],1)]):t._e()},x=[],_={data:function(){return{}},computed:{tagsList:function(){return this.$store.state.Tagsrecord.tagsList},showTags:function(){return this.tagsList.length>0}},created:function(){this.$store.commit("Tagsrecord/ADD_TAGSLIST",this.$route)},methods:{isActive:function(t){return t===this.$route.fullPath},closeTags:function(t){this.$store.commit("Tagsrecord/DEL_TAGSLIST",t)},closeAll:function(){this.$store.commit("Tagsrecord/SET_TAGSLIST",[]),this.$router.push("/")},closeOther:function(){var t=this,e=this.tagsList.filter(function(e){return e.path===t.$route.fullPath});this.$store.commit("Tagsrecord/SET_TAGSLIST",e)},handleTags:function(t){"other"===t?this.closeOther():this.closeAll()}}},C=_,w=(s("65f0"),Object(r["a"])(C,v,x,!1,null,null,null)),k=w.exports,T={data:function(){return{}},computed:{collapse:function(){return this.$store.state.Tagsrecord.collapse},tagsList:function(){return this.$store.state.Tagsrecord.tagsList}},components:{vHead:d,vSidebar:b,vTags:k}},S=T,$=Object(r["a"])(S,n,i,!1,null,null,null);e["default"]=$.exports},"65f0":function(t,e,s){"use strict";var n=s("84fc"),i=s.n(n);i.a},7159:function(t,e,s){t.exports=s.p+"assets/img/img.146655c9.jpg"},"84fc":function(t,e,s){},b233:function(t,e,s){"use strict";var n=s("ecb3"),i=s.n(n);i.a},ecb3:function(t,e,s){}}]);