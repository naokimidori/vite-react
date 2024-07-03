import * as React from 'react'
import {
  useHistory,
  useLocation,
  useRouteMatch,
  useParams
} from 'react-router-dom'

function About () {
  console.log(useHistory())
  console.log(useLocation())
  console.log(useRouteMatch())
  console.log(useParams())
  return (
    <div>About</div>
  )
}

export default About
