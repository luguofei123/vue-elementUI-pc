<template>
  <div>
    <pdf-bar :pdfData="pdfData"></pdf-bar>
  </div>
</template>
<script>
import pdfBar from '@/components/pdf/index'
// import { dataPDF } from '@/const/pdfdata'
export default {
  components: {
    pdfBar
  },
  name: 'pdf',
  data () {
    return {
      pdfData: 'ddd'
    }
  },
  created () {
    this.$MyAxios.pdfPage.getPdfContent()
      .then((r) => {
        // this.renderPdf(scale, r, currentPage)
        console.log(111)
        this.pdfData = r
      })
    // setTimeout(() => {
    //   this.pdfData = dataPDF
    // }, 100)
  }
}
</script>
<style>
</style>
