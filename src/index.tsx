import Routes from './router/index'
import dva from 'dva'
import { BrowserRouter } from 'dva/router'
import indexModel from './model/index'
import aboutModel from './model/about'
import './common/global.less'

// 1. Initialize
const app = dva({
  history: BrowserRouter
})

// 2.Plugins
app.use({})

// 3.Model
app.model(indexModel)
app.model(aboutModel)

// 4.Router
app.router(Routes)

// 5.Start
app.start('#root')
