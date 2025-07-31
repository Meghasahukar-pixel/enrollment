import React from 'react'
import styles from "../styles/Nav.module.css"
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <div className={styles.navbar}>

        <div className={styles.left}>
          <img style={{mixBlendMode:"darken", height:"100px"}} src="https://static.vecteezy.com/system/resources/previews/046/487/465/non_2x/education-logo-illustration-black-and-white-free-vector.jpg" alt="" />
        </div>
        <div className={styles.right}>
          <div className="view_students">
            <Link to={"/viewStudent/users"}><h2>View Students</h2></Link>
          </div>
          <div className="add_students">
            <Link to={"/addStudent/users"}><h2>Add Student</h2></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav