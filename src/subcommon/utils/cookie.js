import Cookies from 'js-cookie'

const neededAttributes = {
  expires: 365,
  domain: `.pay.shuidihuzhu.com`,
  path: '/'
}

export const get = function (key) {
  return Cookies.get(key) && decodeURI(Cookies.get(key))
}

export const set = function (key, val) {
  Cookies.set(key, encodeURI(val), neededAttributes)
}

export const del = function (key) {
  Cookies.remove(key, neededAttributes)
}

export const all = function () {
  return Cookies.get()
}

export const empty = function () {
  Object.keys(Cookies.get()).forEach(function (cookieName) {
    Cookies.remove(cookieName, neededAttributes)
  })
}
