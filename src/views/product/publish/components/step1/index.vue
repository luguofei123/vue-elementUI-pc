<template>
  <div>
      <el-form ref="step1Form" :model="step1Form" label-width="120px" :rules="step1FormFules">
        <el-form-item label="选择器">
          <el-select v-model="step1Form.region" placeholder="请选择">
            <el-option key="bbk" label="镜像" value="bbk"></el-option>
            <el-option key="xtc" label="API" value="xtc"></el-option>
            <el-option key="imoo" label="线下交付" value="imoo"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="单选框1" prop="resource1">
          <el-radio-group v-model="step1Form.resource1">
            <el-radio label="步步高"></el-radio>
            <el-radio label="小天才"></el-radio>
            <el-radio label="imoo"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="文本框1" prop="desc1">
          <el-input type="textarea" rows="5" v-model="step1Form.desc1"></el-input>
        </el-form-item>
        <el-form-item label="产品详情" prop="detail">
          <editor-wang :initContent="step1Form.detail" @updateContent="updateContent"></editor-wang>
        </el-form-item>
        <el-form-item label="表格" prop="checkedObj">
          <api-table :obj="step1Form.checkedObj" @updatecheckedObj="updatecheckedObj"></api-table>
        </el-form-item>
      </el-form>
  </div>
</template>
<script>
import editorWang from './components/editorWang'
import apiTable from './components/apiTable/index'
export default {
  components: {
    editorWang,
    apiTable
  },
  props: {
    formData: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    const validContent = function (rule, value, callback) {
      if (value === '' || value === undefined || value === null) {
        callback(new Error('详情不能为空'))
      } else {
        callback()
      }
    }
    const validcheckedObj = function (rule, value, callback) {
      if (value.id === '' || value.id === undefined || value.id === null) {
        callback(new Error('选择不能为空'))
      } else {
        callback()
      }
    }
    return {
      step1Form: {
        region: '',
        resource1: '',
        desc1: '',
        detail: '',
        checkedObj: {}
      },
      step1FormFules: {
        resource1: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc1: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ],
        detail: [
          { required: true, validator: validContent, trigger: 'blur,change' }
        ],
        checkedObj: [
          { required: true, validator: validcheckedObj, trigger: 'blur,change' }
        ]
      }
    }
  },
  created () {
    let { resource1, desc1, detail, checkedObj } = this.formData
    this.step1Form = { resource1, desc1, detail, checkedObj }
    // Object.assign(this.step1Form, this.formData)
    // console.log(this.step1Form)
  },
  methods: {
    formChecked () {
      // console.log(this.$refs['step1Form'])
      let isOk
      this.$refs['step1Form'].validate((valid) => {
        if (valid) {
          isOk = true
          this.$emit('updata', this.step1Form)
        } else {
          isOk = false
        }
      })
      return isOk
    },
    updateContent (html) {
      this.step1Form.detail = html
      if (html === '<p><br></p>') {
        this.step1Form.detail = ''
      }
      // console.log('执行了')
      this.$refs['step1Form'].validateField('detail')
    },
    updatecheckedObj (obj) {
      this.step1Form.checkedObj = obj
      this.$refs['step1Form'].validateField('checkedObj')
    }
  }
}
</script>
