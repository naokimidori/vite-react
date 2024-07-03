import React, { useContext } from 'react'
import { counterContext } from '../../pages/Index/index'
import './index.less'

const TestUseContext: React.FC = () => {
  const count = useContext(counterContext)
  return (
    <div className='testUseContext'>我是{count}</div>
  )
}

export default TestUseContext
