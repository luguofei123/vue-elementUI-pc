<template>
    <div class="table">
      <div id="_Red" v-on:click.self="doThat1($event)" style="width: 500px;height: 500px;background: red;">
        <div v-on:click="doThat($event)" id="_Blue" style="width: 200px;height: 200px;background: blue;">
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    doThat1 (e) {
      console.log('doThat1' + e.target.id)
    },
    doThat (e) {
      console.log('doThat1' + e.target.id)
    }
  }
}
</script>
<style scoped lang="scss">
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
