import axios from '@/service/http/http'
// import qs from 'qs'
// 转换
const picToText = {
  // 转换图片转文字
  toText (params) {
    return axios.post('/pictotext', params)
  }
  // 其他接口…………
}
export default picToText
