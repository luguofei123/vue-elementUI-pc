let menu = [
  {
    menuName: '系统首页',
    menuIcon: 'el-icon-lu-home',
    index: '1',
    router: 'dashboard',
    children: []
  },
  {
    menuName: '管理中心',
    menuIcon: 'el-icon-lu-home',
    index: '2',
    router: '2null',
    children: [
      {
        menuName: '角色管理',
        menuIcon: 'el-icon-lu-home',
        index: '2-1',
        router: 'role',
        children: []
      },
      {
        menuName: '用户管理',
        menuIcon: 'el-icon-lu-home',
        index: '2-2',
        router: 'user',
        children: []
      }
    ]
  },
  {
    menuName: '表格',
    menuIcon: 'el-icon-lu-home',
    index: '3',
    router: '3null',
    children: [
      {
        menuName: '可编辑表格',
        menuIcon: 'el-icon-lu-home',
        index: '3-1',
        router: 'editorTable',
        children: []
      }
    ]
  },
  {
    menuName: 'tab选项卡',
    menuIcon: 'el-icon-lu-home',
    index: '4',
    router: 'tabs',
    children: []
  },
  {
    menuName: '表单相关',
    menuIcon: 'el-icon-lu-home',
    index: '5',
    router: '4null',
    children: [
      {
        menuName: '基本表单',
        menuIcon: 'el-icon-lu-home',
        index: '5-1',
        router: 'baseform',
        children: []
      },
      {
        menuName: '富文本组件',
        menuIcon: 'el-icon-lu-home',
        index: '5-2',
        router: '5-2null',
        children: [
          {
            menuName: '富文本编辑器1',
            menuIcon: 'el-icon-lu-home',
            index: '5-2-1',
            router: 'editor',
            children: []
          },
          {
            menuName: '富文本编辑器2',
            menuIcon: 'el-icon-lu-home',
            index: '5-2-2',
            router: 'editorwang',
            children: []
          },
          {
            menuName: 'markdown编辑器',
            menuIcon: 'el-icon-lu-home',
            index: '5-2-3',
            router: 'markdown',
            children: []
          }
        ]
      },
      {
        menuName: '文件上传',
        menuIcon: 'el-icon-lu-home',
        index: '6',
        router: 'upload',
        children: []
      }
    ]
  },
  {
    menuName: '自定义图标',
    menuIcon: 'el-icon-lu-home',
    index: '7',
    router: 'icon',
    children: []
  },
  {
    menuName: 'echart图表',
    menuIcon: 'el-icon-lu-home',
    index: '8',
    router: 'chart',
    children: []
  },
  {
    menuName: '拖拽组件',
    menuIcon: 'el-icon-lu-home',
    index: '9',
    router: '9null',
    children: [
      {
        menuName: '拖拽列表',
        menuIcon: 'el-icon-lu-home',
        index: '9-1',
        router: 'drag',
        children: []
      },
      {
        menuName: '拖拽弹框',
        menuIcon: 'el-icon-lu-home',
        index: '9-2',
        router: 'dialog',
        children: []
      }
    ]
  },
  {
    menuName: '国际化功能',
    menuIcon: 'el-icon-lu-home',
    index: '10',
    router: 'i18n',
    children: []
  },
  {
    menuName: '错误处理',
    menuIcon: 'el-icon-lu-home',
    index: '11',
    router: '11null',
    children: [
      {
        menuName: '权限测试',
        menuIcon: 'el-icon-lu-home',
        index: '11-1',
        router: 'permission',
        children: []
      },
      {
        menuName: '403页面',
        menuIcon: 'el-icon-lu-home',
        index: '11-2',
        router: '403',
        children: []
      },
      {
        menuName: '404页面',
        menuIcon: 'el-icon-lu-home',
        index: '11-3',
        router: '404',
        children: []
      }
    ]
  },
  {
    menuName: 'PDF预览',
    menuIcon: 'el-icon-lu-home',
    index: '12',
    router: 'pdf',
    children: []
  },
  {
    menuName: '模仿百度',
    menuIcon: 'el-icon-lu-home',
    index: '13',
    router: 'baidu',
    children: []
  },
  {
    menuName: '购物车',
    menuIcon: 'el-icon-lu-home',
    index: '14',
    router: 'shopcar',
    children: []
  }
]
export default menu
