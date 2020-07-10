<template>
  <div>
      <el-form ref="step3Form" :model="step3Form" label-width="150px" :rules="step3FormFules">
        <el-form-item label="选择计费参数：" prop="resource3">
          <el-select v-model="step3Form.size" placeholder="请选择">
            <el-option label="规格" value="1"></el-option>
            <el-option label="版本" value="2"></el-option>
          </el-select>
        </el-form-item>
        <div v-for="(item,index) in step3Form.sizePrice" :key="index">
            <el-form-item :label="'请配置'+item1.paramValName+'的价格：'" v-for="(item1, index1) in item.paramValNameList" :key="index1">
              <table-price></table-price>
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
    return {
      step3Form: {
        size: '',
        sizePrice1: [1, 2, 3],
        sizePrice: [
          { paramName: '测试1', paramCode: 'test', paramValNameList: [{ paramValName: 'aaa1', paramValCode: 'bbb1' }, { paramValName: 'aaa2', paramValCode: 'bbb2' }] }
        ]
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
    // let { resource3, desc3 } = this.formData
    // this.step3Form = { resource3, desc3 }
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
