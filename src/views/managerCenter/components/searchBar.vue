<template>
<div>
  <el-form :inline="true" :model="searchData" >
    <template v-if="roleName">
      <el-form-item label="角色名称">
        <el-input v-model="searchData.roleName"  placeholder="筛选关键词"></el-input>
      </el-form-item>
    </template>
    <template v-if="address">
      <el-form-item label="用户地址">
        <el-input v-model="searchData.address"  placeholder="筛选关键词"></el-input>
      </el-form-item>
    </template>
    <template v-if="userName">
      <el-form-item label="用户地址">
        <el-input v-model="searchData.userName"  placeholder="筛选关键词"></el-input>
      </el-form-item>
    </template>
    <el-form-item>
      <el-button type="primary" @click="search" icon="el-icon-search" >搜索</el-button>
      <el-button type="primary" @click="reset"  >重置</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
  name: 'searchBar',
  props: {
    roleName: {
      type: Boolean,
      default: false
    },
    address: {
      type: Boolean,
      default: false
    },
    userName: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      searchData: {
        roleName: '',
        userName: '',
        address: ''
      }
    }
  },
  created () {
    this.filterSearch()
  },
  methods: {
    filterSearch () {
      Object.keys(this['_props']).forEach((key) => {
        if (!this['_props'][key]) {
          delete this.searchData[key]
        }
      })
    },
    search () {
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
