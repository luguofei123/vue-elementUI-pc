<template>
  <el-dialog title="编辑" :visible.sync="option.isVisible" width="30%">
    <el-form ref="form" :model="form" label-width="50px">
      <el-form-item label="日期">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.date" value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="form.address"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
                <el-button @click="option.isVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'editForm',
  props: {
    option: {
      type: Object,
      default () {
        return {
          isVisible: false
        }
      }
    }
  },
  data () {
    return {
      form: {
        data: '',
        name: '',
        address: ''
      }
    }
  },
  watch: {
  },
  methods: {
    saveEdit () {
      console.log('编辑保存')
    },
    cancelEdit () {
      console.log('取消编辑')
    }
  }
}
</script>

<style scoped>

</style>
