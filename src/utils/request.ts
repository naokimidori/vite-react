import axios, { AxiosRequestConfig } from 'axios'
import { message } from 'antd'
import { stringify } from 'qs'
import config from '../../config/index'

enum IMode {
  dev = 'dev',
  beta = 'beta',
  prod = 'prod',
}

const MODE: IMode = import.meta.env.MODE as IMode // 环境变量

const getRequest = (method: 'GET' | 'POST') => {
  return (url: string, data?: any, options = {} as any) => {
    let base = config[MODE] // 获取环境变量相对应的属性值
    return axios({
      baseURL: base.apiBaseUrl, // 请求域名地址
      method,
      url,
      ...(method === 'POST'
        ? {
            data: options.string ? stringify(data) : data,
          }
        : {}),
      params: method === 'GET' ? data : options.params,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': options.string
          ? 'application/x-www-form-urlencoded'
          : 'application/json',
        ...options.headers,
      },
      withCredentials: true,
    } as AxiosRequestConfig)
      .then((res) => {
        if (typeof res.data !== 'object') {
          console.error('数据格式响应错误:', res.data)
          message.error('前方拥挤，请刷新再试')
          return Promise.reject(res)
        }

        if (res.data.errcode) {
          if (res.data.errcode == 401) {
            window.location.href = 'login' // 登录失效跳转登录页
            return
          }
          // silent 选项，错误不提示
          if (res.data.message && !options.silent)
            message.error(res.data.message)
          return Promise.reject(res.data)
        }

        return res.data
      })
      .catch((err) => {
        message.error('系统错误', 2)
        return Promise.reject(err)
      })
  }
}

export const GET = getRequest('GET')

export const POST = getRequest('POST')
