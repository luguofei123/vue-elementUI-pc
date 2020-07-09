<template>
  <div>
    <el-form  :model="formTemp" label-width="120px">
      <el-row :gutter="10">
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
          <el-form-item label="计费项中文名">
            <el-input v-model="formTemp.paramName" placeholder="计费项中文名"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
          <el-form-item label="计费项英文名">
            <el-input v-model="formTemp.paramCode" placeholder="计费项英文名"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <p>-------------------------------------------------------- -------------------------------------------------------------------------------</p>
    <div v-for="(item,index) in submitData" :key="index">
      <el-form  :model="item"  :key="index" label-width="120px">
        <el-row :gutter="10">
          <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
            <el-form-item :label="item.paramName + ':'" prop="paramValName"  :rules="{required: true, message: '请输入数中文参数', trigger: 'blur'}">
              <el-input v-model="item.paramValName" placeholder="" :disabled="item.paramName===''"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
            <el-form-item :label="item.paramCode + ':'" prop="paramValCode" :rules="{required: true, message: '请输入英文参数', trigger: 'blur'}">
              <el-input v-model="item.paramValCode" placeholder="" :disabled="item.paramCode===''"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="4" :sm="6" :md="8" :lg="6" :xl="11">
              <el-button type="danger" icon="el-icon-minus" @click="minus(index)" v-if="!(index===0)"></el-button>
              <el-button type="success" icon="el-icon-plus" @click="addList(index)"></el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
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
      formTemp: {
        paramName: '',
        paramCode: ''
      },
      submitData: [
        // { paramName: '', paramCode: '', prePrdSpecParamValList: [{ paramValName: '', paramValCode: '' }] }
        { paramName: '', paramCode: '', paramValName: '', paramValCode: '' }
      ]
    }
  },
  computed: {
    obj () {
      return {
        paramName: this.formTemp.paramName,
        paramCode: this.formTemp.paramCode
      }
    },
    submitDataLastIndex () {
      let lastIndex = 0
      this.submitData.forEach((item, index) => {
        item.prePrdSpecParamValList.forEach((item, index) => {
          lastIndex += 1
        })
      })
      return lastIndex
    }
  },
  watch: {
    obj (o) {
      this.submitData[this.submitData.length - 1].paramName = o.paramName
      this.submitData[this.submitData.length - 1].paramCode = o.paramCode
    }
  },
  created () {
    let { resource2, desc2 } = this.formData
    this.step2Form = { resource2, desc2 }
  },
  methods: {
    formChecked () {
      console.log(this.submitData)
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
    },
    addList (index) {
      let arr = [
        { paramName: '测试1', paramCode: 'test1', paramValName: 'aaa', paramValCode: 'bbb' },
        { paramName: '测试2', paramCode: 'test2', paramValName: 'aaa2', paramValCode: 'bbb2' },
        { paramName: '测试1', paramCode: 'test1', paramValName: 'aaa', paramValCode: 'bbb' }
      ]
      this.aggregationArray(arr)
      console.log(index)
      this.submitData.push({ paramName: this.formTemp.paramName, paramCode: this.formTemp.paramCode, paramValName: '', paramValCode: '' })
    },
    minus (index) {
      console.log(index)
      this.submitData.splice(index, 1)
      this.formTemp.paramName = this.submitData[this.submitData.length - 1].paramName
      this.formTemp.paramCode = this.submitData[this.submitData.length - 1].paramCode
    },
    // 对象数组聚合函数 根据某个字段来合并数组
    aggregationArray (array) {
      let arr = []
      let obj = {}
      array.forEach((item, index) => {
        if (!obj[item.paramName]) {
          // delete item.paramName
          arr.push({
            paramName: item.paramName,
            pramList: [
              { paramValName: item.paramValName, paramValCode: item.paramValCode }
            ]
          })
          obj[item.paramName] = 1
        } else {
          arr.forEach((item1, index1) => {
            if (item1.paramName === item.paramName) {
              item1.pramList.push(
                { paramValName: item.paramValName, paramValCode: item.paramValCode }
              )
            }
          })
        }
      })
      console.log(arr)
    }
  }
}
</script>
