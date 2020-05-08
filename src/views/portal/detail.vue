<template>
  <div class="detail">
    <portal-head></portal-head>
    <portal-search></portal-search>
    <portal-catalogue></portal-catalogue>
    <portal-foot></portal-foot>
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
  }
}
</script>
<style scoped>
  .detail{
    height: 100%;
    overflow: auto;
  }
</style>
