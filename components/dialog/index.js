/*
 * @Author: Yubble
 * @Date: 2020-02-26 16:06:39
 * @LastEditTime: 2020-04-20 15:12:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /manage/plugins/dialog/index.js
 */

import Vue from 'vue'
import Dialog from './dialog'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default function plugin () {
  if (plugin.installed) {
    return
  }
  const Component = Vue.extend(Dialog)
  const vm = new Component({ el: document.createElement('div') })
  document.body.appendChild(vm.$el)
  function method (obj) {
    // 主题内容
    vm.content = obj.content
    // 内容下一行小标签
    vm.tips = obj.tips
    vm.confirmText = obj.confirmText || '知道了'
    // 确认事件
    vm.onConfirm = obj.onConfirm || (() => {})
    vm.cancelText = obj.cancelText || '取消'
    vm.onCancel = obj.onCancel || (() => {})
    // 按钮数量
    vm.btnNo = obj.btnNo || 1
    vm.visible = true
  }
  Vue.dialog = method
  Vue.prototype.$dialog = method
}
