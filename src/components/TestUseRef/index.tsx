// @ts-nocheck
import React, { useRef, useState, useEffect } from 'react'
import { Button } from 'antd'
import './index.less'

/**
 * useRef()作用：
 * 1. 获取DOM实例，主要用于表单
 * 2. 跨组件周期保持数据(变量)
 */

const TestUseRef: React.FC = () => {
  const [count, setCount] = useState(0)

  // 1
  const username = useRef()
  const handler = () => {
    console.log(username.current.value)
  }

  // 2
  let timerId = useRef()
  useEffect(() => {
    timerId.current = setInterval(() => {
      setCount((count) => count + 1)
    }, 1000)
  }, [])

  const stopCount = () => {
    clearInterval(timerId.current)
  }

  return (
    <div className='testUseRef'>
      <h1>{count}</h1>
      <input ref={username} onChange={handler} />
      <Button onClick={stopCount}>停止</Button>
    </div>
  )
}

export default TestUseRef
