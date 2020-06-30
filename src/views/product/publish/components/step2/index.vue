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
    <p>---------------------------------------------------------------------------------------------------------------------------------------</p>
    <div v-for="(item,index) in submitData" :key="index">
      <el-form  :model="item" v-for="(item1,index1) in item.prePrdSpecParamValList" :key="index1" label-width="120px">
        <el-row :gutter="10">
          <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
            <el-form-item :label="item.paramName">
              <el-input v-model="item1.paramValName" placeholder=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
            <el-form-item :label="item.paramCode">
              <el-input v-model="item1.paramValCode" placeholder=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="4" :sm="6" :md="8" :lg="6" :xl="11">
              <el-button type="success" icon="el-icon-plus" @click="add" ></el-button>
              <el-button type="danger" icon="el-icon-minus" @click="minus(index,index1)" v-if="submitData.length>1"></el-button>
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
        { paramName: '', paramCode: '', prePrdSpecParamValList: [{ paramValName: '', paramValCode: '' }] }
      ]
    }
  },
  computed: {
    obj () {
      return {
        paramName: this.formTemp.paramName,
        paramCode: this.formTemp.paramCode
      }
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
    add () {
      console.log('add')
    },
    minus (index, index1) {
      console.log('minus')
    }
  }
}
</script>
