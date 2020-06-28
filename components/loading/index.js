/*
 * @Author: liuyanbao
 * @Date: 2020-04-16 11:23:33
 * @LastEditTime: 2020-04-27 17:14:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work_pay/pay/src/components/loading/index.js
 */
import loading from './loading'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default function plugin (Vue) {
  if (plugin.installed) {
    return
  }

  let Component, component
  Component = Vue.extend(loading)
  component = new Component({el: document.createElement('div')})
  document.body.appendChild(component.$el)

  function method (show, text = '请稍后') {
    component.text = text
    component.show = show
  }

  Vue.loading = method
  Vue.prototype.$loading = method
}
