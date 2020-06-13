<template>
    <div class="lgf_catalogue">
        <ul class="clear_fix">
          <li>
            <span>产品分类</span>
            <ul :class="expand==='open'?'expand_class':''">
              <li>
                <div><span>基础软件</span><i>></i><span>操作系统</span><span>数据库缓存</span></div>
                <ul>
                  <li><a href="">菜单1</a></li>
                  <li><a href="">菜单1</a></li>
                  <li><a href="">菜单1</a></li>
                </ul>
              </li>
              <li>
                <div><span>基础软件</span><i>></i><span>操作系统</span><span>数据库缓存</span></div>
                <ul>
                  <li><a href="">操作系统1</a></li>
                  <li><a href="">操作系统1</a></li>
                  <li><a href="">操作系统1</a></li>
                </ul>
              </li>
              <li><div><span>基础软件</span><i>></i><span>操作系统</span><span>数据库缓存</span></div></li>
              <li><div><span>基础软件</span><i>></i><span>操作系统</span><span>数据库缓存</span></div></li>
              <li><div><span>基础软件</span><i>></i><span>操作系统</span><span>数据库缓存</span></div></li>
              <li><div><span>基础软件</span><i>></i><span>操作系统</span><span>数据库缓存</span></div></li>
            </ul>
          </li>
          <li>小程序</li>
          <li>网站建设</li>
          <li>基础软件</li>
          <li>办公软件</li>
          <li>企业服务</li>
          <li>API服务</li>
          <li>物联网</li>
        </ul>
    </div>
</template>
<script>
export default {
  props: {
    expand: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped>
  .lgf_catalogue{width:1180px;margin: 0 auto;background: #fff;z-index: 100;}
  .lgf_catalogue>ul{width: 935px;border-bottom: 1px solid #0086b3;}
  .lgf_catalogue>ul>li{float:left;height:50px;width:70px;margin-right: 23px;line-height: 50px;}
  .lgf_catalogue>ul>li:first-child{background: #000;margin-right: 40px;width:240px;position: relative;font-size: 12px;}
  .lgf_catalogue>ul>li:first-child>span{color: white;text-indent: 15px;width:240px;display: inline-block;height: 50px;font-size: 16px;}
  .lgf_catalogue>ul>li:first-child>ul{z-index: 100;position: absolute;background: #000;color: #fff;width:240px;height:315px;display: none;top:50px;}
  .lgf_catalogue>ul>li:first-child:hover >ul{display: block;}
  .lgf_catalogue>ul>li:first-child>ul.expand_class{display: block;}
  .lgf_catalogue>ul>li:first-child>ul>li>div>span{margin-right: 10px;margin-left: 10px;}
  .lgf_catalogue>ul>li:first-child>ul>li>div>span:first-child{font-size: 14px;}
  .lgf_catalogue>ul>li:first-child>ul>li:hover{background: #dedede;color: black;box-shadow: inset 1px 1px 2px #fff;}
  .lgf_catalogue>ul>li:first-child>ul>li:hover  >ul{display: block;}
  .lgf_catalogue>ul>li:first-child>ul>li>ul{position: absolute;top:0;left:240px;width: 100px;display: none;}
  .lgf_catalogue>ul>li:first-child>ul>li>ul>li{background: #dedede;color:black;text-indent: 20px;}

</style>
