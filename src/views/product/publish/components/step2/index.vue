<template>
  <div>
      <el-form ref="step2Form" :model="step2Form" label-width="120px" :rules="step2FormFules">
        <el-form-item label="单选框2" prop="resource2">
          <el-radio-group v-model="step2Form.resource2">
            <el-radio label="步步高"></el-radio>
            <el-radio label="小天才"></el-radio>
            <el-radio label="imoo"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="文本框2" prop="desc2">
          <el-input type="textarea" rows="5" v-model="step2Form.desc2"></el-input>
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
      step2Form: {
        resource2: '',
        desc2: ''
      },
      step2FormFules: {
        resource2: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc2: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    let { resource2, desc2 } = this.formData
    this.step2Form = { resource2, desc2 }
  },
  methods: {
    formChecked () {
      let isOk
      this.$refs['step2Form'].validate((valid) => {
        if (valid) {
          isOk = true
          this.$emit('updata', this.step2Form)
        } else {
          isOk = false
        }
      })
      return isOk
    }
  }
}
</script>
