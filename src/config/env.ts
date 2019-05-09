// 配置开发环境与线上环境之间的切换

const env = process.env

let baseUrl: string = ''

if (env.NODE_ENV === 'development') {
  // 开发环境url地址
  baseUrl = ''
  console.log('进入开发环境')
} else if (env.NODE_ENV === 'producation') {
  // 线上环境url地址
  baseUrl = ''
  console.log('进入线上环境')
}

export {
  baseUrl
}