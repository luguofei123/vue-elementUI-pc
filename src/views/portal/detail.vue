<template>
  <div class="detail">
    <portal-head></portal-head>
    <portal-search></portal-search>
    <portal-catalogue></portal-catalogue>
    <detail-content></detail-content>
    <portal-foot></portal-foot>
  </div>
</template>
<script>
import portalHead from './components/head'
import portalSearch from './components/search'
import detailContent from './components/detail/content'
import portalCatalogue from './components/catalogue'
import portalFoot from './components/foot'
export default {
  components: {
    portalHead, portalSearch, portalCatalogue, detailContent, portalFoot
  }
}
</script>
<style scoped>
  .detail{
    height: 100%;
    overflow: auto;
  }
</style>
