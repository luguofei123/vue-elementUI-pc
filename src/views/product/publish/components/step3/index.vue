<template>
  <div>
      <el-form ref="step3Form" :model="step3Form" label-width="160px" :rules="step3FormFules">
        <el-form-item label="选择计费参数：" prop="size">
          <el-select v-model="step3Form.size" placeholder="请选择">
            <el-option label="规格" value="1"></el-option>
            <el-option label="版本" value="2"></el-option>
          </el-select>
        </el-form-item>
        <div v-for="(item,index) in step3Form.sizePrice" :key="index">
            <el-form-item :label="'请配置'+item1.paramValName+'的价格：'" :prop="'sizePrice.'+index+'.paramValNameList.'+index1+'.priceTable'"  :rules="step3FormFules.priceTable" v-for="(item1, index1) in item.paramValNameList" :key="index1">
              <table-price :ref="'table'+index+index1" :priceTable="item1.priceTable" @valitorTable="valitorTable" :index="index" :index1="index1"></table-price>
            </el-form-item>
        </div>
      </el-form>
  </div>
</template>
<script>
import tablePrice from './components/tablePrice'
export default {
  components: {
    tablePrice
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
    const validTable = (rule, value, callback) => {
      // console.log(rule)
      // console.log(value)
      // 判断价格表数据校验是否成功 获取的是价格表的ref值，根据这个去调用验证函数
      let arr = rule.field.split('.')
      let index = arr[1]
      let index1 = arr[3]
      if (!this.$refs['table' + index + index1][0].formChecked('form' + index + index1)) {
        callback(new Error('价格数据校验失败'))
      }
      // 判断价格表数据是否有重复
      let billingTypeIndex = 0
      let priodAndUnitIndex = 0
      for (let i = 0; i < value.length; i++) {
        for (let j = i + 1; j < value.length; j++) {
          if (value[i].billingType === '1' && value[i].billingType === value[j].billingType) {
            billingTypeIndex += 1
          }
          if (value[i].priod === value[j].priod && value[i].priodUnit === value[j].priodUnit && value[i].billingType === value[j].billingType) {
            priodAndUnitIndex += 1
          }
        }
      }
      // console.log(billingTypeIndex)
      if (billingTypeIndex > 0) {
        callback(new Error('一个规格版本一次性费用只能选择一次'))
      } else if (priodAndUnitIndex > 0) {
        callback(new Error('计费方式，周期不能同时相同'))
      } else {
        callback()
      }
    }
    return {
      step3Form: {
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
              }
              // { paramValName: '222', paramValCode: 'bbb2', priceTable: [] }
            ]
          }
          // { paramName: '测试2',
          //   paramCode: 'test2',
          //   paramValNameList: [
          //     { paramValName: '333',
          //       paramValCode: 'bbb2',
          //       priceTable: [{ billingType: '1', priod: '22', priodUnit: '3', guige: 'gggg', rule: 'rule1', price: '1234', priceUnit: '元' }]
          //     },
          //     { paramValName: '444', paramValCode: 'bbb2', priceTable: [] }
          //   ]
          // }
        ]
      },
      step3FormFules: {
        size: [
          { required: true, message: '选择版本', trigger: 'change' }
        ],
        priceTable: [
          { type: 'array', required: true, message: '请至少选择一条数据', trigger: 'change' },
          { type: 'array', required: true, validator: validTable, trigger: 'change,blur' }
        ]
      }
    }
  },
  created () {
    // let { resource3, desc3 } = this.formData
    // this.step3Form = { resource3, desc3 }
  },
  methods: {
    // 只校验价格表数组priceTable这个数据的合法性
    valitorTable (index, index1) {
      // this.step3Form.sizePrice[index].paramValNameList[index1].priceTable = array
      this.$nextTick(() => {
        this.$refs['step3Form'].validateField('sizePrice.' + index + '.paramValNameList.' + index1 + '.priceTable')
      })
    },
    formChecked () {
      // console.log('父表单开始验证')
      let isOk
      this.$refs['step3Form'].validate((valid) => {
        if (valid) {
          // console.log('父表单验证通过')
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
