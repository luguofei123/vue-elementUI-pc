<template>
<div>
  <el-table :data="data"  border class="table" ref="table"
            size="mini"
            style="width: 100%"
            v-loading="loading"
            element-loading-text="拼命加载中"
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0, 0, 0, 0.8)"
            @selection-change="handleSelectionChange" >
    <!--是否显示选择框，或者是序号 -->
    <template v-if="indexType === 'expand'">
      <el-table-column type="expand">
        <span>11</span>
      </el-table-column>
    </template>
      <template v-if="indexType === 'select'">
        <el-table-column type="selection" width="55" align="center"></el-table-column>
      </template>
      <template v-if="indexType === '#'">
        <el-table-column type="index" width="55" align="center"></el-table-column>
      </template>
      <template v-if="indexType === '序号'">
        <el-table-column label="序号" width="55" align="center">
          <template slot-scope="scope">
            <span>{{scope.$index + 1}}</span>
          </template>
        </el-table-column>
      </template>
    <!--渲染table 列数据-->
    <template v-for="column in columns">
      <el-table-column :prop="column.prop" :width="column.width" :label="column.label" :key="column.prop" align="center" :sortable="column.sortable" :formatter="column.formatter">
        <template slot-scope="{row,$index}">
          <el-input  v-if="$index === index"    v-model="row[column.prop]"></el-input>
          <span v-else >{{row[column.prop] | filterAdd1 }}</span>
        </template>
      </el-table-column>
    </template>
    <!--操作列数据 删除 编辑 保存 取消编辑 等操作-->
    <el-table-column label="操作" width="280" align="center" fixed="right">
      <template slot-scope="scope">
        <el-button v-if="scope.$index === index" type="text" icon="el-icon-edit" @click="cancelEditInRows(scope.$index, scope.row)">取消行内编辑</el-button>
        <el-button v-if="scope.$index === index" type="text" icon="el-icon-edit" @click="save(scope.$index, scope.row)">保存</el-button>
        <el-button v-if="!(scope.$index === index)" type="text" icon="el-icon-edit" @click="handleEditInRows(scope.$index, scope.row)">行内编辑</el-button>
        <el-button type="text" icon="el-icon-edit" @click="alertEdit(scope.$index, scope.row)">弹出框编辑</el-button>
        <el-button type="text" icon="el-icon-edit" @click="skipEdit(scope.$index, scope.row)">页面跳转编辑</el-button>
        <el-button type="text" icon="el-icon-delete" class="red" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>
<script>
export default {
  name: 'resultBar',
  props: {
    data: {
      type: Array,
      default: function () {
        return []
      }
    },
    loading: {
      type: Boolean,
      default: true
    },
    index: {
      type: Number,
      dafault: NaN
    },
    indexType: {
      type: String,
      default: '#'
    },
    multipleSelection: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      columns: []
    }
  },
  filters: {
    filterAdd1 (item) {
      return item + 10
    },
    filterAdd2 (item) {
      return 'aaaa' + item
    }
  },
  created () {
    console.log(this.$options.filters.filterAdd1.name)
    setTimeout(() => {
      // let formatterAddress = eval('formatterAddress')
      this.columns = [
        { prop: 'date', label: '日期', width: '150', sortable: false, filters: this.$options.filters.filterAdd1.name },
        { prop: 'name', label: '姓名', width: '150', sortable: true },
        { prop: 'address', label: '地址', width: '250', sortable: true },
        { prop: 'nation1', label: '民族1', width: '250', sortable: true },
        { prop: 'nation2', label: '民族2', width: '150', sortable: true },
        { prop: 'nation3', label: '民族3', width: '150', sortable: true },
        { prop: 'nation4', label: '民族4', width: '150', sortable: true }
      ]
    }, 1000)
  },
  methods: {
    alertEdit (index, row) {
      this.$emit('handleEdit', index, row)
    },
    skipEdit (index, row) {
      // 路由跳转
      this.$router.push({
        name: 'editorRole',
        params: {
          id: row.id
        }
      })
    },
    handleDelete (index, row) {
      this.$emit('handleDelete', index, row)
    },
    handleSelectionChange (arr) {
      this.multipleSelection.splice(0, this.multipleSelection.length)
      this.multipleSelection.push(...arr)
    },
    handleEditInRows (index, row) {
      this.$emit('update:index', index)
      console.log(index, row)
    },
    cancelEditInRows (index, row) {
      this.$emit('update:index', NaN)
      // this.$emit('getData')
      if (!row.id || row.id === '') {
        this.data.shift()
      }
      console.log(index, row)
    },
    save (index, row) {
      console.log(index, row)
      this.$emit('update:index', NaN)
    },
    formatterAddress (row) {
      console.log(121)
      return row.address + 'dddd'
    }
  }
}
</script>

<style scoped>
  .table{
    width: 100%;
    font-size: 14px;
  }
  .red{
    color: #ff0000;
  }
</style>
