import axios from '@/service/http/http'
import qs from 'qs'
// 登陆页面
const loginPage = {
  // 登陆
  login (params) {
    return axios.post('/login.php', qs.stringify(params))
  },
  // 修改密码POST /usermanager/updatePassword
  changePassword (params) {
    return axios.post('/updatePassword', qs.stringify(params))
  }
  // 其他接口…………
}
export default loginPage
