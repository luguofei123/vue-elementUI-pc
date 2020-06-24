<template>
  <div>
      <el-form ref="step1Form" :model="step1Form" label-width="120px" :rules="step1FormFules">
        <el-form-item label="单选框1" prop="resource">
          <el-radio-group v-model="step1Form.resource">
            <el-radio label="步步高"></el-radio>
            <el-radio label="小天才"></el-radio>
            <el-radio label="imoo"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="文本框1" prop="desc">
          <el-input type="textarea" rows="5" v-model="step1Form.desc"></el-input>
        </el-form-item>
      </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      step1Form: {
        resource: 'imoo',
        desc: 'fr'
      },
      step1FormFules: {
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    formChecked () {
      let isOk
      this.$refs['step1Form'].validate((valid) => {
        if (valid) {
          isOk = true
        } else {
          isOk = false
        }
      })
      return isOk
    }
  }
}
</script>
