// 自定义判断元素类型JS
function seeJsType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 过滤对象中为null的方法函数
function filterNull (obj) {
  for (var key in obj) {
    if (obj[key] === null) {
      delete obj[key]
    }
    if (seeJsType(obj[key]) === 'string') {
      obj[key] = obj[key].trim()
    } else if (seeJsType(obj[key]) === 'object') {
      obj[key] = filterNull(obj[key])
    } else if (seeJsType(obj[key]) === 'array') {
      obj[key] = filterNull(obj[key])
    }
  }
  return obj
}
function getUrlKey (name) {
  let patt = new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)')
  // let result = patt.exec(location.href)
  let result = location.search.match(patt)
  return decodeURIComponent(result[1].replace(/\+/g, '%20')) || null
}
export {
  seeJsType,
  filterNull,
  getUrlKey
}
