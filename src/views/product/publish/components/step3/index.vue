<template>
  <div>
      <el-form ref="step3Form" :model="step3Form" label-width="120px" :rules="step3FormFules">
        <el-form-item label="单选框3" prop="resource3">
          <el-radio-group v-model="step3Form.resource3">
            <el-radio label="步步高"></el-radio>
            <el-radio label="小天才"></el-radio>
            <el-radio label="imoo"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="文本框3" prop="desc3">
          <el-input type="textarea" rows="5" v-model="step3Form.desc3"></el-input>
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
      step3Form: {
        resource3: '',
        desc3: ''
      },
      step3FormFules: {
        resource3: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc3: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    let { resource3, desc3 } = this.formData
    this.step3Form = { resource3, desc3 }
  },
  methods: {
    formChecked () {
      let isOk
      this.$refs['step3Form'].validate((valid) => {
        if (valid) {
          isOk = true
          this.$emit('updata', this.step3Form)
        } else {
          isOk = false
        }
      })
      return isOk
    }
  }
}
</script>
