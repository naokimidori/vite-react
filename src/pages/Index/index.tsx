import React, { useEffect, useReducer, useContext } from 'react'
import { Button } from 'antd'
import TestContext from '../../components/TestContext'
import TestUseContext from '../../components/TestUseContext'
import TestUseEffect from '../../components/TestUseEffect'
import TestUseMemo from '../../components/TestUseMemo'
import TestUseCallback from '../../components/TestUseCallback'
import { GET } from '../../utils/request'
import './index.less'

export const counterContext = React.createContext(100)

interface IState {
  count: number
}

interface IAction {
  type: string
  payload: number | null
}

const initCounter: IState = { count: 100 };

const reducer = (state: IState, action: IAction) => {
  const { type, payload } = action;
  const { count } = state;
  switch (type) {
    case "increment":
      return { count: payload ? payload + count : count + 1 };
    case "decrease":
      return { count: payload ? count - payload : count - 1 };
    default:
      return { count: 0 };
  }
};

const Index: React.FC = () => {
  console.log('import.meta.env', import.meta.env)

  const [state, dispatch] = useReducer(reducer, initCounter)

  useEffect(() => {
    GET('/index-infos').then((res) => { })
  }, [])

  return (
    <div className="page-index">
      <h1>{state.count}</h1>
      <Button type='primary' onClick={() => dispatch({ type: 'decrease', payload: 10 })}>btn</Button>
      <counterContext.Provider value={state.count}>
        <TestContext />
        <TestUseContext />
      </counterContext.Provider>
      <TestUseEffect />
      <TestUseMemo />
      <TestUseCallback />
    </div>
  )
}

export default Index
