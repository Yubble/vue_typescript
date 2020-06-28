
// 转换URL为微信支持的格式
export const compilingUrl = url => {
  return url
    .replace(/\//g, '|')
    .replace(/\&/g, '*')
    .replace(/\?/g, '~')
}

// 微信支持的格式返回让浏览器认识，解码
export const decompilingUrl = url => {
  return url
    .replace(/\|/g, '/')
    .replace(/\*/g, '&')
    .replace(/\~/g, '?')
}

// 如果业务传递的参数时候encode，并且浏览器自动编码，解码到最原始状态
export const decodeUrl = url => {
  if (!url) return ''
  if (url.includes('//')) {
    return url
  }
  return decodeUrl(
    decodeURIComponent(url)
  )
}

export const isEmptyObject = function (e) {
  for (let i in e) {
    return !1
  }
  return !0
}

export const decodeParam = str => {
  if (!str) return ''

  const arr = []

  const decode = str => {
    arr.push(str)

    if (arr[arr.length - 1] === arr[arr.length - 2]) return str

    try {
      return decode(decodeURIComponent(str))
    } catch (err) {
      if (err.toString().includes('URI malformed')) {
        return str
      }
    }
  }
  return decode(str)
}
