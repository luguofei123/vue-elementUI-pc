var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a', '10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p', '10p', '11p']
var days = ['网页', '键盘', '修改', '删除', '复制', '新建', '截屏', '上传']
var data = [[9, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 2], [0, 12, 4], [0, 13, 1], [0, 14, 1], [0, 15, 3], [0, 16, 4], [0, 17, 6], [0, 18, 4], [0, 19, 4], [0, 20, 3], [0, 21, 3], [0, 22, 2], [0, 23, 5], [1, 0, 7], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 5], [1, 11, 2], [1, 12, 2], [1, 13, 6], [1, 14, 9], [1, 15, 11], [1, 16, 6], [1, 17, 7], [1, 18, 8], [1, 19, 12], [1, 20, 5], [1, 21, 5], [1, 22, 7], [1, 23, 2], [2, 0, 1], [2, 1, 1], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 3], [2, 11, 2], [2, 12, 1], [2, 13, 9], [2, 14, 8], [2, 15, 10], [2, 16, 6], [2, 17, 5], [2, 18, 5], [2, 19, 5], [2, 20, 7], [2, 21, 4], [2, 22, 2], [2, 23, 4], [3, 0, 7], [3, 1, 3], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 1], [3, 9, 0], [3, 10, 5], [3, 11, 4], [3, 12, 7], [3, 13, 14]]
data = data.map(function (item) {
  return [item[1], item[0], item[2] || '-']
})
let hotmap = {
  tooltip: {
  },
  animation: false,
  grid: {
    left: 65,
    top: 20,
    right: 35,
    bottom: 55
  },
  xAxis: {
    name: '时间',
    nameLocation: 'middle',
    nameGap: 30,
    nameTextStyle: {
      color: '#79838b',
      fontFamily: 'Arial'
    },
    axisLine: {
      lineStyle: {
        color: '#d8d8d8'
      }
    },
    axisLabel: {
      color: '#79838b'
    },
    type: 'category',
    data: hours,
    splitArea: {
      show: false
    }
  },
  yAxis: {
    name: '日志分类',
    // --位置靠左
    position: 'left',
    // --位置居中
    nameLocation: 'middle',
    // --与y轴距离
    nameGap: 40,
    nameTextStyle: {
      color: '#79838b',
      fontFamily: 'Arial'
    },
    axisLine: {
      lineStyle: {
        color: '#d8d8d8'
      }
    },
    axisLabel: {
      color: '#79838b'
    },
    type: 'category',
    data: days,
    splitArea: {
      show: false
    }
  },
  visualMap: {
    min: 0,
    max: 10,
    color: ['#c0e6b8', '#69bc6b', '#20803d'],
    calculable: true,
    orient: 'horizontal',
    left: 'center',
    top: '0%'
  },
  series: [{
    name: 'Punch Card',
    type: 'heatmap',
    data: data,
    label: {
      normal: {
        show: true
      }
    },
    itemStyle: {
      emphasis: {
        shadowBlur: 10,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    }
  }]
}
export { hotmap }
