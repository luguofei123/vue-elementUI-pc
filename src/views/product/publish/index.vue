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
          <component :is="currentComponent" ref="currentRef" :formData="formData" @updata="updata" :propsString="propsString" :propsObj="propsObj"></component>
        </keep-alive>
      </div>
      <div style="text-align:center;">
        <el-button style="margin-top: 12px;" @click="pre"  :disabled="active===1">上一步</el-button>
        <el-button style="margin-top: 12px;" @click="next" :disabled="active===3">下一步</el-button>
        <el-button style="margin-top: 12px;" @click="submmit" v-if="active===3">提交数据</el-button>
        <el-button style="margin-top: 12px;" @click="test" >测试数据传递按钮</el-button>
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
        // 第一步数据
        resource1: 'imoo',
        desc1: 'qwq',
        detail: 'xxxxx',
        checkedObj: {
          id: '44',
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        // 第二步数据
        submitData: [
          { paramName: '', paramCode: '', paramValName: '', paramValCode: '' }
        ],
        // 第三步数据
        size: '',
        sizePrice: [
          { paramName: '测试1',
            paramCode: 'test1',
            paramValNameList: [
              { paramValName: '111',
                paramValCode: 'bbb1',
                priceTable: [
                  { billingType: '1', priod: '99', priodUnit: '1', guige: 'gggg', rule: 'rule1', price: '1234', priceUnit: '元' },
                  { billingType: '2', priod: '22', priodUnit: '3', guige: 'gggg', rule: 'rule1', price: '1234', priceUnit: '元' }
                ]
              },
              { paramValName: '222', paramValCode: 'bbb2', priceTable: [] }
            ]
          },
          { paramName: '测试2',
            paramCode: 'test2',
            paramValNameList: [
              { paramValName: '333',
                paramValCode: 'bbb2',
                priceTable: [{ billingType: '1', priod: '22', priodUnit: '3', guige: 'gggg', rule: 'rule1', price: '1234', priceUnit: '元' }]
              },
              { paramValName: '444', paramValCode: 'bbb2', priceTable: [] }
            ]
          }
        ]
      },
      provideObj: {
        tel: 'provid18911563700',
        hobby: ['money', 'car']
      },
      provideString: 'provid字符串',
      propsObj: {
        tel: 'props18911563700',
        hobby: ['money', 'car']
      },
      propsString: 'props字符串'
    }
  },
  provide () {
    return {
      provideObj: this.provideObj,
      provideString: this.provideString
    }
  },
  created () {
    setTimeout(() => {
      this.provideObj.tel = 'provid18911563700变化了'
      this.provideString = 'provid字符串变化了'
      this.propsObj.tel = 'props18911563700变化了'
      this.propsString = 'props字符串变化了'
    }, 0)
  },
  methods: {
    test () {
      setTimeout(() => {
        this.provideObj.tel = 'provid18911563700变化了,按钮导致'
        this.provideString = 'provid字符串变化了,按钮导致'
        this.propsObj.tel = 'props18911563700变化了,按钮导致'
        this.propsString = 'props字符串变化了,按钮导致'
      }, 1000)
    },
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
