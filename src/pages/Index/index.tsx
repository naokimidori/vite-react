import React from 'react'
import { useFormik } from 'formik'
import './index.less'

function Index() {

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validate: values => {
      const errors: any = {}
      if (!values.username) {
        errors.username = '请输入用户名'
      } else if (values.username.length > 15) {
        errors.username = '用户名长度不能大于15'
      }
      if (!values.password) {
        errors.password = '请输入密码'
      } else if (values.password.length < 6) {
        errors.password = '密码不能小于6位'
      }
      return errors
    },
    onSubmit: values => {
      console.log(values)
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        用户名：<input
          type='text'
          name='username'
          value={formik.values.username}
          onChange={formik.handleChange}
        />
       <span className="tips">{formik.errors.username}</span>
      </div>
      <div>
        密码：<input
          type='password'
          name='password'
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <span className="tips">{formik.errors.password}</span>
      </div>
      <input type='submit' />
    </form>
  )
}

export default Index;
