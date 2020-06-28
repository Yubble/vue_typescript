import notify from './notify'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default function plugin (Vue) {
  if (plugin.installed) {
    return
  }

  let Component, component
  Component = Vue.extend(notify)
  component = new Component({el: document.createElement('div')})

  function method (content) {
    document.body.appendChild(component.$el)
    component.content = content
    component.visible = true
    setTimeout(() => {
      component.visible = false
      component.content = ''
    }, 3000)
  }

  Vue.notify = method
  Vue.prototype.$notify = method
}
