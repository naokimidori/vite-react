import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import './index.less'

function Index() {

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    // validate: values => {
    //   const errors: any = {}
    //   if (!values.username) {
    //     errors.username = '请输入用户名'
    //   } else if (values.username.length > 15) {
    //     errors.username = '用户名长度不能大于15'
    //   }
    //   if (!values.password) {
    //     errors.password = '请输入密码'
    //   } else if (values.password.length < 6) {
    //     errors.password = '密码不能小于6位'
    //   }
    //   return errors
    // },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(12, '用户名长度不能大于12位')
        .required('请填写用户名'),
      password: Yup.string()
        .min(8, '密码长度不能小于8位')
        .required('请填写密码')
    }),
    onSubmit: values => {
      console.log(values)
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        用户名：<input
          type='text'
          {...formik.getFieldProps('username')}
        />
       <span className="tips">{ formik.touched.username && formik.errors.username}</span>
      </div>
      <div>
        密码：<input
          type='password'
          {...formik.getFieldProps('password')}
        />
        <span className="tips">{ formik.touched.password && formik.errors.password}</span>
      </div>
      <input type='submit' />
    </form>
  )
}

export default Index;
