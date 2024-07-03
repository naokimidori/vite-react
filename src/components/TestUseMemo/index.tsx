import React, { useState, useMemo, memo } from 'react'
import { Button } from 'antd'
import './index.less'

const Foo: React.FC = memo(() => {
  console.log('Foo组件重新渲染~！~~')
  return <div>Foo组件</div>
})

const TestUseMemo: React.FC = () => {
  const [count, setCount] = useState(1)

  const result = useMemo(() => {
    return count * 2
  }, [count])

  return(
    <div className="testUseMemo">
      <div>{count} {result}</div>
      <Button type='primary' onClick={() => setCount(count + 1)}>
        + 1
      </Button>
      <Foo />
    </div>
  )
}

export default TestUseMemo
