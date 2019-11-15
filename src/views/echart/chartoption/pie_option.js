let pie1 = {
  title: {
    text: '部门会话TOP',
    textStyle: {
      fontSize: 12,
      fontWeight: 'normal'
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    right: 10,
    data: [
      {name: '市场部', icon: 'circle'},
      {name: '营销部', icon: 'circle'},
      {name: '研发部', icon: 'circle'},
      {name: '销售部', icon: 'circle'},
      {name: '人事部', icon: 'circle'},
      {name: '行政部', icon: 'circle'},
      {name: '外联部', icon: 'circle'},
      {name: '安保部', icon: 'circle'},
      {name: '技术部', icon: 'circle'}]
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      selectedMode: 'single',
      center: ['40%', '50%'],
      radius: [0, '70%'],
      label: {
        normal: {
          show: false
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [
        {value: 335, name: '市场部'},
        {value: 679, name: '营销部'},
        {value: 1548, name: '研发部'}
      ]
    },
    {
      name: '访问来源',
      type: 'pie',
      center: ['40%', '50%'],
      radius: ['70%', '80%'],
      label: {
        normal: {
          show: false
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [
        {value: 335, name: '营销部'},
        {value: 310, name: '销售部'},
        {value: 234, name: '行政部'},
        {value: 135, name: '人事部'},
        {value: 1048, name: '行政部'},
        {value: 251, name: '外联部'},
        {value: 147, name: '安保部'},
        {value: 102, name: '技术部'}
      ]
    }
  ]
}
let pie2 = {
  // backgroundColor: '#000',
  title: {
    text: '日志类型TOP',
    textStyle: {
      fontSize: 12,
      fontWeight: 'normal'
    }
  },
  legend: {
    orient: 'vertical',
    right: 10,
    data: [
      {name: '直接ds访问', icon: 'circle'},
      {name: '邮件营销', icon: 'circle'},
      {name: '联盟广告', icon: 'circle'},
      {name: '搜索引擎', icon: 'circle'}],
    textStyle: {color: '#000'}
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: ['0%', '80%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: 'center'
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '24',
            fontWeight: 'bold'
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [
        {value: 335, name: '直接访问'},
        {value: 310, name: '邮件营销'},
        {value: 234, name: '联盟广告'},
        {value: 135, name: '视频广告'},
        {value: 1548, name: '搜索引擎'}
      ]
    }
  ],
  color: ['#B8BF3E', '#3F4FBF', '#C0503F', '#C71585', '#3EBF86']
}
let pie3 = {
  // backgroundColor: '#000',
  title: {
    text: '文件TOP',
    textStyle: {
      fontSize: 12,
      fontWeight: 'normal'
    }
  },
  legend: {
    orient: 'vertical',
    right: 10,
    data: [
      {name: '直接ds访问', icon: 'circle'},
      {name: '邮件营销', icon: 'circle'},
      {name: '联盟广告', icon: 'circle'},
      {name: '搜索引擎', icon: 'circle'}],
    textStyle: {color: '#000'}
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: ['0%', '80%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: 'center'
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '24',
            fontWeight: 'bold'
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [
        {value: 335, name: '直接访问'},
        {value: 310, name: '邮件营销'},
        {value: 234, name: '联盟广告'},
        {value: 135, name: '视频广告'},
        {value: 1548, name: '搜索引擎'}
      ]
    }
  ],
  color: ['#B8BF3E', '#3F4FBF', '#C0503F', '#C71585', '#3EBF86']
}
let pie4 = {
  // backgroundColor: '#000',
  title: {
    text: '常用网站TOP',
    textStyle: {
      fontSize: 12,
      fontWeight: 'normal'
    }
  },
  legend: {
    orient: 'vertical',
    right: 10,
    data: [
      {name: '直接ds访问', icon: 'circle'},
      {name: '邮件营销', icon: 'circle'},
      {name: '联盟广告', icon: 'circle'},
      {name: '搜索引擎', icon: 'circle'}],
    textStyle: {color: '#000'}
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: ['0%', '80%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: 'center'
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '24',
            fontWeight: 'bold'
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [
        {value: 335, name: '直接访问'},
        {value: 310, name: '邮件营销'},
        {value: 234, name: '联盟广告'},
        {value: 135, name: '视频广告'},
        {value: 1548, name: '搜索引擎'}
      ]
    }
  ],
  color: ['#B8BF3E', '#3F4FBF', '#C0503F', '#C71585', '#3EBF86']
}
export { pie1, pie2, pie3, pie4 }
