// @ts-nocheck
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function useGetPost() {
  const [post, setPost] = useState({})
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => {
      setPost(res.data)
    })
  },[])

  return post
}

// const MyHooks: React.FC = () => {
//   const post = useGetPost()
//   return(
//     <div className="myhooks">
//       <h1>{post.title}</h1>
//       <h2>{post.body}</h2>
//     </div>
//   )
// }

function useUpdateInput (initialValue) {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    onChange: event => setValue(event.target.value)
  }
}

const MyHooks: React.FC = () => {
  const usernameInput = useUpdateInput('')
  const passwordInput = useUpdateInput('')

  const [sex, setSex] = useState('')

  const radioClick = (e) => {
    setSex(e.target.value)
  }

  const submitForm = (e) => {
    e.preventDefault()
    console.log(usernameInput.value)
    console.log(passwordInput.value)
    console.log(sex)
  }

  return(
    <form>
      用户名：<input type="text" autoComplete="true" name="username" {...usernameInput} />
      密码：<input type="password" autoComplete="true" name="password" {...passwordInput} />
      <input type="radio" name="radio" autoComplete="true" value='male' onClick={radioClick} />Male
      <input type="radio" name="radio" autoComplete="true" value='female' onClick={radioClick} />Female
      <input type="submit" autoComplete="true" onClick={submitForm} />
    </form>
  )
}

export default MyHooks
