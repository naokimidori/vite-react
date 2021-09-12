import React, { useEffect } from 'react'
import { Button } from 'antd'
import { GET } from '../../utils/request'
import './index.less'

function Index () {
  console.log('import.meta.env', import.meta.env)
  useEffect(() => {
    GET('/index-infos').then((res) => {
      console.log(res)
    })
  }, [])
  return (
    <div className="page-index">
      <Button type='primary'>btn</Button>
    </div>
  )
}

export default Index
