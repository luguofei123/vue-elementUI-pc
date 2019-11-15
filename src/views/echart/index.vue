<template>
  <div class="container">
    <el-row>
      <el-col :span="6"><div ref="chart1" style="height:300px"></div></el-col>
      <el-col :span="6"><div ref="chart2" style="height:300px"></div></el-col>
      <el-col :span="6"><div ref="chart3" style="height:300px"></div></el-col>
      <el-col :span="6"><div ref="chart4" style="height:300px"></div></el-col>
    </el-row>
    <!--<button v-tips.top="mes"></button>-->
  </div>
</template>
<script>
import echarts from 'echarts'
import { line } from './chartoption/line_option'
export default {
  data () {
    return {
      mes: '我是左边'
    }
  },
  components: {
  },
  computed: {
  },
  mounted () {
    this.getChartData()
  },
  methods: {
    getChartData () {
      const myChart1 = echarts.init(this.$refs.chart1)
      const myChart2 = echarts.init(this.$refs.chart2)
      const myChart3 = echarts.init(this.$refs.chart3)
      const myChart4 = echarts.init(this.$refs.chart4)
      myChart1.setOption(line)
      myChart2.setOption(line)
      myChart3.setOption(line)
      myChart4.setOption(line)
    }
  }
}
</script>
<style scoped>
</style>
