import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import vitePluginImp from 'vite-plugin-imp'
import path from 'path'
import fs from 'fs'
import lessToJS from 'less-vars-to-js'
import config from './config/index'

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './config/variables.less'), 'utf8')
)

const env = process.argv[process.argv.length - 1]
const base = config[env]

// https://vitejs.dev/config/
export default defineConfig({
  base: base.cdn,
  plugins: [
    reactRefresh(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/lib/${name}/style/index.less`
        }
      ]
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        // 重写 less 变量，定制样式
        modifyVars: themeVariables
      }
    }
  },
  server: {
    port: 9901, // 开发环境启动的端口
    proxy: {
      '/api': {
        // 当遇到 /api 路径时，将其转换成 target 的值，这里我们为了测试，写了新蜂商城的请求地址
        target: 'http://47.99.134.126:28019/api/v1',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '') // 将 /api 重写为空
      }
    }
  }
})
