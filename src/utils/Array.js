/**
 * 二位数组按指定字段比较排序
 * 使用 [{},{}].sort(compare('time'))
 * 默认 asc 升序
*/
export const compareArray = (propertyName, order = 'asc') => {
  return function (object1, object2) {
    let value1 = object1[propertyName]
    let value2 = object2[propertyName]
    if (order === 'asc') {
      return value1 - value2
    } else {
      return value2 - value1
    }
  }
}
