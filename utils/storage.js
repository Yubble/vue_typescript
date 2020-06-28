/*
 * @Author: liuyanbao
 * @Date: 2020-04-29 18:10:23
 * @LastEditTime: 2020-05-07 19:52:58
 * @LastEditors: Please set LastEditors
 * @Description: 兼容前端本地存储
 * @FilePath: /work_pay/pay/src/utils/storage.js
 */

import * as cookie from './cookie'

// 判断是否为JSON格式
const _isJSON = arg => {
  try {
    JSON.parse(arg)
  } catch (err) {
    return false
  }
  return true
}

// 判断是否是Object
const _isObject = arg =>
  Object.prototype.toString.call(arg) === '[object Object]'

// 判断是否为JSON且Object
const _isJSONObject = arg => _isJSON(arg) && _isObject(JSON.parse(arg))

// sessionStorage 和 localStorage 通用的方法
export const saveStore = (type = 'sessionStorage') => {
  return {
    set (storeName, value) {
      _isObject(value)
        ? window[type].setItem(storeName, JSON.stringify(value))
        : window[type].setItem(storeName, value)
    },
    add (storeName, value) {
      /**
       * 这个方法首先会查找本地是否有这个store，如果有则添加属性，没有的话则赋值这个store
       * 目前不推荐使用
       */
      // 首先判断是否存在这个store
      if (!window[type][storeName]) {
        // 如果不存在直接赋值
        this.set(storeName, value)
        return
      }
      // 首先取出旧的仓库内容，仅限于object
      const oldStore = this.get(storeName)
      if (_isObject(oldStore)) {
        // 如果是对象则将传入对象合并
        const newStore = Object.assign({}, oldStore, value)
        this.set(storeName, newStore)
      } else {
        // 如果是字符串则直接设置
        this.set(storeName, value)
      }
    },
    // 获取仓库内容
    get (storeName) {
      const storage = window[type]
      if (storage.getItem(storeName)) {
        return _isJSONObject(storage.getItem(storeName))
          ? JSON.parse(storage.getItem(storeName)) || null
          : storage.getItem(storeName)
      } else {
        return null
      }
    },
    remove (storeName) {
      window[type].removeItem(storeName)
    }
  }
}

export const cookieStore = {
  set (storeName, value) {
    _isObject(value)
      ? cookie.set(storeName, JSON.stringify(value))
      : cookie.set(storeName, value)
  },
  add (storeName, value) {
    // 首先判断是否存在这个store
    if (!cookie.get(storeName)) {
      // 如果不存在直接赋值
      this.set(storeName, value)
      return
    }

    // 首先取出旧的仓库内容，仅限于object
    const oldStore = this.get(storeName)
    if (_isObject(oldStore)) {
      // 如果是对象则将传入对象合并
      const newStore = Object.assign({}, oldStore, value)
      this.set(storeName, newStore)
    } else {
      // 如果是字符串则直接设置
      this.set(storeName, value)
    }
  },
  get (storeName) {
    if (cookie.get(storeName)) {
      return _isJSONObject(storeName)
        ? JSON.parse(cookie.get(storeName)) || null
        : cookie.get(storeName)
    } else {
      return null
    }
  },
  remove (storeName) {
    cookie.del(storeName)
  }
}

export default {
  get session () {
    // 首先检测是否支持 Storage
    return typeof Storage === 'undefined'
      ? cookieStore
      : saveStore('sessionStorage')
  },
  get local () {
    // 首先检测是否支持 Storage
    return typeof Storage === 'undefined'
      ? cookieStore
      : saveStore('localStorage')
  }
}
