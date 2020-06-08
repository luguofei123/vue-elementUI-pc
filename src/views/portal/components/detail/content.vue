<template>
    <div class="lgf_detail clear_fix">
      <div class="detail_left left">
        <div class="detail_img left">
          <img src="../../../../assets/img/portal/01.jpg" width="320" height="240" alt="图片">
          <ul class="clear_fix">
            <li><img src="../../../../assets/img/portal/01.jpg" width="60" height="45" alt="图片"></li>
            <li><img src="../../../../assets/img/portal/01.jpg" width="60" height="45" alt="图片"></li>
            <li><img src="../../../../assets/img/portal/01.jpg" width="60" height="45" alt="图片"></li>
          </ul>
        </div>
        <div class="detail_description left">
          <h3>中央经济工作会议精神在各地干部</h3>
          <p>刚刚闭幕的中央经济工作会议，认真总结今年经济工作，深入分析当前经济形势，全面部署明年经济工作，各地干部群众表示，要更加紧密地团结在以习近平同志为核心的党中央周围，认真贯彻落实中央经济工作会议精神</p>
          <div class="priceBox">
            <span class="priceText">价格</span><span class="price">¥ {{productprice}}</span>
          </div>
          <div class="pram_description">
            <dl class="clear_fix methodPay">
              <dt>交付方式</dt>
              <dd><span>交付方式1</span></dd>
            </dl>
            <dl class="clear_fix size">
              <dt>规格</dt>
              <dd>
                <span :class="SizeActiveIndex === index?'active':''" v-for="(item, index) in sizeList" :key="index" @click="getSiseValue(item.value,index)">{{item.name}}</span>
              </dd>
            </dl>
            <dl class="clear_fix billingType">
              <dt>计费方式</dt>
              <dd>
                <span :class="BillingTypeActiveIndex === index?'active':''" v-for="(item, index) in billingTypeList" :key="index" @click="getBillingTypeValue(item.value,index)">{{item.name}}</span>
              </dd>
            </dl>
            <dl class="clear_fix priod" v-if="billingType === 2">
              <dt>周期</dt>
              <dd>
                <span :class="PriodActiveIndex === index?'active':''" v-for="(item, index) in priodList" :key="index" @click="getPriodValue(item.value,index)">{{item.name}}</span>
              </dd>
            </dl>
            <dl class="clear_fix">
              <dt></dt>
              <dd>
                <button>立即购买</button>
              </dd>
            </dl>
            <dl class="clear_fix agree">
              <dt></dt>
              <dd>
                <input type="checkbox" id="agree">
                <label for="agree"></label>
                <span>同意云市场商品服务协议与建行云市场用户协议</span>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div class="detail_right left">
        <div class="companyInfo">
          <p id="companyName">北京深圳上海广州有限公司</p>
          <ul>
            <li><span></span><span>010-09090909</span></li>
            <li><span></span><span>luguofei@126.com</span></li>
            <li><span></span><span>卖家服务时间</span><span>08:00:00-18:00:00</span></li>
          </ul>
        </div>
        <div class="companyInfo">
          <p id="companyName">北京深圳上海广州有限公司</p>
          <ul>
            <li><div>010-09090909</div></li>
            <li><div>luguofei@126.com</div></li>
            <li>
              <div>
                <p>卖家服务时间</p>
                <p>08:00:00-18:00:00</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="companyInfo">
          <p id="companyName">北京深圳上海广州有限公司</p>
          <ul>
            <li><div>010-09090909</div></li>
            <li><div>luguofei@126.com</div></li>
            <li>
              <div>
                <p>卖家服务时间</p>
                <p>08:00:00-18:00:00</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="companyInfo">
          <p id="companyName">北京深圳上海广州有限公司</p>
          <ul>
            <li><div>010-09090909</div></li>
            <li><div>luguofei@126.com</div></li>
            <li>
              <div>
                <p>卖家服务时间</p>
                <p>08:00:00-18:00:00</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      SizeActiveIndex: 0,
      BillingTypeActiveIndex: 0,
      PriodActiveIndex: 0,
      sizeList: [{ name: '规格1', value: 1 }, { name: '规格2', value: 2 }],
      billingTypeList: [{ name: '一次性费用', value: 1 }, { name: '包年包月', value: 2 }],
      priodList: [{ name: '1年', value: 1 }, { name: '1月', value: 2 }],
      // 4个变量决定价格
      productprice: 0,
      productId: '',
      size: '909',
      billingType: '',
      priod: ''
    }
  },
  methods: {
    getSiseValue (value, index) {
      this.SizeActiveIndex = index
      this.size = Math.random(100)
      console.log(value)
      this.getProductPrice()
    },
    getBillingTypeValue (value, index) {
      this.BillingTypeActiveIndex = index
      this.billingType = value
      this.getProductPrice()
    },
    getPriodValue (value, index) {
      this.PriodActiveIndex = index
      this.getProductPrice()
    },
    getProductPrice () {
      setTimeout(() => {
        this.productprice = Math.random() * 10000
      }, 200)
    }
  }
}
</script>
<style scoped>
  .left{float: left;}
  .lgf_detail{width:1180px;margin: 0px auto;background: #fff;}
  .lgf_detail>.detail_left{width: 935px;margin-right: 10px;background: #b3d4fc;}
  .lgf_detail>.detail_right{width: 235px;}
  .lgf_detail>.detail_left>.detail_img{width: 320px;margin-left: 20px;margin-right: 20px;margin-top: 15px;}
  .lgf_detail>.detail_left>.detail_img>ul{margin-top: 10px;}
  .lgf_detail>.detail_left>.detail_img>ul>li{float: left;margin-right: 15px;}
  .lgf_detail>.detail_left>.detail_description{width: 575px;}
  .lgf_detail>.detail_left>.detail_description>h3{font-size: 18px;margin-top: 15px;margin-bottom: 15px;}
  .lgf_detail>.detail_left>.detail_description>p{font-size: 14px;color: #666;line-height: 26px;margin-right: 20px;}
  .lgf_detail>.detail_left>.detail_description>.priceBox{height: 65px;line-height: 65px;background: #fff4ed;margin-right: 20px;margin-top: 20px;}
  .lgf_detail>.detail_left>.detail_description>.priceBox>.priceText{font-size: 12px;margin: 0 30px 0 15px;}
  .lgf_detail>.detail_left>.detail_description>.priceBox>.price{font-size: 22px;color: #f4402e;}
  .lgf_detail>.detail_left>.detail_description>.pram_description{margin-top: 20px;margin-bottom: 20px;font-size: 12px;padding:0px 10px}
  .lgf_detail>.detail_left>.detail_description>.pram_description>dl{height:36px;line-height: 36px;margin-bottom: 15px;}
  .lgf_detail>.detail_left>.detail_description>.pram_description>dl>dt{float: left;width: 80px;height:36px;}
  .lgf_detail>.detail_left>.detail_description>.pram_description>dl>dd{float: left;width: 450px;}
  .lgf_detail>.detail_left>.detail_description>.pram_description>dl.size>dd>span{display:inline-block;border: 2px solid #0086b3;line-height: 32px;padding:0px 20px;margin-right: 10px;margin-bottom: 10px;}
  .lgf_detail>.detail_left>.detail_description>.pram_description>dl.size>dd>span:hover{border: 2px solid yellow;cursor: pointer;}
  .lgf_detail>.detail_left>.detail_description>.pram_description>dl.size>dd>span.active{border: 2px solid yellow;cursor: pointer;}
  .lgf_detail>.detail_left>.detail_description>.pram_description>dl.billingType>dd>span{display:inline-block;border: 2px solid #0086b3;line-height: 32px;padding:0px 20px;margin-right: 10px;}
  .lgf_detail>.detail_left>.detail_description>.pram_description>dl.billingType>dd>span:hover{border: 2px solid yellow;cursor: pointer;}
  .lgf_detail>.detail_left>.detail_description>.pram_description>dl.billingType>dd>span.active{border: 2px solid yellow;cursor: pointer;}
  .lgf_detail>.detail_left>.detail_description>.pram_description>dl.priod>dd>span{display:inline-block;border: 2px solid #0086b3;line-height: 32px;padding:0px 20px;margin-right: 10px;}
  .lgf_detail>.detail_left>.detail_description>.pram_description>dl.priod>dd>span:hover{border: 2px solid yellow;cursor: pointer;}
  .lgf_detail>.detail_left>.detail_description>.pram_description>dl.priod>dd>span.active{border: 2px solid yellow;cursor: pointer;}
  .lgf_detail>.detail_left>.detail_description>.pram_description>dl>dd>button{padding: 8px 40px;background-color: #2f88ff;color: #fff;border: none;margin-top: 15px;}
  .lgf_detail>.detail_left>.detail_description>.pram_description>dl>dd>button:hover{cursor: pointer;}
  .lgf_detail>.detail_left>.detail_description>.pram_description>dl.agree>dd>span{display: inline-block;vertical-align: middle}
  input + label{
    display: inline-block;
    width: 16px;
    height: 16px;
    background: #fff url(../../../../assets/img/m_checked01.png) center no-repeat;
    /*background-position: -31px 0px;*/
    border: 1px solid #d6d7dc;
    vertical-align: middle;
  }
  input:checked +label{
    display: inline-block;
    width: 16px;
    height: 16px;
    background: #fff url(../../../../assets/img/m_checked02.png) center no-repeat;
    border: 1px solid #d6d7dc;
    vertical-align: middle;
  }
  input[type="checkbox"]{
    position:absolute;
    width:40px;
    height:40px;
    visibility: hidden;
    background: #fff;
  }
  .lgf_detail>.detail_right{font-size: 12px;}
  .lgf_detail>.detail_right>.companyInfo{background: #b3d4fc;padding:10px 15px;height: 210px;margin-bottom: 10px;}
  .lgf_detail>.detail_right>.companyInfo>p{font-size: 14px;margin-top:10px;margin-bottom: 20px;}
  .lgf_detail>.detail_right>.companyInfo>ul>li>div{padding-left: 30px;height: 40px;line-height: 40px;}
  .lgf_detail>.detail_right>.companyInfo>ul>li:first-child>div{background: url(../../../../assets/img/portal/tel.png) left no-repeat}
  .lgf_detail>.detail_right>.companyInfo>ul>li:nth-child(2)>div{background: url(../../../../assets/img/portal/email.png) left no-repeat}
  .lgf_detail>.detail_right>.companyInfo>ul>li:nth-child(3){border-top:1px solid yellow;}
  .lgf_detail>.detail_right>.companyInfo>ul>li:nth-child(3)>div{background: url(../../../../assets/img/portal/time.png) left no-repeat}
  .lgf_detail>.detail_right>.companyInfo>ul>li:nth-child(3)>div>p:nth-child(2){font-size: 20px;color: red;line-height: 20px;}

  .lgf_detail>.detail_right>.companyInfo>ul>li:first-child>span:first-child{height: 40px;line-height: 40px;display: inline-block;width: 20px;background: url(../../../../assets/img/portal/tel.png) left no-repeat;vertical-align: bottom;margin-right: 10px;}
  .lgf_detail>.detail_right>.companyInfo>ul>li:nth-child(2)>span:first-child{height: 40px;line-height: 40px;display: inline-block;width: 20px;background: url(../../../../assets/img/portal/email.png) left no-repeat;vertical-align: bottom;margin-right: 10px;}
  .lgf_detail>.detail_right>.companyInfo>ul>li:nth-child(3)>span:first-child{height: 40px;line-height: 40px;display: inline-block;width: 20px;background: url(../../../../assets/img/portal/time.png) left no-repeat;vertical-align: bottom;margin-right: 10px;}
  .lgf_detail>.detail_right>.companyInfo>ul>li:first-child>span:nth-child(2){height: 40px;line-height: 40px;display: inline-block;}
  .lgf_detail>.detail_right>.companyInfo>ul>li:nth-child(2)>span:nth-child(2){height: 40px;line-height: 40px;display: inline-block;}
  .lgf_detail>.detail_right>.companyInfo>ul>li:nth-child(3)>span:nth-child(2){height: 40px;line-height: 40px;display: inline-block;}
  .lgf_detail>.detail_right>.companyInfo>ul>li:nth-child(3)>span:nth-child(3){height: 20px;line-height: 20px;display: block;font-size: 20px;color: red;margin-left: 30px;}
</style>
