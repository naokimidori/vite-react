export default {
  dev: {
    cdn: './',
    apiBaseUrl: '/api' // 开发环境接口请求，后用于 proxy 代理配置
  },
  beta: {
    cdn: '//s.xxx.com/beta', // 测试环境 cdn 路径
    apiBaseUrl: '//www.beta.xxx.com/v1' // 测试环境接口地址
  },
  prod: {
    cdn: '//s.xxx.com/prod', // 正式环境 cdn 路径
    apiBaseUrl: '//www.xxx.com/v1' // 正式环境接口地址
  }
}
