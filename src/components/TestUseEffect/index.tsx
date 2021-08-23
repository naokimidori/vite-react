import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
import './index.less'

/**
 * 执行时机：
 * useEffect(() => {})        DidMount 和 DidUpdate时触发
 * useEffect(() => {}, [])    DidMount时触发
 * useEffect(() => () => {})  WillUnMount时触发
 */

interface IProps {
  count: number
}

const Demo: React.FC<IProps> = (props) => {

  useEffect(() => {
    console.log('useEffect执行')
    // return () => {
    //   console.log('useEffect 二层回调执行')
    // }
  }, [])

  return <div>Demo{props.count}</div>
}

const TestUseEffect: React.FC = () => {

  const [visible, setVisible] = useState(true)
  const [count, setCount] = useState(1)

  return (
    <div className="testUseEffect">
      {visible && <Demo count={count} />}
      <Button type='primary' onClick={() => setVisible(!visible)}>
        显隐
      </Button>
      <Button type='dashed' onClick={() => setCount(count + 1)}>
        更新
      </Button>
    </div>
  )
}

export default TestUseEffect
