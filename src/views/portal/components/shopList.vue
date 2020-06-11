<template>
    <div class="lgf_shopList">
      <div class="clear_fix">
        <ul>
          <li><a href=""><img src="../../../assets/img/portal/detail_big.png" alt=""></a></li>
          <li>多版本PHP全能运行环境多版本PHP全能运行环境多版本PHP全能运行环境多版本PHP全能运行环境多版本PHP全能运行环境</li>
          <li><i>¥</i>100</li>
          <li><a @click="skipPortal">立即体验</a></li>
        </ul>
        <ul>
          <li><a href=""><img src="../../../assets/img/portal/detail_big.png" alt=""></a></li>
          <li>多版本PHP全能运行环境</li>
          <li><i>¥</i>100</li>
          <li><a href="portal/detail">立即体验</a></li>
        </ul>
        <ul>
          <li><a href=""><img src="../../../assets/img/portal/detail_big.png" alt=""></a></li>
          <li>多版本PHP全能运行环境</li>
          <li><i>¥</i>100</li>
          <li><a href="portal/detail">立即体验</a></li>
        </ul>
        <ul>
          <li><a href=""><img src="../../../assets/img/portal/detail_big.png" alt=""></a></li>
          <li>多版本PHP全能运行环境</li>
          <li><i>¥</i>100</li>
          <li><a href="">立即体验</a></li>
        </ul>
        <ul>
          <li><a href=""><img src="../../../assets/img/portal/detail_big.png" alt=""></a></li>
          <li>多版本PHP全能运行环境</li>
          <li><i>¥</i>100</li>
          <li><a href="">立即体验</a></li>
        </ul>
        <ul>
          <li><a href=""><img src="../../../assets/img/portal/detail_big.png" alt=""></a></li>
          <li>多版本PHP全能运行环境</li>
          <li><i>¥</i>100</li>
          <li><a href="">立即体验</a></li>
        </ul>
        <ul>
          <li><a href=""><img src="../../../assets/img/portal/detail_big.png" alt=""></a></li>
          <li>多版本PHP全能运行环境</li>
          <li><i>¥</i>100</li>
          <li><a href="">立即体验</a></li>
        </ul>
        <ul>
          <li><a href=""><img src="../../../assets/img/portal/detail_big.png" alt=""></a></li>
          <li>多版本PHP全能运行环境</li>
          <li><i>¥</i>100</li>
          <li><a href="">立即体验</a></li>
        </ul>
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
  .lgf_shopList{}
  .lgf_shopList>div{width: 1190px;margin: 10px auto;}
  .lgf_shopList>div>ul{float: left;margin-right: 18px;box-shadow: 0 10px 15px #bfbebe;margin-bottom: 25px;}
  .lgf_shopList>div>ul:nth-child(4n+0){margin-right: 0;}
  .lgf_shopList>div>ul>li:first-child>a>img{width: 284px;height: 186px;}
  .lgf_shopList>div>ul>li:nth-child(2){width: 284px;height: 20px;line-height: 20px;font-size: 15px;margin-top: 8px;padding:0 15px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;}
  .lgf_shopList>div>ul>li:nth-child(3){width: 284px;height: 48px;line-height: 48px;color: #ff6600;font-size: 22px;padding:0 15px;}
  .lgf_shopList>div>ul>li:nth-child(4){width: 284px;height: 40px;line-height: 40px;font-size: 15px;}
  .lgf_shopList>div>ul>li:nth-child(4)>a{display:block;width: 284px;height: 40px;line-height: 40px;color: white;background: #ff6600;border: 1px solid #ff6600;text-align: center;}
</style>
