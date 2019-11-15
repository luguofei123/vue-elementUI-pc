<template>
        <div class="container">
          <div style="width:675px;margin:10px auto">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="角色名称">
              <el-input v-model="form.name" size="mini"></el-input>
            </el-form-item>
            <el-form-item label="角色描述">
              <el-input v-model="form.desc" size="mini"></el-input>
            </el-form-item>
            <el-form-item label="权限管理">
              <div class="treeBox">
                <el-input placeholder="输入关键字进行过滤" v-model="filterText" size="mini" class="filterInput"></el-input>
                <el-button @click="setCheckedNodes(treeData)" type="success" size="mini">全选</el-button>
                <el-button @click="resetChecked" type="warning" size="mini">取消全选</el-button>
                <el-tree
                  :data="treeData"
                  show-checkbox
                  default-expand-all
                  :filter-node-method="filterNode"
                  node-key="id"
                  ref="tree"
                  highlight-current
                  :props="defaultProps">
                </el-tree>
              </div>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button @click="cancel">取消</el-button>
            </el-form-item>
          </el-form>
          </div>
        </div>
</template>
<script>
import menu from '@/const/menu'
export default {
  components: {
  },
  data () {
    return {
      filterText: '',
      treeData: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      form: {
      }
    }
  },
  computed: {
  },
  mounted: function () {
    // 获取不到ref-tree的原因是对话框子组件是隐藏的 ，当然获取不到，包括form表单也是通过ref获取不到的
    // this.setCheckedKeys()
    this.treeData = this.formatMenu(menu)
    // console.log(this.isIndexInMenu(['21-1']))
  },
  updated: function () {
    // 虽然可以获取到ref，但是代价太大 每一次数据变化都更新
    // console.log(222)
    // this.setCheckedKeys()
  },
  watch: {
    filterText (val) {
      this.$refs.tree.filter(val)
    }
  },
  methods: {
    formatMenu (menu) {
      let regId = /index/g
      let regLabel = /menuName/g
      // 以下是测试
      // let reg1 = /buttonChildren/g
      // let reg2 = /buttonName/g
      // 以上是测试
      let result = JSON.stringify(menu)
        .replace(regId, 'id')
        .replace(regLabel, 'label')
      return JSON.parse(result)
    },
    // 过滤
    filterNode (value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    // 获取选择对象 数组
    getCheckedNodes () {
      // console.log(this.$refs.tree.getCheckedNodes())
    },
    // 获取选择的id 数组
    getCheckedKeys () {
      // console.log(this.$refs.tree.getCheckedKeys())
      this.form.treechecked = this.$refs.tree.getCheckedKeys()
      let arr = ['1', '2-1']
      let arr1 = ['1', '2-1']
      for (let i = 0; i < arr.length; i++) {
        let times = arr[i].split('-').length - 1
        if (times === 1) {
          arr1.push(arr[i].split('-')[0])
        }
        // if (times === 2) {
        //   arr1.push(arr[i].split('-')[0])
        // }
      }
      arr1 = [...new Set(arr1)]
      // console.log(arr1)
      // console.log(this.filterAsyncMenu(menu, arr1))
    },
    // 根据对象数组去进行默认的选择
    setCheckedNodes (arr) {
      this.$refs.tree.setCheckedNodes(arr)
    },
    // 根据id去进行默认的选择
    setCheckedKeys (arr) {
      // console.log(arr)
      this.$refs.tree.setCheckedKeys(arr)
    },
    // 清空所有的选择项
    resetChecked () {
      this.$refs.tree.setCheckedKeys([])
    },
    onSubmit () {
      // 获取选择的tree id 数组
      this.getCheckedKeys()
      console.log(this.$refs.tree.getCheckedNodes())
      // console.log(JSON.stringify(this.form))
      // this.$emit('update:showForm', false)
      // 父模板更新数据
      // this.$parent.getData()
    },
    cancel () {
      this.$emit('update:showForm', false)
    },
    init () {
    },
    arrHasValue (arr, value) {
      for (let i = 0; i < arr.length; i++) {
        if (value === arr[i]) {
          return true
        }
      }
      return false
    },
    // 过滤掉menu中包含的index
    filterAsyncMenu (menu, arr) {
      const accessMenu = menu.filter(item => {
        if (this.arrHasValue(arr, item.index)) {
          if (item.children && item.children.length) {
            item.children = this.filterAsyncMenu(item.children, arr)
          }
          return true
        }
        return false
      })
      // console.log(accessMenu)
      return accessMenu
    },
    // 根据index删除指定的数据 如何确定要删除的数据是关键
    // 假如现在树结构的index为[1,2,3,4,5,6,7,8,9],
    // 我们需要保留的数据是[2,3,4],那么删除的数据是[1,5,6,7,8,9]? 这样不对
    filterTree (data, index) {
      let newData = data.filter(x => x.index !== index)
      newData.forEach(x => x.children && (x.children = this.filterTree(x.children, index)))
      return newData
    }
  }
}
</script>
<style scoped>
  .treeBox{
    width:595px;
    font-size:12px;
    border:1px solid #dedede;
    border-radius:5px;
    height:300px;
    overflow-y:scroll;
  }
</style>
<style>
  .treeBox .el-tree-node__label{
    font-size:12px;
  }
  .filterInput{
    line-height:32px;
    width:200px;
  }
</style>
