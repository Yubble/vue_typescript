/**
 * navigateTo 跳转到应用内的某个页面，支持(object, string)
 * redirectTo 跳转不同项目之间的地址，支持(object, string)
 * object: params, query
 */

import {
  parseQuery,
  stringifyQuery
} from './query'

const navigate = {
  // 获取当前URL的参数
  query (obj) {
    // 获取当前uri链接的参数
    let query = parseQuery(window.location.search)
    // 如果传递了query参数，将传递的query参数覆盖掉当前已经有的参数
    return obj.query
      ? Object.assign(
        query, obj.query)
      : query
  },
  // 跳转地址为字符串的时候带有参数
  parmsUrlQuery (str) {
    const originalQueryObject = this.getStringQueryToObject(str)
    const currentQueryObject = this.query(str)

    // 覆盖当前url中的参数
    const object = Object.assign(
      currentQueryObject, originalQueryObject
    )

    let obj = {}

    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        const element = object[key]
        // 如果参数存在多值的情况，取当前最新的值
        if (Array.isArray(element)) {
          obj[key] = element.pop()
        } else {
          obj[key] = element
        }
      }
    }

    return stringifyQuery(obj)
  },
  // 带有参数的uri的pathname
  getPath (str) {
    const reg = str.match(/^.+\?/)
    return reg
      ? reg.toString().replace('?', '')
      : str
  },
  getStringQueryToObject (str) {
    // 如果跳转的字符串链接中带有参数
    const reg = str.match(/\?.+/)
    const url = reg ? reg.toString() : ''

    return parseQuery(url)
  },
  stringUri (str) {
    let pathUri = this.getPath(str)
    let query = this.parmsUrlQuery(str)
    return `${pathUri}${query}`
  },
  redirectTo (str) {
    if (typeof str === 'object') {
      // path 只支持半路径
      if (!str.path) {
        throw Error('缺少path')
      }
      // 如果path为全路径
      if (
        str.path.includes('//') ||
        str.path.includes('?')
      ) {
        // this.query(str) 获取当前对象里是否有参数
        // this.getStringQueryToObject(str.path) 获取链接中的参数转换为对象
        const query = Object.assign(
          {},
          this.query(str),
          this.getStringQueryToObject(str.path)
        )
        window.location.href = this.getPath(str.path) + stringifyQuery(query)
        return
      }
      let pathname = null
      let params = str.params
        ? `/${Object.values(str.params).join('/')}` : ''
      let query = str.query
        ? stringifyQuery(this.query(str)) : ''
      pathname = str.path + params + query
      window.location.href = this.stringUri(pathname)
      return
    }
    window.location.href = this.stringUri(str)
  },
  replace (str) {
    if (typeof str === 'object') {
      throw Error('当前方式不支持对象传输')
    }
    window.location.replace(this.stringUri(str))
  },
  carryTo (obj) {
    const currentQuery = this.query({})
    if (typeof obj !== 'object') {
      throw Error(
        `carryTo 只支持对象传输
        {
          path: '跳转路径',
          query: [str, obj], //需要携带的参数
        }
        `
      )
    }
    if (
      'query' in obj &&
      'throwq' in obj
    ) {
      throw Error('carryTo 中 query和throwq不能同时存在')
    }

    if ('query' in obj) {
      const { path } = obj
      let que = {}
      obj.query.forEach(element => {
        if (typeof element === 'object') {
          Object.assign(que, element)
        } else {
          que[element] = currentQuery[element]
        }
      })
      this.stringifyPathQuery(path, que)
    }

    if ('throwq' in obj) {
      const { path, throwq } = obj
      let curQur = currentQuery
      throwq.forEach(element => {
        delete curQur[element]
      })
      this.stringifyPathQuery(path, curQur)
    }
  },
  // 拼接path和query
  stringifyPathQuery (path, query) {
    const pathQuery = path + stringifyQuery(query)
    window.location.href = pathQuery
  },
  // 浏览器判断是否是从微信页面跳过来的
  isFromWxPage () {
    const referrer = document.referrer
    // 部分safari会卡掉referrer，所以referrer为空也算从纯签约跳回
    return this.isFromWxSign() || referrer === ''
  },
  // 浏览器判断是否从微信纯签约页面跳回
  isFromWxSign () {
    const referrer = document.referrer
    return /readentrustwebtemplate/.test(referrer)
  }
}

export default navigate
