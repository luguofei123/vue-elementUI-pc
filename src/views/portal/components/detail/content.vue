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
            <span class="priceText">价格</span><span class="price">¥ 89</span>
          </div>
          <div class="pram_description">
            <dl class="clear_fix methodPay">
              <dt>交付方式</dt>
              <dd>交付方式1</dd>
            </dl>
            <dl class="clear_fix size">
              <dt>规格</dt>
              <dd>规格1</dd>
              <dd>规格2</dd>
            </dl>
            <dl class="clear_fix billingType">
              <dt>计费方式</dt>
              <dd>计费方式1</dd>
              <dd>计费方式2</dd>
            </dl>
          </div>
        </div>
      </div>
      <div class="detail_right left"></div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
  .left{float: left;}
  .lgf_detail{width:1180px;margin: 0px auto;background: #fff;}
  .lgf_detail>.detail_left{width: 980px;margin-right: 10px;background: #b3d4fc;}
  .lgf_detail>.detail_right{width: 370px;}
  .lgf_detail>.detail_left>.detail_img{width: 320px;margin-left: 20px;margin-right: 20px;margin-top: 15px;}
  .lgf_detail>.detail_left>.detail_img>ul{margin-top: 10px;}
  .lgf_detail>.detail_left>.detail_img>ul>li{float: left;margin-right: 15px;}
  .lgf_detail>.detail_left>.detail_description{width: 620px;}
  .lgf_detail>.detail_left>.detail_description>h3{font-size: 18px;margin-top: 15px;margin-bottom: 15px;}
  .lgf_detail>.detail_left>.detail_description>p{font-size: 14px;color: #666;line-height: 26px;margin-right: 20px;}
  .lgf_detail>.detail_left>.detail_description>.priceBox{height: 65px;line-height: 65px;background: #fff4ed;margin-right: 20px;margin-top: 20px;}
  .lgf_detail>.detail_left>.detail_description>.priceBox>.priceText{font-size: 12px;margin: 0 30px 0 15px;}
  .lgf_detail>.detail_left>.detail_description>.priceBox>.price{font-size: 22px;color: #f4402e;}
  .lgf_detail>.detail_left>.detail_description>.pram_description{margin-top: 20px;margin-bottom: 20px;font-size: 12px;}
  .lgf_detail>.detail_left>.detail_description>.pram_description>dl{margin-bottom: 15px;}
  .lgf_detail>.detail_left>.detail_description>.pram_description>dl>dt{float: left;padding:8px 0px;width:70px;margin-right: 40px;text-align: right;}
  .lgf_detail>.detail_left>.detail_description>.pram_description>dl>dd{float: left;padding:8px 30px;margin-right: 20px;text-align: center;}
  .lgf_detail>.detail_left>.detail_description>.pram_description>dl.methodPay>dd{text-align: left;padding:8px 0px;}
  .lgf_detail>.detail_left>.detail_description>.pram_description>dl.size>dd{border: 2px solid #0086b3;}
  .lgf_detail>.detail_left>.detail_description>.pram_description>dl.billingType>dd{border: 2px solid #0086b3;}
  .lgf_detail>.detail_left>.detail_description>.pram_description>dl.size>dd:hover{border: 2px solid yellow;}
  .lgf_detail>.detail_left>.detail_description>.pram_description>dl.billingType>dd:hover{border: 2px solid yellow;}
</style>
