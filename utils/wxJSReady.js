import { ua } from '@/utils/appPatch'

export default function wxJSReady () {
  return new Promise((resolve) => {
    const isWx = (/MicroMessenger/i).test(ua) && !ua.includes('wxwork')
    if (!isWx) return
    if (typeof WeixinJSBridge === 'object' && typeof window.WeixinJSBridge.invoke === 'function') {
      resolve()
    } else {
      if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', resolve, false)
      } else if (document.attachEvent) {
        // IE浏览器，非W3C规范
        document.attachEvent('onWeixinJSBridgeReady', resolve)
      }
    }
  })
}

// 默认调用一次重置fontsize
wxJSReady().then(handleFontSize)
function handleFontSize () {
  // 设置网页字体为默认大小
  window.WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize': 0 })
  // 重写设置网页字体大小的事件
  window.WeixinJSBridge.on('menu:setfont', function () {
    window.WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize': 0 })
  })
}
