import React, { useState, useMemo } from 'react'
import { Button } from 'antd'
import './index.less'

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
    </div>
  )
}

export default TestUseMemo
