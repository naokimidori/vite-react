import React, { useEffect, useReducer, useContext } from 'react'
import { Button } from 'antd'
import TestUseReducer from '../../components/TestUseReducer'
import TestContext from '../../components/TestContext'
import TestUseContext from '../../components/TestUseContext'
import TestUseEffect from '../../components/TestUseEffect'
import TestUseMemo from '../../components/TestUseMemo'
import TestUseCallback from '../../components/TestUseCallback'
import TestUseRef from '../../components/TestUseRef'
import MyHooks from '../../components/MyHooks'
import { GET } from '../../utils/request'
import './index.less'

export const counterContext = React.createContext(100)

const Index: React.FC = () => {
  console.log('import.meta.env', import.meta.env)

  useEffect(() => {
    GET('/index-infos').then((res) => { })
  }, [])

  return (
    <div className="page-index">
      <TestUseReducer />
      <counterContext.Provider value={200}>
        <TestContext />
        <TestUseContext />
      </counterContext.Provider>
      <TestUseEffect />
      <TestUseMemo />
      <TestUseCallback />
      <TestUseRef />
      <MyHooks />
    </div>
  )
}

export default Index
