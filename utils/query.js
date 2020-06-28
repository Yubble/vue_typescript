import { decodeUrl } from './filter'
import report from './report'

const encodeReserveRE = /[!'()*]/g
const encodeReserveReplacer = c => '%' + c.charCodeAt(0).toString(16)
const commaRE = /%2C/g

const hadEncode = str => {
  try {
    return str !== decodeURIComponent(str)
  } catch (error) {
    return false
  }
}

const encode = str => {
  if (hadEncode(str)) {
    return String(str)
      .replace(encodeReserveRE, encodeReserveReplacer)
      .replace(commaRE, ',')
  }
  return encodeURIComponent(str)
    .replace(encodeReserveRE, encodeReserveReplacer)
    .replace(commaRE, ',')
}

const decode = decodeURIComponent

export const parseQuery = query => {
  const res = {}

  query = query.trim().replace(/^(\?|#|&)/, '')

  if (!query) {
    return res
  }

  query.split('&').forEach(param => {
    const parts = param.replace(/\+/g, ' ').split('=')
    const key = decode(parts.shift())
    const val = parts.length > 0
      ? decode(encodeURIComponent(parts.join('=')))
      : null

    if (res[key] === undefined) {
      res[key] = val
    } else if (Array.isArray(res[key])) {
      res[key].push(val)
    } else {
      res[key] = [res[key], val]
    }
  })

  return res
}

export const stringifyQuery = obj => {
  const res = obj ? Object.keys(obj).map(key => {
    const val = obj[key]

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      const result = []
      val.forEach(val2 => {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key))
        } else {
          result.push(encode(key) + '=' + encode(val2))
        }
      })
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(x => x.length > 0).join('&') : null
  return res ? `?${res}` : ''
}

// 将参数转换为对象
export const getStringQueryToObject = str => {
  // 如果跳转的字符串链接中带有参数
  const url = decodeUrl(str)
  const reg = url.match(/\?.+/)
  const query = reg ? reg.toString() : ''
  return parseQuery(query)
}

// 用来检测参数中uri格式是否标准
export const uriFormatCheck = uri => {
  const uriReg = new RegExp('((https|http):)?(//)?[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]')
  if (!uriReg.test(uri)) {
    report('回调url格式有误')
    return false
  }
  return true
}
