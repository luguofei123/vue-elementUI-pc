<template>
    <div class="pdfBox">
      <div class="controllerBox">
        <el-tooltip class="item" effect="light" content="上一页" placement="top">
          <i class="el-icon-arrow-left"></i>
        </el-tooltip>
        <span>
          <span>{{currentPages}}</span> /
          <span>{{totalPage}}</span>
        </span>
        <el-tooltip class="item" effect="light" content="下一页" placement="top">
          <i class="el-icon-arrow-right"></i>
        </el-tooltip>
        <el-tooltip class="item" effect="light" content="缩小" placement="top">
          <i class="el-icon-zoom-out"  icon="minus"></i>
        </el-tooltip>
        <el-tooltip class="item" effect="light" content="放大" placement="top">
          <i class="el-icon-zoom-in"  addscaleicon="plus"></i>
        </el-tooltip>
        <el-tooltip class="item" effect="light" content="书签" placement="top">
          <i class="el-icon-collection-tag" ></i>
        </el-tooltip>
        <el-tooltip class="item" effect="light" content="全屏阅卷" placement="top">
          <i class="el-icon-rank" ></i>
        </el-tooltip>
        <!--<el-button  size="mini" style="margin-bottom:2px;">-->
          <!--打开目录-->
        <!--</el-button>-->
      </div>
      <el-scrollbar class="scrollbars" style="height:100%;overflow:hidden">
        <div class="wrapper" id="pdf-container" :style="`width:${viewWidth}px;margin: 0 auto;`">
          <div id="page-1" class="pdf-box1s" :style="`width:${viewWidth}px;`">
            <canvas id="canvas-pdf-1" class="canvas-pdf"></canvas>
          </div>
        </div>
      </el-scrollbar>
    </div>
</template>
<script>
import PDFJS from 'pdfjs-dist'
import { TextLayerBuilder } from 'pdfjs-dist/web/pdf_viewer'
import 'pdfjs-dist/web/pdf_viewer.css'
export default {
  name: 'PDF',
  // props: ['pdfurl', 'pdfName', 'pdfImgEmage', 'currentPage', 'totalNum'],
  data () {
    return {
      pdfEvidenceInfo: null,
      currentPages: 1,
      pdfDoc: null,
      pageNum: 1, //
      pageRendering: false,
      pageNumPending: null,
      scale: 1.1,
      maxscale: 3.5,
      minscale: 0.6,
      openAnnota: true,
      userId: null,
      dialogTableVisible: false,
      viewWidth: '',
      totalPage: 1
    }
  },
  created () {
    this.$MyAxios.pdfPage.getPdfContent()
      .then((r) => {
        this.renderPdf(1.1, r)
      })
  },
  methods: {
    renderPdf (scale, pdfUrl) {
      PDFJS.workerSrc = require('pdfjs-dist/build/pdf.worker.min')
      // 当 PDF 地址为跨域时，pdf 应该已流的形式传输，否则会出现pdf损坏无法展示
      PDFJS.getDocument({ data: atob(pdfUrl) }).then(pdf => {
        // 得到PDF的总的页数
        let totalPages = pdf.numPages
        console.log(totalPages)
        let idName = 'canvas-pdf-'
        this.pageRendering = false
        // 根据总的页数创建相同数量的canvas
        for (let i = 1; i <= totalPages; i++) {
          pdf.getPage(i).then(page => {
            let pageDiv = document.getElementById(`page-${i}`)
            let viewport = page.getViewport(scale)
            let canvas = document.getElementById(idName + i)
            let context = canvas.getContext('2d')
            canvas.height = viewport.height
            canvas.width = viewport.width
            this.viewWidth = viewport.width
            let renderContext = {
              canvasContext: context,
              viewport
            }
            // 如果你只是展示pdf而不需要复制pdf内容功能，则可以这样写render
            // page.render(renderContext)
            // 如果你需要复制则像下面那样写利用text-layer
            page
              .render(renderContext)
              .then(() => {
                return page.getTextContent()
              })
              .then(textContent => {
                // 创建文本图层div
                const textLayerDiv = document.createElement('div')
                textLayerDiv.setAttribute('class', 'textLayer')
                // 将文本图层div添加至每页pdf的div中
                pageDiv.appendChild(textLayerDiv)
                // 创建新的TextLayerBuilder实例
                let textLayer = new TextLayerBuilder({
                  textLayerDiv: textLayerDiv,
                  pageIndex: page.pageIndex,
                  viewport: viewport
                })
                textLayer.setTextContent(textContent)
                textLayer.render()
                this.pageRendering = true
              })
          })
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .pdfBox {
    width: 100%;
    text-align: center;
    height: 85vh;
    padding-top: 20px;
    z-index: 2000;
  }
  /*.shuqinaI .con {*/
    /*width: 16px;*/
    /*display: inline-block;*/
    /*padding: 2px 0 0 0;*/
  /*}*/
  .controllerBox i {
    padding: 0 10px;
    font-size: 20px;
  }
  .controllerBox {
    text-align: center;
    -moz-user-select: none; /*火狐*/
    -webkit-user-select: none; /*webkit浏览器*/
    -ms-user-select: none; /*IE10*/
    -khtml-user-select: none; /*早期浏览器*/
    user-select: none;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #eee;
    margin-bottom: 10px;
    position: absolute;
    left: 0;
    top: 30px;
    z-index: 1999;
    cursor: pointer;
    i {
      padding: 0 10px;
      font-size: 20px;
    }
  }
  .canvas-pdf {
    margin: 0 auto;
  }
  .pdf-box1s {
    background: #fff;
    border: 1px solid #d8dce6;
    border-radius: 4px;
    border-bottom: none;
    position: relative;
  }
</style>
<style>
  /*.drag-box .el-scrollbar__bar.is-horizontal > div {*/
    /*height: 0 !important;*/
    /*width: 0 !important;*/
  /*}*/
</style>
