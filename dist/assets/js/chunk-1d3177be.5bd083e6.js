(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d3177be"],{a3d7:function(e,t,i){"use strict";var s=i("bc10"),c=i.n(s);c.a},bc10:function(e,t,i){},c73e:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"shoplist"},[i("table",[i("tr",{staticClass:"heartr"},[i("td",{attrs:{width:"40"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isCheckedAll,expression:"isCheckedAll"}],attrs:{type:"checkbox",id:"headtd"},domProps:{checked:Array.isArray(e.isCheckedAll)?e._i(e.isCheckedAll,null)>-1:e.isCheckedAll},on:{change:function(t){var i=e.isCheckedAll,s=t.target,c=!!s.checked;if(Array.isArray(i)){var n=null,a=e._i(i,n);s.checked?a<0&&(e.isCheckedAll=i.concat([n])):a>-1&&(e.isCheckedAll=i.slice(0,a).concat(i.slice(a+1)))}else e.isCheckedAll=c}}}),i("label",{attrs:{for:"headtd"},on:{click:e.checkAll}})]),i("td",{attrs:{width:"100"}},[e._v("全选")]),i("td",{attrs:{width:"540"}},[e._v("信息")]),i("td",{attrs:{width:"100"}},[e._v("单价")]),i("td",{attrs:{width:"160"}},[e._v("数量")]),i("td",{attrs:{width:"100"}},[e._v("小记")]),i("td",{attrs:{width:"100"}},[e._v("操作")])]),e._l(e.lists,function(t,s){return i("tr",{key:s,staticClass:"contenttr"},[i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isChecked[s],expression:"isChecked[index]"}],attrs:{type:"checkbox",id:s},domProps:{checked:Array.isArray(e.isChecked[s])?e._i(e.isChecked[s],null)>-1:e.isChecked[s]},on:{click:e.checkOne,change:function(t){var i=e.isChecked[s],c=t.target,n=!!c.checked;if(Array.isArray(i)){var a=null,r=e._i(i,a);c.checked?r<0&&e.$set(e.isChecked,s,i.concat([a])):r>-1&&e.$set(e.isChecked,s,i.slice(0,r).concat(i.slice(r+1)))}else e.$set(e.isChecked,s,n)}}}),i("label",{attrs:{for:s}})]),e._m(0,!0),i("td",{staticStyle:{"text-align":"left"}},[i("p",[e._v(e._s(t.goodsTitle))]),i("p",[e._v(e._s(t.specifications))])]),i("td",[e._v("￥"+e._s(t.unitPrice))]),i("td",[i("div",{staticStyle:{position:"relative"}},[i("span",{staticStyle:{"margin-right":"40px"},on:{click:function(t){return e.minus(s)}}},[e._v("-")]),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.purchaseQuantity,expression:"item.purchaseQuantity",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.purchaseQuantity},on:{input:function(i){i.target.composing||e.$set(t,"purchaseQuantity",e._n(i.target.value))},blur:function(t){return e.$forceUpdate()}}}),i("span",{on:{click:function(t){return e.add(s)}}},[e._v("+")])])]),i("td",[e._v("￥"+e._s(t.unitPrice*t.purchaseQuantity))]),i("td",[i("button",{on:{click:function(t){return e.deleteList(s)}}},[e._v("删除")])])])}),i("tr",{staticClass:"foottr"},[i("td",{attrs:{colspan:"2"}},[e._v("已选（"+e._s(e.checkedNumber)+"）")]),i("td",{staticStyle:{"text-align":"right"},attrs:{colspan:"5"}},[i("span",[e._v("商品合计金额：")]),i("span",[e._v("￥"+e._s(e.total))]),e._v("    \n        "),i("button",[e._v("下单")])])])],2)])},c=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("td",[i("img",{attrs:{src:""}})])}],n=(i("ac6a"),{data:function(){return{lists:[],isCheckedAll:!1,isChecked:[]}},computed:{total:function(){var e=0;for(var t in this.lists)!0===this.isChecked[t]&&(e+=this.lists[t]["unitPrice"]*this.lists[t]["purchaseQuantity"]);return e.toFixed(2)},checkedNumber:function(){var e=0;return this.isChecked.forEach(function(t){!0===t&&(e+=1)}),e}},created:function(){this.lists=[{goodsTitle:"旺仔小馒头",specifications:"10盒装",unitPrice:"35",subimage1Filename:"20180317feftyp.jpg",purchaseQuantity:2},{goodsTitle:"矿泉水",specifications:"10盒装",unitPrice:"35",subimage1Filename:"20180317feftyp.jpg",purchaseQuantity:2},{goodsTitle:"黄鹤楼",specifications:"10盒装",unitPrice:"245",subimage1Filename:"20180317feftyp.jpg",purchaseQuantity:1}],this.isChecked=new Array(this.lists.length)},methods:{checkAll:function(){if(!0!==this.isCheckedAll)for(var e=0;e<this.isChecked.length;e++)this.$set(this.isChecked,e,!0);else for(var t=0;t<this.isChecked.length;t++)this.$set(this.isChecked,t,!1)},checkOne:function(){var e=this;setTimeout(function(){console.log(e.checkedNumber),console.log(e.isChecked.length),e.checkedNumber<e.isChecked.length&&(e.isCheckedAll=!1),e.checkedNumber===e.isChecked.length&&(e.isCheckedAll=!0)},0)},add:function(e){this.lists[e].purchaseQuantity++},minus:function(e){this.lists[e].purchaseQuantity>0?this.lists[e].purchaseQuantity--:alert("请输入比0大的整数")},deleteList:function(e){this.lists.splice(e,1),this.isChecked.splice(e,1)}}}),a=n,r=(i("a3d7"),i("2877")),l=Object(r["a"])(a,s,c,!1,null,"452cb9c5",null);t["default"]=l.exports}}]);