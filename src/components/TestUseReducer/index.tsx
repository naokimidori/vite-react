import React, { useState, useReducer } from 'react'
import { Button } from 'antd'
import './index.less'

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

const TestUseReducer: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initCounter)
  return (
    <div className="testUseReducer">
      <h1>{state.count}</h1>
      <Button type='primary' onClick={() => dispatch({ type: 'decrease', payload: 10 })}>btn</Button>
    </div>
  )
}

export default TestUseReducer
