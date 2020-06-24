<template>
  <div>
      <el-form ref="step2Form" :model="step2Form" label-width="120px" :rules="step2FormFules">
        <el-form-item label="单选框2" prop="resource">
          <el-radio-group v-model="step2Form.resource">
            <el-radio label="步步高"></el-radio>
            <el-radio label="小天才"></el-radio>
            <el-radio label="imoo"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="文本框2" prop="desc">
          <el-input type="textarea" rows="5" v-model="step2Form.desc"></el-input>
        </el-form-item>
      </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      step2Form: {
        resource: 'imoo',
        desc: 'fr'
      },
      step2FormFules: {
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
      this.$refs['step2Form'].validate((valid) => {
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
