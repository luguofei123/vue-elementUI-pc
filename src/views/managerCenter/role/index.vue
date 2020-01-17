<template>
        <div class="container">
          <!--条件检索-->
            <div class="search-box">
               <search-bar @search = "search"  roleName></search-bar>
            </div>
          <!--分割线-->
            <el-divider></el-divider>
          <!--动作按钮-->
          <div class="action-box">
            <action-bar @addRow="addRow" @deleteRow="deleteRow"></action-bar>
          </div>
          <!--检索结果-->
            <div class="result-box">
              <table-bar :index.sync="index" indexType="#" :multipleSelection="multipleSelection" @getData="getData"  :data = "tableData" @handleEdit="handleEdit" @handleDelete="handleDelete" :loading="tableLoading"></table-bar>
            </div>
          <!--结果分页-->
            <div class="pagination-box">
              <page-bar :pageConfig="pageConfig" @handleSizeChange = 'handleSizeChange' @handleCurrentChange="handleCurrentChange"></page-bar>
            </div>
          <!-- 编辑弹出框-->
          <edit-form :option="editOption"></edit-form>
          <!-- 删除确认框-->
          <tips-bar :option="tipsOption" @deleteList="deleteList"></tips-bar>
        </div>
</template>
<script>
import searchBar from '../components/searchBar'
import tableBar from '../components/tableBar'
import pageBar from '../components/paginationBar'
import editForm from '../components/editForm'
import actionBar from '../components/actionBar'
export default {
  components: {
    searchBar, tableBar, pageBar, editForm, actionBar
  },
  data () {
    return {
      pageConfig: {
        pageSizes: [10, 20, 30, 40],
        currentPage: 1,
        pageSize: 10,
        total: 0
      },
      index: NaN,
      tableLoading: false,
      tableData: [],
      multipleSelection: [],
      filter: {},
      editOption: {
        isVisible: false
      },
      tipsOption: {
        isVisible: false,
        title: '警告',
        message: '确定要删除吗？'
      }
    }
  },
  created () {
    this.getData()
  },
  watch: {
  },
  computed: {
  },
  methods: {
    // 分页导航
    handleCurrentChange (page) {
      this.pageConfig.currentPage = page
      this.getData()
    },
    handleSizeChange (size) {
      this.pageConfig.pageSize = size
      this.getData()
    },
    search (filter) {
      this.filter = filter
      this.getData()
    },
    getData () {
      this.tableLoading = true
      console.log(this.filter, '请求数据的页码=' + this.pageConfig.currentPage, '每页有几条数据=' + this.pageConfig.pageSize)
      this.tableData.splice(0, this.tableData.length)
      for (let i = 1; i < 11; i++) {
        this.tableData.push({ id: i, date: '2019', name: 'luguofei' + i, address: 'dddddd' + i })
      }
      // this.tableData.push({ id: 1, date: '2016', name: 'luguofei', address: 'dddddd' })
      // delete this.pageObj['total']
      // console.log(this.tableData)
      // this.$set(this.pageObj, 'total', 100)
      let rn = Math.random() * 100
      this.pageConfig.total = parseInt(rn)
      setTimeout(() => {
        this.tableLoading = false
      }, 500)
      // this.loading = false
      // this.$forceUpdate()
      // this.$set(Object, 'total', 100)
      // fetchData({
      //     page: this.cur_page
      // }).then((res) => {
      //     this.tableData = res.list;
      // })
    },
    handleEdit (index, row) {
      console.log(index, row)
      this.idx = index
      this.id = row.id
      this.form = {
        id: row.id,
        name: row.name,
        date: row.date,
        address: row.address
      }
      this.editOption.isVisible = true
    },
    handleDelete (index, row) {
      this.idx = index
      this.id = row.id
      this.tipsOption.isVisible = true
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    // 确定删除
    deleteList () {
      this.$message.success('删除成功')
    },
    // 新增一条数据数据
    addRow () {
      this.tableData.unshift({ id: '', date: '', name: '', address: '' })
      this.index = 0
    },
    // 删除数据或批量删除
    deleteRow () {
      console.log(this.multipleSelection)
    }
  }
}
</script>
<style scoped>
  .action-box{
    margin-bottom: 10px;
  }
</style>
