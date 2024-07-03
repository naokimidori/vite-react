import React, { useState, useCallback, memo } from 'react'
import { Button } from 'antd'
import './index.less'

const Bar: React.FC<any> = memo((props) => {
  console.log('Bar 组件重新渲染~！~~')
  return <div>
    Foo组件
    <Button type="primary" onClick={props.resetCount}>
      RESET
    </Button>
  </div>
})

const TestUseCallback: React.FC = () => {
  const [count, setCount] = useState(0)

  // 缓存函数
  const resetCount = useCallback(() => {
    setCount(0)
  }, [setCount])


  return(
    <div className="testUseCallback">
      <div>{count}</div>
      <Button type='primary' onClick={() => setCount(count + 1)}>
        + 1
      </Button>
      <Bar resetCount={resetCount} />
    </div>
  )
}

export default TestUseCallback
