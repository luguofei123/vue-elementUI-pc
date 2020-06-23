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
      <div>
        <component :is="currentComponent"></component>
      </div>
      <div>
        <el-button style="margin-top: 12px;" @click="next" :disabled="active===3">下一步</el-button>
        <el-button style="margin-top: 12px;" @click="pre"  :disabled="active===1">上一步</el-button>
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
      currentComponent: ComponentArray[0]
    }
  },
  methods: {
    next () {
      if (this.active++ > 2) this.active = 0
      this.currentComponent = ComponentArray[this.active - 1]
    },
    pre () {
      if (this.active-- < 0) this.active = 0
      this.currentComponent = ComponentArray[this.active - 1]
    }
  }
}
</script>
