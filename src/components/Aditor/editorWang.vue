<template>
  <div>
    <div ref="editor"></div>
    <el-button  class="editor-btn" type="danger" @click="cleanContent">清空</el-button>
    <el-button  class="editor-btn" type="primary" @click="submitContent">提交</el-button>
  </div>
</template>
<script>
import Editor from 'wangeditor'
// import XSS from 'xss'
export default {
  props: {
    initContent: {
      type: String,
      default: '<p>请输入内容...</p>'
    }
  },
  watch: {
    // 此步观察略显多余，保存成功或不成功，编辑器显示的内容都不会变化。
    initContent (v) {
      this.editorContent = v
      this.editor.txt.html(v)
    }
  },
  data () {
    return {
      editor: null,
      editorContent: this.initContent
    }
  },
  mounted () {
    // 初始化编辑器对象
    this.editor = new Editor(this.$refs.editor)
    // this.editor.customConfig.emotions = []
    // 下面两个配置，使用其中一个即可显示“上传图片”的tab。但是两者不要同时使用！！！
    // 使用 base64 保存图片
    this.editor.customConfig.uploadImgShowBase64 = true
    // 上传图片到服务器
    // this.editor.customConfig.uploadImgServer = '/upload'
    // 隐藏“网络图片”tab
    this.editor.customConfig.showLinkImg = false
    // 实时监控文本内容变化
    this.editor.customConfig.onchange = (html) => {
      this.editorContent = html
      // let json = this.editor.txt.getJSON()
      // let jsonStr = JSON.stringify(json)
      // this.editorContent = jsonStr
    }
    this.editor.create()
    // 初始化编辑器的内容，一般这个内容是从后台传过来的，这个地方应该用异步操作
    setTimeout(() => {
      this.editor.txt.html(this.initContent)
    }, 500)
  },
  methods: {
    cleanContent () {
      this.editor.txt.clear()
    },
    submitContent () {
      // alert(this.editorContent)
      this.$emit('submit', this.editorContent)
    }
  }
}
</script>
<style  lang="scss" scoped>
  .editorBox{
  }
  .editor-btn {
    margin-top: 20px;
  }
  /* table 样式 */
  table {
    border-top: 10px solid #ccc;
    border-left: 1px solid #ccc;
  }
  table td,
  table th {
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    padding: 3px 5px;
  }
  table th {
    border-bottom: 2px solid #ccc;
    text-align: center;
  }

  /* blockquote 样式 */
  blockquote {
    display: block;
    border-left: 8px solid #d0e5f2;
    padding: 5px 10px;
    margin: 10px 0;
    line-height: 1.4;
    font-size: 100%;
    background-color: #f1f1f1;
  }

  /* code 样式 */
  code {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    background-color: #f1f1f1;
    border-radius: 3px;
    padding: 3px 5px;
    margin: 0 3px;
  }
  pre code {
    display: block;
  }

  /* ul ol 样式 */
  ul, ol {
    margin: 10px 0 10px 20px;
  }
</style>
