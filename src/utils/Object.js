/**
 *  查看对象类型
 *  输入js任意对象
 *  返回 string, array，object...
 */
export const seeJsType = obj => {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
/**
 *  深拷贝 建议直接使用序列化和反序列化进行拷贝 {}和[]都可以深拷贝，函数，日期，错误等对象不能用这个方法
 *  复杂对象的深拷贝需要使用loadash插件
 */
export const deepCopySimple = obj => {
  return JSON.parse(JSON.stringify(obj))
}
