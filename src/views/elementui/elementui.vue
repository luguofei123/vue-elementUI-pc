<template>
  <div style="height:100%;">
    <el-container style="height:100%;">
      <el-header>图片转成文字</el-header>
      <el-main>
        <div class="converter-input">
          <el-input type="textarea" :rows="20" placeholder="请粘贴内容" v-on:paste.native="paste" :value="contentText">
          </el-input>
        </div>
        <div class="converter-prompt">所粘贴图片：</div>
        <img class="converter-img" :style="{zoom:zoomScale/100}" :src="pasteImageData" />
      </el-main>
    </el-container>

  </div>
</template>

<script>
import toText from '@/service/api/picToText.js'
export default {
  data () {
    return {
      pasteImageData: '',
      base64Data: '',
      markdownImgSate: '',
      zoomScale: 100,
      imageQuality: 1.0,
      originalBase64: '',
      contentText: ''
    }
  },
  computed: {
    // 为 markdown 语法准备的字符串
    markdownData () {
      return '![' + this.markdownImgSate + '](' + this.base64Data + ')'
    },
    // 为 img 标签准备的字符串
    imgElementData () {
      return '<img src="' + this.base64Data + '" alt="' + this.markdownImgSate + '" style="zoom:' + this.zoomScale / 100 + ';">'
    }
  },
  mounted () {
    // this.getApiToken()
  },
  methods: {
    // toBuffer: function (ab) {
    //   var buf = new Buffer(ab.byteLength)
    //   var view = new Uint8Array(ab)
    //   for (var i = 0; i < buf.length; ++i) {
    //     buf[i] = view[i]
    //   }
    //   return buf
    // },
    // blob 对象转为 base64 编码 buf.toString('base64') 打印结果 iVBORw0KGgoAAAANSUhE...
    blobToBufferBase64 (blob, callback) {
      let reader = new FileReader()
      reader.onload = function (e) {
        var ab = e.target.result
        var buf = Buffer.alloc(ab.byteLength)
        var view = new Uint8Array(ab)
        for (var i = 0; i < buf.length; ++i) {
          buf[i] = view[i]
        }
        // console.log(e.target.result)
        // console.log(view)
        // console.log(buf)
        // console.log(e.target.result.toString('base64'))
        // console.log(view.toString('base64'))
        // console.log(buf.toString('base64'))
        callback(buf.toString('base64'))
      }
      reader.readAsArrayBuffer(blob)
    },
    // blob 对象转为 base64 编码 e.target.result.toString("base64") 打印结果 data:image/png;base64,iVBORw0KGgoAAAANSUhE...
    blobToBase64 (blob, callback) {
      let reader = new FileReader()
      reader.onload = function (e) {
        // console.log(e.target.result.toString('base64'))
        callback(e.target.result)
      }
      reader.readAsDataURL(blob)
    },
    // 压缩图片的 base64 长度
    // compressBase64Length (base64, callback) {
    //   let image = new Image()
    //   let MAX_HEIGHT = 1600
    //   // 回调函数赋值给 onload
    //   image.onload = () => {
    //     let canvas = ''
    //     canvas = document.createElement('canvas')
    //     // document.getElementById("canvasContent").appendChild(canvas)
    //     if (image.height > MAX_HEIGHT) {
    //       image.width *= MAX_HEIGHT / image.height
    //       image.height = MAX_HEIGHT
    //     }
    //     let ctx = canvas.getContext('2d')
    //     ctx.clearRect(0, 0, canvas.width, canvas.height)
    //     canvas.width = image.width
    //     canvas.height = image.height
    //     ctx.drawImage(image, 0, 0, image.width, image.height)
    //     // 调用 canvas 的 api，第二个参数是图片质量
    //     let newBase64 = canvas.toDataURL('image/jpeg', this.imageQuality)
    //     callback(newBase64)
    //   }
    //   // 图片加载完后调用 onload 回调
    //   image.src = base64
    // },
    // 改变滑块的值
    // qualityChange (qualityParam) {
    //   this.compressBase64Length(this.originalBase64, (newBase64) => {
    //     this.pasteImageData = newBase64
    //     this.base64Data = newBase64
    //   })
    // },
    // paste 事件
    paste (e) {
      this.markdownImgSate = ''
      if (!(e.clipboardData && e.clipboardData.items)) {
        return
      }
      // console.log(e)
      for (let i = 0, len = e.clipboardData.items.length; i < len; i++) {
        let item = e.clipboardData.items[i]
        // console.log(item)
        console.log(item.kind)
        if (item.kind === 'file') {
          // pasteFile就是获取到的文件 (blob 对象)
          let pasteFile = item.getAsFile()
          // console.log(pasteFile.type)
          if (pasteFile.size > 0 && pasteFile.type.match('^image/')) {
            // 转换成base64位后向后台发送请求，并将返回数据显示出来
            this.blobToBufferBase64(pasteFile, (data) => {})
            this.blobToBufferBase64(pasteFile, (data) => {
              let p = {
                v: data
              }
              toText.toText(p)
                .then(res => {
                  this.contentText = res
                })
            })
            this.blobToBase64(pasteFile, (data) => {
              // this.originalBase64 = data
              // 压缩图片的 base64 长度
              this.pasteImageData = data
              // this.compressBase64Length(this.originalBase64, (newBase64) => {
              //   this.pasteImageData = newBase64
              //   this.base64Data = newBase64
              // })
            })
          }
        } else {
          console.log('粘贴的不是文件')
        }
      }
    },
    // 复制成功
    onCopy () {
      this.$message({
        message: '复制成功',
        type: 'success'
      })
    },
    // 复制失败
    onError () {
      this.$message.error('复制失败')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header,
  .el-footer {
    background-color: lightblue;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #f9f9f9;
    color: #333;
    text-align: center;
    height: 100%;
    /* line-height: 160px; */
  }

  body>.el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .converter-input {
    display: inline-block;
    width: 60%;
  }

  .converter-prompt {
    display: inline-block;
    width: 60%;
    text-align: left;
    margin-top: 4%;
  }

  .converter-img {
    display: block;
    margin: 2% auto 0 auto;
    box-shadow: 1px 3px 8px grey;
  }

  .converter-button {
    margin-top: 4%;
  }

  .size-slider {
    width: 60%;
    margin: 1% auto 0 auto;
  }

  .size-slider span {
    color: #3692f1;
  }

  .scale-value {
    display: flex;
  }

  .tip {
    width: 60%;
    margin: 2% auto 0 auto;
    padding: 8px 16px;
    background-color: #f3f0f0;
    border-radius: 4px;
    border-left: 5px solid #909399;
    text-align: left;
  }
</style>
