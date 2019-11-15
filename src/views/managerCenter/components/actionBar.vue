<template>
<div>
  <el-button type="success" @click = 'addRow'>新增</el-button>
  <el-button type="danger" @click = 'deleteRow'>删除</el-button>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    addRow () {
      this.$emit('addRow')
    },
    deleteRow () {
      this.$emit('deleteRow')
    }
  }
}
</script>

<style scoped>
</style>
