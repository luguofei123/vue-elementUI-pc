<template>
    <div class="portal">
      <portal-head></portal-head>
      <portal-search></portal-search>
      <portal-catalogue></portal-catalogue>
      <portal-lunbo></portal-lunbo>
      <portal-shoplist></portal-shoplist>
      <portal-foot></portal-foot>
    </div>
</template>
<script>
import portalHead from './components/head'
import portalSearch from './components/search'
import portalCatalogue from './components/catalogue'
import portalLunbo from './components/lunbo'
import portalShoplist from './components/shopList'
import portalFoot from './components/foot'
export default {
  components: {
    portalHead, portalSearch, portalCatalogue, portalLunbo, portalShoplist, portalFoot
  }
}
</script>
<style scoped>
  .portal{
    height: 100%;
    overflow: auto;
  }
</style>
