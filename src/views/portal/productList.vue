<template>
  <div class="detail" ref="detail">
    <portal-head></portal-head>
    <portal-search></portal-search>
    <portal-catalogue></portal-catalogue>
    <portal-foot ref="detailFoot"></portal-foot>
  </div>
</template>
<script>
import portalHead from './components/head'
import portalSearch from './components/search'
import portalCatalogue from './components/catalogue'
import portalFoot from './components/foot'
export default {
  components: {
    portalHead, portalSearch, portalCatalogue, portalFoot
  },
  mounted () {
    console.log(1)
    this.$refs.detailContent.handleScroll()
  },
  methods: {
    // handleScroll () {
    //   // console.log(this.$refs)
    //   this.box = this.$refs.detail
    //   this.box.addEventListener('scroll', () => {
    //     console.log(this.$refs.detail.scrollTop)
    //   }, false)
    // }
  }
}
</script>
<style scoped>
  .detail{
    height: 100%;
    overflow: auto;
  }
</style>
