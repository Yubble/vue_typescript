// 为了能让兄弟组件相互传值，提供一事件车
import Vue from 'vue'

export const passwdEventVue = new Vue({
  beforeDestroy () {
    this.$off('increaseNum')
    this.$off('decreaseNum')
  }
})
