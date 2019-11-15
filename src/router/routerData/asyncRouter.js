let asyncRouter = [
  {
    path: '/index',
    redirect: '/dashboard',
    component: resolve => require(['@/views/Home.vue'], resolve),
    meta: { title: '主页' },
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: resolve => require(['@/views/Dashboard.vue'], resolve),
        meta: { title: '系统首页', requiresAuth: false, passKey: 'dashboard' }
      },
      {
        path: 'editorTable',
        name: 'editorTable',
        component: resolve => require(['@/views/table/editorTable/index.vue'], resolve),
        meta: { title: '可编辑表格', requiresAuth: false, passKey: 'editorTable' }
      },
      {
        path: 'tabs',
        name: 'tabs',
        component: resolve => require(['@/views/tabs/Tabs.vue'], resolve),
        meta: { title: '选项卡', requiresAuth: false, passKey: 'tabs' }
      },
      {
        path: 'baseform',
        name: 'baseform',
        component: resolve => require(['@/views/form/BaseForm.vue'], resolve),
        meta: { title: '基础表单', requiresAuth: false, passKey: 'baseform' }
      },
      {
        // 富文本编辑器组件
        path: 'editor',
        name: 'editor',
        component: resolve => require(['@/views/form/Editor/VueEditor.vue'], resolve),
        meta: { title: '富文本编辑器', requiresAuth: false, passKey: 'editor' }
      },
      {
        // 富文本编辑器组件另外一个
        path: 'editorwang',
        name: 'editorwang',
        component: resolve => require(['@/views/form/Editor/Editorwang/VueEditorwang.vue'], resolve),
        meta: { title: '富文本编辑器', requiresAuth: false, passKey: 'editorwang' }
      },
      {
        // markdown组件
        path: 'markdown',
        name: 'markdown',
        component: resolve => require(['@/views/form/Editor/Markdown.vue'], resolve),
        meta: { title: 'markdown编辑器', requiresAuth: false, passKey: 'markdown' }
      },
      {
        // 图片上传组件
        path: 'upload',
        name: 'upload',
        component: resolve => require(['@/views/upload/Upload.vue'], resolve),
        meta: { title: '文件上传', requiresAuth: false, passKey: 'upload' }
      },
      {
        // chart 图标
        path: 'chart',
        name: 'chart',
        component: resolve => require(['@/views/echart/index.vue'], resolve),
        meta: { title: 'chart 图标', requiresAuth: false, passKey: 'chart' }
      },
      {
        // 角色列表
        path: 'role',
        name: 'role',
        component: resolve => require(['@/views/managerCenter/role/index.vue'], resolve),
        meta: { title: '角色列表', requiresAuth: false, passKey: 'role' }
      },
      {
        // 角色编辑
        path: 'roleEditor',
        name: 'editorRole',
        component: resolve => require(['@/views/managerCenter/role/editor.vue'], resolve),
        meta: { title: '角色编辑', requiresAuth: false, passKey: 'role' }
      },
      {
        // 用户列表
        path: 'user',
        name: 'user',
        component: resolve => require(['@/views/managerCenter/user/index.vue'], resolve),
        meta: { title: '用户列表', requiresAuth: false, passKey: 'user' }
      },
      {
        // 错误403
        path: '403',
        name: '403',
        component: resolve => require(['@/views/error/403.vue'], resolve),
        meta: { title: '403错误', requiresAuth: false, passKey: '403' }
      },
      {
        // 错误404
        path: '404',
        name: '404',
        component: resolve => require(['@/views/error/404.vue'], resolve),
        meta: { title: '404错误', requiresAuth: false, passKey: '404' }
      }
    ]
  }
]
export default asyncRouter
