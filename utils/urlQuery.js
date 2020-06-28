/*
 * @Author: Yubble
 * @Date: 2020-01-13 16:45:49
 * @LastEditTime: 2020-05-08 10:10:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work_pay/pay/src/utils/urlQuery.js
 */
const urlQuery = item => {
  let reg = new RegExp('[\?\&]' + item + '=([^\&]*)(\&?)', 'i')
  let sValue = (window.location.search + window.location.hash).match(reg)
  return sValue ? sValue[1] : sValue
}

// 统一订单类型
export const unifiedOrderType = () => {
  const type = {
    default: 'payInfo',
    '0': 'payInfo',
    '1': 'entrustApply',
    '2': 'payEntrust',
    '3': 'showCart'
  }

  const urlField = urlQuery('unifiedOrderType')
  return type[urlField] || type['default']
}

// 判断是不是分期产品
export const isEntrust = () => {
  /*
    0 普通支付
    1 签约后支付
    2 支付中签约
  */
  const arr = ['1', '2']
  return arr.includes(urlQuery('unifiedOrderType'))
}

// 获取URL的干净path, 不带query参数
export const getUrlOrigin = str => {
  const url = decodeURIComponent(str)
  const reg = url.match(/^.+\?/)
  return reg
    ? reg.toString().split('?')[0]
    : url
}

export default urlQuery
