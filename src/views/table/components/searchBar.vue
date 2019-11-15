<template>
<div>
  <el-form :inline="true" :model="searchData" >
    <template v-if="isHaveUsername">
      <el-form-item label="用户名称">
        <el-input v-model="searchData.userName"  placeholder="筛选关键词"></el-input>
      </el-form-item>
    </template>
    <template v-if="isHaveAddress">
      <el-form-item label="用户地址">
        <el-input v-model="searchData.address"  placeholder="筛选关键词"></el-input>
      </el-form-item>
    </template>
    <el-form-item>
      <el-button type="primary" @click="search" icon="el-icon-search" v-buttonAuth title="没有权限操作">搜索</el-button>
      <el-button type="primary" @click="reset" v-buttonAuth >重置</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
  name: 'searchBar',
  props: {
    isHaveAddress: {
      type: Boolean,
      default: false
    },
    isHaveUsername: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mes: 'woshi你爷爷',
      searchData: {
        userName: '',
        address: ''
      }
    }
  },
  methods: {
    search () {
      if (!this.isHaveAddress) {
        delete this.searchData['address']
      }
      if (!this.isHaveUsername) {
        delete this.searchData['userName']
      }
      this.$emit('search', this.searchData)
    },
    reset () {
      for (let key in this.searchData) {
        this.searchData[key] = ''
      }
      this.$emit('search', this.searchData)
    }
  }
}
</script>

<style scoped>
</style>
