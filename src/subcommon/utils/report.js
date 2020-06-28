/*
 * @Author: liuyanbao
 * @Date: 2020-02-04 15:09:26
 * @Last Modified by: liuyanbao
 * @Last Modified time: 2020-02-05 17:04:59
 */

function report (msg, name) {
  const err = msg instanceof Error ? msg : new Error(msg)
  name && (err.name = name)
  window.Raven && window.Raven.captureException(err)
}
// 上报 自定义类型
report.EnumError = {
  // 协议层 code 错误
  ProtocolError: 'ProtocolError',
  // 返回层 code 错误
  ResponseError: 'ResponseError',
  // 业务 参数错误
  ParamsError: 'ParamsError',
  // 超时错误
  TimeoutError: 'TimeoutError'
}

export default report
