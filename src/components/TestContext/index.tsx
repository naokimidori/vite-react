import React from 'react'
import { counterContext } from '../../pages/Index/index'
import './index.less'

const TestContext: React.FC = () => {
  return (
    <counterContext.Consumer>
      {
        value => <div className="testContext">{value}</div>
      }
    </counterContext.Consumer>
  )
}

export default TestContext
