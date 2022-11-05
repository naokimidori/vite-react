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
      <div className='wrap'>
        <img
          className='pic'
          src="https://img1.baidu.com/it/u=3732032580,2063651355&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=496"
          alt=""
        />
      </div>
    </div>
  )
}

export default Index
