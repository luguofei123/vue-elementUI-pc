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
              <dd><span>交付方式1</span></dd>
            </dl>
            <dl class="clear_fix size">
              <dt>规格</dt>
              <dd>
                <span>规格1</span>
                <span>规格2</span>
                <span>规格3</span>
                <span>规格1</span>
                <span>规格2</span>
                <span>规格3</span>
                <span>规格1</span>
                <span>规格2</span>
                <span>规格3</span>
                <span>规格1</span>
                <span>规格2</span>
                <span>规格3</span>
                <span>规格1</span>
                <span>规格2</span>
                <span>规格3</span>
                <span>规格1</span>
                <span>规格2</span>
                <span>规格3</span>
              </dd>
            </dl>
            <dl class="clear_fix billingType">
              <dt>计费方式</dt>
              <dd>
                <span>计费方式1</span>
                <span>计费方式12</span>
                <span>计费方式13</span>
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
        jjjj
      </div>
    </div>
</template>
<script>
export default {
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
  .lgf_detail>.detail_left>.detail_description>.pram_description>dl.billingType>dd>span{display:inline-block;border: 2px solid #0086b3;line-height: 32px;padding:0px 20px;margin-right: 10px;}
  .lgf_detail>.detail_left>.detail_description>.pram_description>dl.billingType>dd>span:hover{border: 2px solid yellow;cursor: pointer;}
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
</style>
