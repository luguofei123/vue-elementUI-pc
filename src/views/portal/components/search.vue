<template>
    <div class="lgf_search">
      <a href="http://www.baidu.com"><img src="../../../assets/img/portal/yun_logo.png" alt=""></a>
      <div>
        <input type="text"><span @click="skipProductListPage"></span>
      </div>
    </div>
</template>
<script>
export default {
  methods: {
    skipProductListPage () {
      this.$router.push('/portal/productList')
    }
  }
}
</script>
<style scoped>
  .lgf_search{width:1180px;margin: 10px auto;background: #fff;height: 80px;}
  .lgf_search>a{float: left;margin-top: 20px;margin-left: 20px;}
  .lgf_search>div{width: 400px;margin: 0px auto;height: 80px;line-height: 80px;position: relative;}
  .lgf_search>div>input{height: 40px;border: 2px solid #b3d4fc;width: 400px;text-indent: 5px;font-size:12px;line-height:12px;}
  .lgf_search>div>span{display: inline-block;width: 22px;height: 22px;background: url("../../../assets/img/portal/search.png");position: absolute;top: 30px;right: 10px;}
  .lgf_search>div>span:hover{cursor: pointer;}
</style>
