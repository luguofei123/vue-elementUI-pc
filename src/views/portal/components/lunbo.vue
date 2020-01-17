<template>
  <div class="lunbo">
    <swiper :options="swiperOption" class="swiper-container" >
      <!-- slides -->
      <swiper-slide class="swiper-item">
        <img class='swiper-img' src="../../../assets/img/portal/banner_a.png" width=100% height="315" alt="">
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <img class='swiper-img' src="../../../assets/img/portal/banner_b.png" width=100% height="315" alt="">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
// let vm = null
export default {
  data () {
    return {
      swiperOption: {
        // 参数选项,显示小点
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        notNextTick: true,
        loop: true,
        autoplay: 2000,
        speed: 1000
        // 小手掌抓取滑动
        // grabCursor: true,
        // 滑动之后回调函数
        // on: {
        //   slideChangeTransitionEnd: function () {
        //     console.log(this.activeIndex)
        //     // 切换结束时，告诉我现在是第几个slide
        //     // const realIndex = this.activeIndex;
        //     // vm.carousel(realIndex);
        //   },
        //   click: function () {
        //     // 这里有坑，需要注意的是：this 指向的是 swpier 实例，而不是当前的 vue， 因此借助 vm，来调用 methods 里的方法
        //     // console.log(this); // -> Swiper
        //     // 当前活动块的索引，与activeIndex不同的是，在loop模式下不会将 复制的块 的数量计算在内。
        //     console.log('ss' + this.realIndex)
        //     const realIndex = this.realIndex
        //     vm.carousel(vm.carousels[realIndex])
        //   }
        // }
        // delay:1000
      }
    }
  }
}
</script>
<style>
  .lunbo>.swiper-container>.swiper-pagination>.swiper-pagination-bullet{border-radius: 0;width: 30px;}
  .lunbo>.swiper-container>.swiper-pagination>.swiper-pagination-bullet-active{background: black;}
</style>
