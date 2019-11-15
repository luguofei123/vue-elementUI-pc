let dataLine = [['2019-01-01', '50'], ['2019-01-02', '40'], ['2019-01-03', '30'], ['2019-01-04', '40'], ['2019-01-05', '35']]
let dataScatter = [['2019-01-01', '6'], ['2019-01-02', '7'], ['2019-01-03', '6.8'], ['2019-01-04', '6'], ['2019-01-05', '6.5']]
let line = {
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['上班人数', '平均工作时间']
  },
  calculable: true,
  xAxis: [{
    type: 'category',
    axisLine: {
      lineStyle: {
        color: '#d8d8d8'
      }
    },
    axisLabel: {
      color: '#79838b'
    },
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    }
  }],
  yAxis: [{
    type: 'category',
    axisLine: {
      show: false,
      lineStyle: {
        color: '#d8d8d8'
      }
    },
    splitLine: {
      show: true
    },
    axisLabel: {
      color: '#79838b'
    }
  }],
  series: [{
    name: '平均工作时间',
    type: 'line',
    symbol: 'none',
    color: ['#009a9a'],
    // data:[800, 300, 500, 800, 300, 600,500,600]
    data: dataLine,
    lineStyle: {
      normal: {
        width: 2
      }
    }
  },
  {
    name: '上班人数',
    type: 'scatter',
    symbol: 'emptyCircle',
    symbolSize: 8,
    color: ['#caca05'],
    // data: [600, 300, 400, 200, 300, 300, 200, 400]
    data: dataScatter
  }]
}
export { line }
