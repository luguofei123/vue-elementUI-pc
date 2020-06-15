<template>
    <div class="lgf_product_list clear_fix">
      <div class="left left_content">
        <ul>
          <li><a href=""><img src="../../../../assets/img/portal/detail_big.png" alt=""></a></li>
          <li>多版本PHP</li>
        </ul>
        <ul>
          <li><a href=""><img src="../../../../assets/img/portal/detail_big.png" alt=""></a></li>
          <li>多版本PHP</li>
        </ul>
        <ul>
          <li><a href=""><img src="../../../../assets/img/portal/detail_big.png" alt=""></a></li>
          <li>多版本PHP</li>
        </ul>
      </div>
      <div class="left right_content">
        <div class="filter">
          <dl class="product_class">
            <dt>产品分类</dt>
            <dd>
              <span><a href="javascript:;" class="active">全部</a></span>
              <span><a href="javascript:;">操作系统</a></span>
              <span><a href="javascript:;">运维工具</a></span>
              <span><a href="javascript:;">数据库/缓存</a></span>
            </dd>
          </dl>
          <hr style="border-bottom:1px solid #dedede">
          <dl class="pay_method">
            <dt>交付方式</dt>
            <dd>
              <span><a href="javascript:;" class="active">全部</a></span>
              <span><a href="javascript:;">镜像</a></span>
              <span><a href="javascript:;">API</a></span>
              <span><a href="javascript:;">线下工单</a></span>
            </dd>
          </dl>
          <hr style="border-bottom:1px solid #dedede">
          <dl class="product_price">
            <dt>价格</dt>
            <dd>
              <span><a href="javascript:;" class="active">全部</a></span>
              <span><a href="javascript:;">免费/试用</a></span>
              <span><a href="javascript:;">1-198</a></span>
              <span><a href="javascript:;">199-1998</a></span>
              <span><a href="javascript:;">1999-2998</a></span>
              <span><a href="javascript:;">2999-3998</a></span>
              <span>
                <input type="text">至<input type="text">
              </span>
            </dd>
          </dl>
        </div>
        <div class="product_order">
          <a href="javascript:;">默认排序</a>
        </div>
        <div class="product_list clear_fix">
          <ul>
            <li><a href=""><img src="../../../../assets/img/portal/detail_big.png" alt=""></a></li>
            <li>多版本PHP全能运行环境多版本PHP全能运行环境多版本PHP全能运行环境多版本PHP全能运行环境多版本PHP全能运行环境</li>
            <li><i>¥</i>100</li>
            <li><a @click="skipPortal">立即体验</a></li>
          </ul>
          <ul>
            <li><a href=""><img src="../../../../assets/img/portal/detail_big.png" alt=""></a></li>
            <li>多版本PHP全能运行环境</li>
            <li><i>¥</i>100</li>
            <li><a href="portal/detail">立即体验</a></li>
          </ul>
          <ul>
            <li><a href=""><img src="../../../../assets/img/portal/detail_big.png" alt=""></a></li>
            <li>多版本PHP全能运行环境</li>
            <li><i>¥</i>100</li>
            <li><a href="portal/detail">立即体验</a></li>
          </ul>
          <ul>
            <li><a href=""><img src="../../../../assets/img/portal/detail_big.png" alt=""></a></li>
            <li>多版本PHP全能运行环境</li>
            <li><i>¥</i>100</li>
            <li><a href="">立即体验</a></li>
          </ul>
          <ul>
            <li><a href=""><img src="../../../../assets/img/portal/detail_big.png" alt=""></a></li>
            <li>多版本PHP全能运行环境</li>
            <li><i>¥</i>100</li>
            <li><a href="">立即体验</a></li>
          </ul>
          <ul>
            <li><a href=""><img src="../../../../assets/img/portal/detail_big.png" alt=""></a></li>
            <li>多版本PHP全能运行环境</li>
            <li><i>¥</i>100</li>
            <li><a href="">立即体验</a></li>
          </ul>
          <ul>
            <li><a href=""><img src="../../../../assets/img/portal/detail_big.png" alt=""></a></li>
            <li>多版本PHP全能运行环境</li>
            <li><i>¥</i>100</li>
            <li><a href="">立即体验</a></li>
          </ul>
          <ul>
            <li><a href=""><img src="../../../../assets/img/portal/detail_big.png" alt=""></a></li>
            <li>多版本PHP全能运行环境</li>
            <li><i>¥</i>100</li>
            <li><a href="">立即体验</a></li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    skipPortal () {
      // href="portal/detail"
      this.$router.push('/portal/detail')
    }
  }
}
</script>
<style scoped>
  .lgf_product_list{width: 1190px;margin: 10px auto;}
  .left{float: left;}
  .lgf_product_list>div.left_content{width: 250px;margin-top: 300px;margin-right: 10px;}
  .lgf_product_list>div.left_content>ul{width: 240px;margin: 20px 15px 10px 5px;font-size: 12px;background: #dedede;}
  .lgf_product_list>div.left_content>ul>li:first-child{text-align: center;padding-top:10px;}
  .lgf_product_list>div.left_content>ul>li:nth-child(2){padding-left:20px;margin-top: 10px;padding-bottom: 10px;}
  .lgf_product_list>div.left_content>ul>li:first-child>a>img{width: 197px;height: 125px;}
  .lgf_product_list>div.right_content{width: 930px;margin: 10px auto;}
  .lgf_product_list>div.right_content>div.filter{padding:20px 20px;background: whitesmoke;margin-bottom: 10px;width: 889px;}
  .lgf_product_list>div.right_content>div.filter>dl{height: 30px;font-size: 14px;line-height: 30px;}
  .lgf_product_list>div.right_content>div.filter>dl>dt{float: left;margin-right: 20px;padding:0px 3px;width: 70px;}
  .lgf_product_list>div.right_content>div.filter>dl>dd>span:first-child{width: 50px;}
  .lgf_product_list>div.right_content>div.filter>dl>dd>span{line-height: 14px;display: inline-block;margin-right: 0px;padding:2px 3px;width: 90px;}
  .lgf_product_list>div.right_content>div.filter>dl>dd>span>a{padding:2px 3px;}
  .lgf_product_list>div.right_content>div.filter>dl>dd>span>a:hover{cursor: pointer;background: blue;border-radius:5px;color: white;}
  .lgf_product_list>div.right_content>div.filter>dl>dd>span>a.active{background: blue;border-radius:5px;color: white;}
  .lgf_product_list>div.right_content>div.filter>dl.product_price>dd>span:last-child{width: 200px;}
  .lgf_product_list>div.right_content>div.filter>dl.product_price>dd>span:last-child>input{width: 60px;height: 24px;border: 1px solid #dedede;padding-left: 4px;margin:0 5px;}
  .lgf_product_list>div.right_content>div.product_order{background:whitesmoke;width: 889px;height:30px;line-height: 30px;padding-left: 20px;}
  .lgf_product_list>div.right_content>div.product_order>a{font-size: 14px;color: blue;}
  .lgf_product_list>div.right_content>div.product_list{background:whitesmoke;width: 889px;}
  .lgf_product_list>div.right_content>div.product_list>ul{float: left;margin-right: 18px;box-shadow: 0 10px 15px #bfbebe;margin-bottom: 25px;background:whitesmoke;}
  .lgf_product_list>div.right_content>div.product_list>ul:nth-child(3n+0){margin-right: 0;}
  .lgf_product_list>div.right_content>div.product_list>ul>li:first-child>a>img{width: 284px;height: 186px;}
  .lgf_product_list>div.right_content>div.product_list>ul>li:nth-child(2){width: 284px;height: 20px;line-height: 20px;font-size: 15px;margin-top: 8px;padding:0 15px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;}
  .lgf_product_list>div.right_content>div.product_list>ul>li:nth-child(3){width: 284px;height: 48px;line-height: 48px;color: #ff6600;font-size: 22px;padding:0 15px;}
  .lgf_product_list>div.right_content>div.product_list>ul>li:nth-child(4){width: 284px;height: 40px;line-height: 40px;font-size: 15px;}
  .lgf_product_list>div.right_content>div.product_list>ul>li:nth-child(4)>a{display:block;width: 284px;height: 40px;line-height: 40px;color: white;background: #ff6600;border: 1px solid #ff6600;text-align: center;}
</style>
