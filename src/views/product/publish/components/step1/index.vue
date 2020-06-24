<template>
  <div>
      <el-form ref="step1Form" :model="step1Form" label-width="120px" :rules="step1FormFules">
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
      </el-form>
  </div>
</template>
<script>
export default {
  props: {
    formData: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      step1Form: {
        resource1: '',
        desc1: ''
      },
      step1FormFules: {
        resource1: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc1: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    let { resource1, desc1 } = this.formData
    this.step1Form = { resource1, desc1 }
    // Object.assign(this.step1Form, this.formData)
    // console.log(this.step1Form)
  },
  methods: {
    formChecked () {
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
    }
  }
}
</script>
