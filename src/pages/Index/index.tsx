import React from 'react'
import { useFormik } from 'formik'
import './index.less'

function Index() {

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: values => {  
      console.log(values)
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      姓名：<input
        type='text'
        name='username'
        value={formik.values.username}
        onChange={formik.handleChange}
      />
      密码：<input
        type='password'
        name='password'
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <input type='submit' />
    </form>
  )
}

export default Index;
