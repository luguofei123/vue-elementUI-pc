(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2a3bd02a"],{"0855":function(e,t,a){"use strict";var n=a("75fc"),i=(a("c5f6"),{name:"tableBar",props:{data:{type:Array,default:function(){return[]}},loading:{type:Boolean,default:!0},index:{type:Number,dafault:NaN},indexType:{type:String,default:"#"},multipleSelection:{type:Array,default:function(){return[]}}},data:function(){return{columns:[]}},filters:{dataFilter:function(e){return e+"这是过滤后的"},nameFilter:function(e){return"姓名："+e}},created:function(){var e=this;setTimeout(function(){e.columns=[{prop:"date",label:"日期",width:"250",sortable:!1,filters:"formalDate"},{prop:"name",label:"姓名",width:"150",sortable:!0,filters:"nameFilter"},{prop:"address",label:"地址",width:"250",sortable:!0},{prop:"nation1",label:"民族1",width:"250",sortable:!0},{prop:"nation2",label:"民族2",width:"150",sortable:!0},{prop:"nation3",label:"民族3",width:"150",sortable:!0},{prop:"nation4",label:"民族4",width:"150",sortable:!0}]},1e3)},methods:{alertEdit:function(e,t){this.$emit("handleEdit",e,t)},skipEdit:function(e,t){this.$router.push({path:"/index/roleEditor",params:{id:t.id}})},handleDelete:function(e,t){this.$emit("handleDelete",e,t)},handleSelectionChange:function(e){var t;this.multipleSelection.splice(0,this.multipleSelection.length),(t=this.multipleSelection).push.apply(t,Object(n.a)(e))},handleEditInRows:function(e,t){this.$emit("update:index",e)},cancelEditInRows:function(e,t){this.$emit("update:index",NaN),t.id&&""!==t.id||this.data.shift()},save:function(e,t){this.$emit("update:index",NaN)},formatterAddress:function(e){return e.address+"dddd"}}}),r=(a("faf2"),a("2877")),l=Object(r.a)(i,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"table",staticClass:"table",staticStyle:{width:"100%"},attrs:{data:e.data,border:"",size:"mini","element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"},on:{"selection-change":e.handleSelectionChange}},["expand"===e.indexType?[a("el-table-column",{attrs:{type:"expand"}},[a("span",[e._v("11")])])]:e._e(),e._v(" "),"select"===e.indexType?[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}})]:e._e(),e._v(" "),"#"===e.indexType?[a("el-table-column",{attrs:{type:"index",width:"55",align:"center"}})]:e._e(),e._v(" "),"序号"===e.indexType?[a("el-table-column",{attrs:{label:"序号",width:"55",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.$index+1))])]}}],null,!1,4178052834)})]:e._e(),e._v(" "),e._l(e.columns,function(t){return[a("el-table-column",{key:t.prop,attrs:{prop:t.prop,width:t.width,label:t.label,align:"center",sortable:t.sortable,formatter:t.formatter},scopedSlots:e._u([{key:"default",fn:function(n){var i=n.row;return[n.$index===e.index?a("el-input",{model:{value:i[t.prop],callback:function(a){e.$set(i,t.prop,a)},expression:"row[column.prop]"}}):["formalDate"===t.filters?a("span",[e._v(e._s(e._f("replaceStr")(e._f("formalDate")(i[t.prop],"yyyyMMddhhmmss"),[3,4,5],0)))]):e._e(),e._v(" "),"nameFilter"===t.filters?a("span",[e._v(e._s(e._f("repeatStr")(i[t.prop],3)))]):e._e(),e._v(" "),void 0===t.filters?a("span",[e._v(e._s(i[t.prop]))]):e._e()]]}}],null,!0)})]}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"280",align:"center",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.$index===e.index?a("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.cancelEditInRows(t.$index,t.row)}}},[e._v("取消行内编辑")]):e._e(),e._v(" "),t.$index===e.index?a("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.save(t.$index,t.row)}}},[e._v("保存")]):e._e(),e._v(" "),t.$index!==e.index?a("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.handleEditInRows(t.$index,t.row)}}},[e._v("行内编辑")]):e._e(),e._v(" "),a("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.alertEdit(t.$index,t.row)}}},[e._v("弹出框编辑")]),e._v(" "),a("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.skipEdit(t.$index,t.row)}}},[e._v("页面跳转编辑")]),e._v(" "),a("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],2)],1)},[],!1,null,"8b9f2b7a",null);t.a=l.exports},"6e48":function(e,t,a){"use strict";a.r(t),a("7f7f");var n=a("99d4"),i=a("0855"),r=a("ea40"),l=a("b32d"),o=a("9da0"),s={components:{searchBar:n.a,tableBar:i.a,pageBar:r.a,editForm:l.a,actionBar:o.a},data:function(){return{index:NaN,total:0,currentPage:1,pageSize:10,tableLoading:!1,tableData:[],multipleSelection:[],select_cate:"",filter:{},del_list:[],is_search:!1,editVisible:!1,editOption:{isVisible:!1},tipsOption:{isVisible:!1,title:"警告",message:"确定要删除吗？"}}},created:function(){},watch:{},computed:{},methods:{handleCurrentChange:function(e){this.currentPage=e,this.getData()},handleSizeChange:function(e){this.pageSize=e,this.getData()},search:function(e){this.filter=e,this.getData()},getData:function(){var e=this;this.tableLoading=!0,this.tableData.splice(0,this.tableData.length);for(var t=1;t<11;t++)this.tableData.push({id:t,date:"2019",name:"luguofei"+t,address:"dddddd"+t});var a=100*Math.random();this.total=parseInt(a),setTimeout(function(){e.tableLoading=!1},500)},handleEdit:function(e,t){this.idx=e,this.id=t.id,this.form={id:t.id,name:t.name,date:t.date,address:t.address},this.editOption.isVisible=!0},handleDelete:function(e,t){this.idx=e,this.id=t.id,this.tipsOption.isVisible=!0},handleSelectionChange:function(e){this.multipleSelection=e},deleteList:function(){this.$message.success("删除成功")},addRow:function(){this.tableData.unshift({id:"",date:"",name:"",address:""}),this.index=0},deleteRow:function(){}}},d=(a("d4ab"),a("2877")),c=Object(d.a)(s,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"search-box"},[a("search-bar",{attrs:{roleName:""},on:{search:e.search}})],1),e._v(" "),a("el-divider"),e._v(" "),a("div",{staticClass:"action-box"},[a("action-bar",{on:{addRow:e.addRow,deleteRow:e.deleteRow}})],1),e._v(" "),a("div",{staticClass:"result-box"},[a("table-bar",{attrs:{index:e.index,indexType:"#",multipleSelection:e.multipleSelection,data:e.tableData,loading:e.tableLoading},on:{"update:index":function(t){e.index=t},getData:e.getData,handleEdit:e.handleEdit,handleDelete:e.handleDelete}})],1),e._v(" "),a("div",{staticClass:"pagination-box"},[a("page-bar",{attrs:{total:e.total},on:{handleSizeChange:e.handleSizeChange,handleCurrentChange:e.handleCurrentChange}})],1),e._v(" "),a("edit-form",{attrs:{option:e.editOption}}),e._v(" "),a("tips-bar",{attrs:{option:e.tipsOption},on:{deleteList:e.deleteList}})],1)},[],!1,null,"c206326c",null);t.default=c.exports},"99d4":function(e,t,a){"use strict";a("456d"),a("ac6a");var n={name:"searchBar",props:{roleName:{type:Boolean,default:!1},address:{type:Boolean,default:!1},userName:{type:Boolean,default:!1}},data:function(){return{searchData:{roleName:"",userName:"",address:""}}},created:function(){this.filterSearch()},methods:{filterSearch:function(){var e=this;Object.keys(this._props).forEach(function(t){e._props[t]||delete e.searchData[t]})},search:function(){this.$emit("search",this.searchData)},reset:function(){for(var e in this.searchData)this.searchData[e]="";this.$emit("search",this.searchData)}}},i=a("2877"),r=Object(i.a)(n,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{attrs:{inline:!0,model:e.searchData}},[e.roleName?[a("el-form-item",{attrs:{label:"角色名称"}},[a("el-input",{attrs:{placeholder:"筛选关键词"},model:{value:e.searchData.roleName,callback:function(t){e.$set(e.searchData,"roleName",t)},expression:"searchData.roleName"}})],1)]:e._e(),e._v(" "),e.address?[a("el-form-item",{attrs:{label:"用户地址"}},[a("el-input",{attrs:{placeholder:"筛选关键词"},model:{value:e.searchData.address,callback:function(t){e.$set(e.searchData,"address",t)},expression:"searchData.address"}})],1)]:e._e(),e._v(" "),e.userName?[a("el-form-item",{attrs:{label:"用户地址"}},[a("el-input",{attrs:{placeholder:"筛选关键词"},model:{value:e.searchData.userName,callback:function(t){e.$set(e.searchData,"userName",t)},expression:"searchData.userName"}})],1)]:e._e(),e._v(" "),a("el-form-item",[a("el-button",{directives:[{name:"buttonAuth",rawName:"v-buttonAuth.add",modifiers:{add:!0}}],attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.search}},[e._v("搜索")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.reset}},[e._v("重置")])],1)],2)],1)},[],!1,null,"7e8604a3",null);t.a=r.exports},"9da0":function(e,t,a){"use strict";var n={data:function(){return{}},methods:{addRow:function(){this.$emit("addRow")},deleteRow:function(){this.$emit("deleteRow")}}},i=a("2877"),r=Object(i.a)(n,function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("el-button",{attrs:{type:"success"},on:{click:this.addRow}},[this._v("新增")]),this._v(" "),t("el-button",{attrs:{type:"danger"},on:{click:this.deleteRow}},[this._v("删除")])],1)},[],!1,null,"d204b482",null);t.a=r.exports},aa77:function(e,t,a){var n=a("5ca1"),i=a("be13"),r=a("79e5"),l=a("fdef"),o="["+l+"]",s=RegExp("^"+o+o+"*"),d=RegExp(o+o+"*$"),c=function(e,t,a){var i={},o=r(function(){return!!l[e]()||"​"!="​"[e]()}),s=i[e]=o?t(u):l[e];a&&(i[a]=s),n(n.P+n.F*o,"String",i)},u=c.trim=function(e,t){return e=String(i(e)),1&t&&(e=e.replace(s,"")),2&t&&(e=e.replace(d,"")),e};e.exports=c},b32d:function(e,t,a){"use strict";var n={name:"editForm",props:{option:{type:Object,default:function(){return{isVisible:!1}}}},data:function(){return{form:{data:"",name:"",address:""}}},watch:{},methods:{saveEdit:function(){},cancelEdit:function(){}}},i=a("2877"),r=Object(i.a)(n,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"编辑",visible:e.option.isVisible,width:"30%"},on:{"update:visible":function(t){return e.$set(e.option,"isVisible",t)}}},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"50px"}},[a("el-form-item",{attrs:{label:"日期"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.form.date,callback:function(t){e.$set(e.form,"date",t)},expression:"form.date"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"地址"}},[a("el-input",{model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.option.isVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.saveEdit}},[e._v("确 定")])],1)],1)},[],!1,null,"491409a0",null);t.a=r.exports},c10c:function(e,t,a){},c5f6:function(e,t,a){"use strict";var n=a("7726"),i=a("69a8"),r=a("2d95"),l=a("5dbc"),o=a("6a99"),s=a("79e5"),d=a("9093").f,c=a("11e9").f,u=a("86cc").f,f=a("aa77").trim,p=n.Number,h=p,m=p.prototype,b="Number"==r(a("2aeb")(m)),v="trim"in String.prototype,g=function(e){var t=o(e,!1);if("string"==typeof t&&t.length>2){var a,n,i,r=(t=v?t.trim():f(t,3)).charCodeAt(0);if(43===r||45===r){if(88===(a=t.charCodeAt(2))||120===a)return NaN}else if(48===r){switch(t.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+t}for(var l,s=t.slice(2),d=0,c=s.length;d<c;d++)if((l=s.charCodeAt(d))<48||l>i)return NaN;return parseInt(s,n)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof p&&(b?s(function(){m.valueOf.call(a)}):"Number"!=r(a))?l(new h(g(t)),a,p):g(t)};for(var _,x=a("9e1e")?d(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;x.length>y;y++)i(h,_=x[y])&&!i(p,_)&&u(p,_,c(h,_));p.prototype=m,m.constructor=p,a("2aba")(n,"Number",p)}},d265:function(e,t,a){},d4ab:function(e,t,a){"use strict";var n=a("c10c");a.n(n).a},ea40:function(e,t,a){"use strict";a("c5f6");var n={name:"pageBar",props:{pageConfig:{type:Object,default:function(){return{pageSizes:[10,20,30,40],currentPage:1,pageSize:10}}},total:{type:Number,default:0}},data:function(){return{}},methods:{handleSizeChange:function(e){this.$emit("handleSizeChange",e)},handleCurrentChange:function(e){this.$emit("handleCurrentChange",e)}}},i=a("2877"),r=Object(i.a)(n,function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("el-pagination",{attrs:{"current-page":this.pageConfig.currentPage,"page-sizes":this.pageConfig.pageSizes,"page-size":this.pageConfig.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:this.total},on:{"size-change":this.handleSizeChange,"current-change":this.handleCurrentChange}})],1)},[],!1,null,"32eae816",null);t.a=r.exports},faf2:function(e,t,a){"use strict";var n=a("d265");a.n(n).a},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);