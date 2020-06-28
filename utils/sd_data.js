/*
 * @Author: liuyanbao
 * @Date: 2019-12-27 15:52:17
 * @LastEditTime: 2020-05-18 18:53:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work_pay/pay/src/utils/sd_data.js
 */
import SD_DATA from 'sd-data'
import getPlatform from './platform'
import { parseQuery } from './query'

const plugin = Vue => {
  try {
      // 埋点配置
    Vue.SD_DATA = Vue.$SD_DATA = Vue.prototype.$SD_DATA = SD_DATA
    let params = parseQuery(window.location.search)
    Vue.SD_DATA.init({
      biz: 'pay',
      dataFromCookie: {
        authorizationV2: 'pay_token'
      }
    })
    Vue.SD_DATA.track('page_enter', {
      biz: 'pay',
      dataFromCookie: {
        authorizationV2: 'pay_token'
      },
      toPath: window.location.href,
      pageName: '支付中心',
      fromPath: document.referrer,
      channel: params.channel,
      subChannel: params.subChannel,
      extInfo: {
        payType: getPlatform(),
        version: process.version
      }
    })
    Vue.SD_DATA.autoTrack()
  } catch (e) {}
}

export default plugin
