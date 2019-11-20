<template>
<div class="container">
  <table>
    <tr class="heartr">
      <td width="40">
        <input type="checkbox"  id="headtd" v-model="isCheckedAll" >
        <label for="headtd" v-on:click="checkAll"></label>
      </td>
      <td width="100">全选</td>
      <td width="540">信息</td>
      <td width="100">单价</td>
      <td width="160">数量</td>
      <td width="100">小记</td>
      <td width="100">操作</td>
    </tr>
    <tr class="contenttr" v-for="(item,index) in lists" v-bind:key="index">
      <td>
        <input type="checkbox" v-on:click="checkOne"  :id="index" v-model="isChecked[index]" >
        <label :for="index"></label>
      </td>
      <td><img src="" /></td>
      <td style="text-align:left;">
        <p>{{item.goodsTitle}}</p>
        <p>{{item.specifications}}</p>
      </td>
      <td>￥{{item.unitPrice}}</td>
      <td>
        <div style="position:relative;">
         <span style="margin-right:40px;" v-on:click="minus(index)">-</span>
         <input type="number" v-model.number="item.purchaseQuantity"  />
        <span v-on:click="add(index)">+</span>
        </div>
        </td>
        <td>￥{{item.unitPrice*item.purchaseQuantity}}</td>
        <td ><button v-on:click="deleteList(index)">删除</button></td>
        </tr>
        <tr class="foottr">
        <td colspan="2">已选（{{checkedNumber}}）</td>
        <td colspan="5" style="text-align:right;">
        <span>商品合计金额：</span>
        <span>￥{{total}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <button>下单</button>
        </td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lists: [],
      isCheckedAll: false,
      isChecked: []
    }
  },
  computed: {
    total () {
      let t = 0
      for (let i in this.lists) {
        if (this.isChecked[i] === true) {
          t += this.lists[i]['unitPrice'] * this.lists[i]['purchaseQuantity']
        }
      }
      return t.toFixed(2)
    },
    checkedNumber () {
      let n = 0
      this.isChecked.forEach((value) => {
        if (value === true) {
          n = n + 1
        }
      })
      return n
    }
  },
  created: function () {
    // 数据请求
    this.lists = [
      {
        goodsTitle: '旺仔小馒头',
        specifications: '10盒装',
        unitPrice: '35',
        subimage1Filename: '20180317feftyp.jpg',
        purchaseQuantity: 2
      },
      {
        goodsTitle: '矿泉水',
        specifications: '10盒装',
        unitPrice: '35',
        subimage1Filename: '20180317feftyp.jpg',
        purchaseQuantity: 2
      },
      {
        goodsTitle: '黄鹤楼',
        specifications: '10盒装',
        unitPrice: '245',
        subimage1Filename: '20180317feftyp.jpg',
        purchaseQuantity: 1
      }
    ]
    this.isChecked = new Array(this.lists.length)
  },
  methods: {
    checkAll () {
      if (this.isCheckedAll !== true) {
        // 全选时
        for (let i = 0; i < this.isChecked.length; i++) {
          // this.checkeds[i] =true;
          this.$set(this.isChecked, i, true)
        }
      } else {
        // 取消全选时
        for (let i = 0; i < this.isChecked.length; i++) {
          // this.checkeds[i] =true;
          this.$set(this.isChecked, i, false)
        }
      }
    },
    checkOne () {
      // 因为check选中的点击事件先触发的是点击事件，然后是值得改变，要想获取到值，这里采取了延时异步获取。
      setTimeout(() => {
        console.log(this.checkedNumber)
        console.log(this.isChecked.length)
        if (this.checkedNumber < this.isChecked.length) {
          this.isCheckedAll = false
        }
        if (this.checkedNumber === this.isChecked.length) {
          this.isCheckedAll = true
        }
      }, 0)
    },
    add (index) {
      this.lists[index].purchaseQuantity++
    },
    minus (index) {
      if (this.lists[index].purchaseQuantity > 0) {
        this.lists[index].purchaseQuantity--
      } else {
        alert('请输入比0大的整数')
      }
    },
    deleteList (index) {
      this.lists.splice(index, 1)
      this.isChecked.splice(index, 1)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{height:560px;}
table { width: 100%;   text-align: center; border-collapse: collapse;border:1px solid #0094ff;}
table tr td {border-bottom:1px solid #0094ff;border-top:1px solid #0094ff; }
.heartr{height:60px;background:#dedede;}
.contenttr{height:100px;}
.contenttr p{font-size: 12px;}
.contenttr img{width:80px;height:80px;margin-top: 8px;}
button{border:none;line-height: 14px;padding: 7px 15px;background: #999;color: #FFFFFF;}
button:hover{background: red;}
input[type="checkbox"]{
        position:absolute;
        width:40px;
        height:40px;
        visibility: hidden;
        background: #fff;
    }
input[type="number"]{
        position:absolute;
        left:76px;
        width:46px;
        height:25px;
        background: #fff;
        text-align: center;
        border:none;
        border-bottom: 1px solid #d6d7dc;
        border-top: 1px solid #d6d7dc;
        border-left: 1px solid #d6d7dc;
        border-right: 1px solid #d6d7dc;
        margin-left:-4px;
        margin-right:-4px;
        outline: none;
        -moz-appearance: textfield;
    }
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    input + label{
        display: inline-block;
        width: 16px;
        height: 16px;
        background: #fff url(../../assets/img/m_checked01.png) center no-repeat;
        /*background-position: -31px 0px;*/
        border: 1px solid #d6d7dc;
    }
    input:checked +label{
        display: inline-block;
        width: 16px;
        height: 16px;
        background: #fff url(../../assets/img/m_checked02.png) center no-repeat;
        border: 1px solid #d6d7dc;
    }
    .contenttr span{border:1px solid #d6d7dc;display:inline-block;width:26px;height:25px;line-height: 25px;font-size: 14px; }
    .contenttr span:hover{
        cursor:pointer;
    }
    .foottr{
        height:60px;
        background:#dedede;
    }
    .foottr button{
        height:60px;
        width:150px;
        background:#B4A078;
        border:none;
        margin-top: -1px;
        margin-bottom: -1px;
        margin-right: -1px;
    }
    .foottr button:hover{
        background: red;
    }
</style>
