<template>
  <div>
    <pdf-bar :pdfData="pdfData"></pdf-bar>
  </div>
</template>
<script>
import pdfBar from '@/components/pdf/index'
// 模拟数据
import { dataPDF } from '@/const/pdfdata'
export default {
  components: {
    pdfBar
  },
  data () {
    return {
      pdfData: ''
    }
  },
  created () {
    // 真实请求
    // this.$MyAxios.pdfPage.getPdfContent()
    //   .then((r) => {
    //     this.pdfData = r
    //   })
    // 模拟请求
    setTimeout(() => {
      this.pdfData = dataPDF
    }, 100)
  }
}
</script>
<style>
</style>
