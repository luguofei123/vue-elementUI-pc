let leftColumn = {
  title: {
    text: 'time_start per 12 hours',
    left: 'center',
    bottom: 0
  },
  legend: {
  },
  grid: {
    left: 65,
    top: 20,
    right: 35,
    bottom: 55
  },
  tooltip: {},
  dataset: {
    dimensions: ['product', '2015', '2016', '2017'],
    source: [
      { product: '2019-12-01 8:00', '2015': 43.3, '2016': 85.8, '2017': 93.7 },
      { product: '2019-12-02 8:00', '2015': 83.1, '2016': 73.4, '2017': 55.1 },
      { product: '2019-12-03 8:00', '2015': 86.4, '2016': 65.2, '2017': 82.5 },
      { product: '2019-12-04 8:00', '2015': 12.4, '2016': 23.9, '2017': 39.1 },
      { product: '2019-12-05 8:00', '2015': 72.4, '2016': 53.9, '2017': 39.1 },
      { product: '2019-12-06 8:00', '2015': 72.4, '2016': 53.9, '2017': 31.1 },
      { product: '2019-12-07 8:00', '2015': 75.4, '2016': 18.9, '2017': 49.1 },
      { product: '2019-12-08 8:00', '2015': 22.4, '2016': 16.9, '2017': 21.1 },
      { product: '2019-12-09 8:00', '2015': 45.4, '2016': 13.9, '2017': 34.1 },
      { product: '2019-12-11 8:00', '2015': 71.4, '2016': 53.9, '2017': 39.1 }
    ]
  },
  xAxis: {
    type: 'category',
    axisLine: {
      lineStyle: {
        color: '#d8d8d8'
      }
    },
    axisLabel: {
      color: '#79838b'
    }
  },
  yAxis: {
    name: '数量',
    // --位置靠左
    position: 'left',
    // --位置居中
    nameLocation: 'middle',
    // --与y轴距离
    nameGap: 40,
    // --角度
    nameRotate: 90,
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
    splitLine: {
      show: false
    }
  },
  series: [
    {
      type: 'bar',
      itemStyle: {
        borderColor: '#75aa64'
      }
    },
    {
      type: 'bar',
      itemStyle: {
        borderColor: '#75aa64'
      }
    },
    {
      type: 'bar',
      itemStyle: {
        borderColor: '#75aa64'
      }
    },
    {
      type: 'bar',
      itemStyle: {
        borderColor: '#75aa64'
      }
    },
    {
      type: 'bar',
      itemStyle: {
        borderColor: '#75aa64'
      }
    }
  ],
  color: ['#abcba1']
}
let rightColumn = {
  title: {
    text: 'time_start per 12 hours',
    left: 'center',
    bottom: 0
  },
  legend: {
  },
  grid: {
    left: 65,
    top: 20,
    right: 35,
    bottom: 55
  },
  tooltip: {},
  dataset: {
    dimensions: ['product', '2015', '2016', '2017'],
    source: [
      { product: '2019-12-01 8:00', '2015': 43.3, '2016': 85.8, '2017': 93.7 },
      { product: '2019-12-02 8:00', '2015': 83.1, '2016': 73.4, '2017': 55.1 },
      { product: '2019-12-03 8:00', '2015': 86.4, '2016': 65.2, '2017': 82.5 },
      { product: '2019-12-04 8:00', '2015': 12.4, '2016': 23.9, '2017': 39.1 },
      { product: '2019-12-05 8:00', '2015': 72.4, '2016': 53.9, '2017': 39.1 },
      { product: '2019-12-06 8:00', '2015': 72.4, '2016': 53.9, '2017': 31.1 },
      { product: '2019-12-07 8:00', '2015': 75.4, '2016': 18.9, '2017': 49.1 },
      { product: '2019-12-08 8:00', '2015': 22.4, '2016': 16.9, '2017': 21.1 },
      { product: '2019-12-09 8:00', '2015': 45.4, '2016': 13.9, '2017': 34.1 },
      { product: '2019-12-11 8:00', '2015': 71.4, '2016': 53.9, '2017': 39.1 }
    ]
  },
  xAxis: {
    type: 'category',
    axisLine: {
      lineStyle: {
        color: '#d8d8d8'
      }
    },
    axisLabel: {
      color: '#79838b'
    }
  },
  yAxis: {
    name: '数量',
    // --位置靠左
    position: 'left',
    // --位置居中
    nameLocation: 'middle',
    // --与y轴距离
    nameGap: 40,
    // --角度
    nameRotate: 90,
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
    splitLine: {
      show: false
    }
  },
  series: [
    {
      type: 'bar',
      itemStyle: {
        borderColor: '#5392cb'
      }
    },
    {
      type: 'bar',
      itemStyle: {
        borderColor: '#5392cb'
      }
    },
    {
      type: 'bar',
      itemStyle: {
        borderColor: '#5392cb'
      }
    },
    {
      type: 'bar',
      itemStyle: {
        borderColor: '#5392cb'
      }
    },
    {
      type: 'bar',
      itemStyle: {
        borderColor: '#5392cb'
      }
    }
  ],
  color: ['#91b9dd']
}
export { leftColumn, rightColumn }
