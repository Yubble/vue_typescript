import confirm from './confirm'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default function plugin (Vue) {
  if (plugin.installed) {
    return
  }

  let Component, component
  Component = Vue.extend(confirm)
  component = new Component({ el: document.createElement('div') })
  const confirmCall = {
    show ({
      content,
      confirm,
      cancel,
      textAlign,
      fontWeight,
      hideCancel,
      hideConfirm,
      cancelText = '取消',
      confirmText = '确定'
    }) {
      document.body.appendChild(component.$el)
      // 内容
      component.content = content
      component.textAlign = textAlign
      component.fontWeight = fontWeight
      // 是否显示
      component.visible = true
      // 确认
      component.confirmCall = confirm || function () {
        component.visible = false
      }
      // 取消
      component.cancelCall = cancel || function () {
        component.visible = false
      }
      // 取消文本
      component.cancelText = cancelText
      // 确认文本
      component.confirmText = confirmText

      component.hideCancel = hideCancel
      component.hideConfirm = hideConfirm
    },

    hide () {
      component.visible = false
    },

    updateContent (content) {
      component.content = content
    }
  }

  Vue.confirm = Vue.prototype.$confirm = confirmCall
}
