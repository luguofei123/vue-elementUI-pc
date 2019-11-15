// 接口域名的管理 当有多个不同域名接口的情况这样管理比较方便
const urlConfig = {
  baseURL: process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8086/usermanager' : 'http://127.0.0.1:4885/usermanager',
  baidu: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su'
}
export default urlConfig
