<template>
    <div class="clear_fix lgf_header">
      <a class="lf lgf_header_logo"></a>
      <div class="rf lgf_header_nav">
        <ul class="clear_fix">
          <li><a href="javascript:;">建行云首页</a><span>|</span></li>
          <li>
            <a href="javascript:;">买家中心</a>
            <i class="el-icon-lu-daohang"></i>
              <ul>
                <li><a href="javascript:;">买家中心1</a></li>
                <li><a href="javascript:;">买家中心2</a></li>
                <li><a href="javascript:;">买家中心3</a></li>
              </ul>
          </li>
          <li>
            <a href="javascript:;">卖家中心</a>
            <i class="el-icon-lu-daohang"></i>
            <ul>
              <li><a href="javascript:;">卖家中心1</a></li>
              <li><a href="javascript:;">卖家中心2</a></li>
              <li><a href="javascript:;">卖家中心3</a></li>
            </ul>
          </li>
          <li><a href="javascript:;">登录</a><i class="el-icon-lu-daohang"></i></li>
        </ul>
      </div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
  .lgf_header{ height: 60px;background: #fff;box-shadow: 0 10px 10px -5px rgba(0,0,0,.1)}
  .lgf_header>.lgf_header_logo{display:inline-block; margin: 10px 10px; width: 198px;height: 40px;background-image: url("../../../assets/img/portal/lgf_logo.png")}
  .lgf_header>.lgf_header_nav{margin-right: 20px;}
  .lgf_header>.lgf_header_nav>ul>li{float: left;margin: 0 20px;height: 60px;line-height: 60px;position: relative;}
  .lgf_header>.lgf_header_nav>ul>li:first-child span{margin-left:40px;}
  /*.lgf_header>.lgf_header_nav>ul>li:nth-of-type(n+2)::after{position:absolute;width:40px;height:40px;content: '';}*/
  .lgf_header>.lgf_header_nav>ul>li:nth-of-type(n+2)>a{margin-right: 5px;height: 60px;display: inline-block;}
  .lgf_header>.lgf_header_nav>ul>li:nth-of-type(n+2):hover >a{color: #409EFF;}
  .lgf_header>.lgf_header_nav>ul>li:nth-of-type(n+2):hover i{color: #409EFF;}
  .lgf_header>.lgf_header_nav>ul>li:nth-of-type(n+2):hover ul{display: block;}
  .lgf_header>.lgf_header_nav>ul>li:nth-of-type(n+2)>ul:hover{display: block;}
  .lgf_header>.lgf_header_nav>ul>li:nth-of-type(n+2)>ul{position: absolute;top:50px;left:-10px;background: #fff;width:100px;display: none;padding-top: 10px;padding-bottom: 10px;}
  .lgf_header>.lgf_header_nav>ul>li:nth-of-type(n+2)>ul>li{height: 35px;text-align: center;line-height: 35px}
</style>
