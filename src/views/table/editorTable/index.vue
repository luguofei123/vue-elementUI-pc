<template>
        <div class="container">
          <!--条件检索-->
            <div class="search-box">
               <search-bar @search = "search" isHaveAddress isHaveUsername></search-bar>
            </div>
          <!--分割线-->
            <el-divider></el-divider>
          <!--动作按钮-->
          <div class="action-box">
            <action-bar @addRow="addRow" @deleteRow="deleteRow"></action-bar>
          </div>
          <!--检索结果-->
            <div class="result-box">
              <result-bar :columns="columns" :index.sync="index" indexType="#" :multipleSelection="multipleSelection" @getData="getData"  :data = "tableData" @handleEdit="handleEdit" @handleDelete="handleDelete" :loading="tableLoading"></result-bar>
            </div>
          <!--结果分页-->
            <div class="pagination-box">
              <page-bar :total="total" @handleSizeChange = 'handleSizeChange' @handleCurrentChange="handleCurrentChange"></page-bar>
            </div>
          <!-- 编辑弹出框-->
          <edit-form :option="editOption"></edit-form>
          <!-- 删除确认框-->
          <tips-bar :option="tipsOption" @deleteList="deleteList"></tips-bar>
        </div>
</template>
<script>
import searchBar from '../components/searchBar'
import resultBar from '../components/resultBar'
import pageBar from '../components/paginationBar'
import editForm from '../components/editForm'
import actionBar from '../components/actionBar'
export default {
  components: {
    searchBar, resultBar, pageBar, editForm, actionBar
  },
  data () {
    return {
      index: NaN,
      total: 0,
      currentPage: 1,
      pageSize: 10,
      tableLoading: false,
      tableData: [],
      multipleSelection: [],
      select_cate: '',
      filter: {},
      del_list: [],
      is_search: false,
      editVisible: false,
      editOption: {
        isVisible: false
      },
      tipsOption: {
        isVisible: false,
        title: '警告',
        message: '确定要删除吗？'
      },
      columns: []
    }
  },
  created () {
    setTimeout(() => {
      // let formatterAddress = eval('formatterAddress')
      this.columns = [
        { prop: 'date', label: '日期', width: '150', sortable: false },
        { prop: 'name', label: '姓名', width: '150', sortable: true },
        { prop: 'address', label: '地址', width: '250', sortable: true },
        { prop: 'nation1', label: '民族1', width: '250', sortable: true },
        { prop: 'nation2', label: '民族2', width: '150', sortable: true },
        { prop: 'nation3', label: '民族3', width: '150', sortable: true },
        { prop: 'nation4', label: '民族4', width: '150', sortable: true }
      ]
    }, 0)
    // this.getData()
  },
  watch: {
  },
  computed: {
  },
  methods: {
    // 分页导航
    handleCurrentChange (page) {
      this.currentPage = page
      this.getData()
    },
    handleSizeChange (size) {
      this.pageSize = size
      this.getData()
    },
    search (filter) {
      this.filter = filter
      this.getData()
    },
    getData () {
      this.tableLoading = true
      // console.log(this.filter, '请求数据的页码=' + this.currentPage, '每页有几条数据=' + this.pageSize)
      // this.tableData.splice(0, this.tableData.length)
      // for (let i = 1; i < 11; i++) {
      //   this.tableData.push({ id: i, date: '201' + i, name: 'luguofei' + i, address: 'dddddd' + i })
      // }
      // let data = {
      //   name: 'luguofei'
      // }
      this.tableData = []
      // this.$MyAxios.tablePage.getData(data)
      //   .then(r => {
      //     this.tableData = r
      //   })
      // this.tableData.push({ id: 1, date: '2016', name: 'luguofei', address: 'dddddd' })
      // delete this.pageObj['total']
      // console.log(this.tableData)
      // this.$set(this.pageObj, 'total', 100)
      let rn = Math.random() * 100
      this.total = parseInt(rn)
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
