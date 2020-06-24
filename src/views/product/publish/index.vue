<template>
  <div>
    <div class="container">
      <div>
        <el-steps :active="active" finish-status="success">
          <el-step title="步骤 1"></el-step>
          <el-step title="步骤 2"></el-step>
          <el-step title="步骤 3"></el-step>
        </el-steps>
      </div>
      <div style="margin-top:50px;">
        <keep-alive>
          <component :is="currentComponent" ref="currentRef" :formData="formData" @updata="updata"></component>
        </keep-alive>
      </div>
      <div style="text-align:center;">
        <el-button style="margin-top: 12px;" @click="pre"  :disabled="active===1">上一步</el-button>
        <el-button style="margin-top: 12px;" @click="next" :disabled="active===3">下一步</el-button>
        <el-button style="margin-top: 12px;" @click="submmit" v-if="active===3">提交数据</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import step1 from './components/step1/index'
import step2 from './components/step2/index'
import step3 from './components/step3/index'
var ComponentArray = [step1, step2, step3]
export default {
  name: 'baseform',
  data () {
    return {
      active: 1,
      currentComponent: ComponentArray[0],
      formData: {
        resource1: '',
        desc1: '',
        resource2: '',
        desc2: '',
        resource3: '',
        desc3: ''
      }
    }
  },
  methods: {
    next () {
      if (this.$refs.currentRef.formChecked()) {
        if (this.active++ > 2) this.active = 0
        this.currentComponent = ComponentArray[this.active - 1]
      }
    },
    pre () {
      if (this.active-- < 0) this.active = 0
      this.currentComponent = ComponentArray[this.active - 1]
    },
    submmit () {
      if (this.$refs.currentRef.formChecked()) {
        console.log(this.formData)
      }
    },
    updata (v) {
      Object.assign(this.formData, v)
      // console.log(this.formData)
    }
  }
}
</script>
