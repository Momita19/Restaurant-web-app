import React from 'react'
import Styles from '../../styles/SideBar.module.css'
// import Login from '../Login'

const SideBar = () => {
  return (
    <div className={Styles.sidebar}>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Bookmark</a></li>
    <li><a href="../Login.tsx">Login</a></li>
  </ul>
</div>
  )
}

export default SideBar
