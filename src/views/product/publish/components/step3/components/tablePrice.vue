<template>
    <div>
        <el-form :ref="'form'+index+index1" :model="form" label-width="0px" :rules="rules">
            <el-table :data="form.tableData"  border  ref="table" size="mini">
                <el-table-column prop="billingType" label="计费方式" >
                <template slot-scope="scope">
                    <el-form-item :prop="'tableData.'+scope.$index+'.billingType'" :rules="rules.billingType">
                    <el-select v-model="scope.row.billingType" placeholder="请选择" >
                        <el-option key="1" label="一次性费用" value="1"></el-option>
                        <el-option key="2" label="包年包月" value="2"></el-option>
                    </el-select>
                    </el-form-item>
                </template>
                </el-table-column>
                <el-table-column prop="priod" label="售卖周期" width="220">
                <template slot-scope="scope">
                    <el-form-item :prop="'tableData.'+scope.$index+'.priod'" :rules="rules.priod" style="float:left;margin-right:5px;">
                    <el-input v-model="scope.row.priod" style="width:100px;"></el-input>
                    </el-form-item>
                    <el-form-item :prop="'tableData.'+scope.$index+'.priodUnit'" :rules="rules.priodUnit" style="float:left;">
                    <el-select v-model="scope.row.priodUnit" placeholder="请选择" style="width:90px;">
                        <el-option key="1" label="年" value="1"></el-option>
                        <el-option key="2" label="月" value="2"></el-option>
                        <el-option key="3" label="日" value="3"></el-option>
                    </el-select>
                    </el-form-item>
                </template>
                </el-table-column>
                <el-table-column prop="guige" label="规格" >
                <template slot-scope="scope">
                    <span style="display:inline-block;height:50px;line-height:30px;">{{scope.row.guige}}</span>
                </template>
                </el-table-column>
                <el-table-column prop="rule" label="rule" >
                <template slot-scope="scope">
                    <span style="display:inline-block;height:50px;line-height:30px;">{{scope.row.rule}}</span>
                </template>
                </el-table-column>
                <el-table-column prop="price" label="价格" width="150">
                <template slot-scope="scope">
                    <el-form-item :prop="'tableData.'+scope.$index+'.price'" :rules="rules.price" style="float:left;margin-right:5px;">
                    <el-input v-model="scope.row.price" style="width:110px;"></el-input>
                    </el-form-item>
                    <span style="display:inline-block;height:40px;line-height:30px;">{{scope.row.priceUnit}}</span>
                </template>
                </el-table-column>
                <el-table-column prop="opration" label="操作" >
                <template slot-scope="scope">
                    <el-form-item >
                    <el-button @click="deletePriceList(scope.$index)">删除</el-button>
                    </el-form-item>
                </template>
                </el-table-column>
            </el-table>
        </el-form>
        <el-button @click="addPriceList">增加一行</el-button>
    </div>
</template>

<script>
export default {
  props: {
    priceTable: {
      type: Array,
      default () {
        return []
      }
    },
    index: {
      type: Number,
      default () {
        return 0
      }
    },
    index1: {
      type: Number,
      default () {
        return 0
      }
    }
  },
  data () {
    return {
      form: {
        tableData: JSON.parse(JSON.stringify(this.priceTable))
      },
      rules: {
        billingType: [
          { required: true, message: '选择费用类型', trigger: 'change' }
        ],
        priod: [
          { required: true, message: '周期不能为空', trigger: 'blur' }
        ],
        priodUnit: [
          { required: true, message: '选择周期单位', trigger: 'change' }
        ],
        price: [
          { required: true, message: '价格不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    addPriceList () {
      if (this.formChecked('form' + this.index + this.index1)) {
        let obj = { billingType: '', priod: '', priodUnit: '', guige: 'gggg', rule: 'rule1', price: '0', priceUnit: '元' }
        this.form.tableData.push(obj)
        this.$emit('updataTable', this.index, this.index1, this.form.tableData)
      } else {
        this.$message.error('数据填写正确后才能添加新数据')
      }
    },
    deletePriceList (index) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.form.tableData.splice(index, 1)
        this.$emit('updataTable', this.index, this.index1, this.form.tableData)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    formChecked (form) {
      let isOk
      this.$refs[form].validate((valid) => {
        if (valid) {
          isOk = true
        } else {
          isOk = false
        }
      })
      return isOk
    },
    zhudong (v, s) {
      // console.log(this)
      // console.log(s)
      this.$refs.form.validateField('tableData.' + s + '.name')
    }
  }
}
</script>
