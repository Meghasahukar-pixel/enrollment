import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

import styles from "../styles/AddStudents.module.css"

const AddStudents = () => {
  const [name, setName] = useState("")
  const [email,setEmail] = useState("")
  const [dept, setDept] = useState("")
  const [course, setCourse] = useState("")
  const navigate = useNavigate()

  function handleForm(e){
    e.preventDefault();
     const user = {
      name,email, dept, course
     }
     axios.post("http://localhost:5000/users",user)
     .then(()=>{
        setName("")
        setEmail("")
        setDept("")
        setCourse("")
        navigate("/viewStudent/users")

     })
     .catch(err=>console.log(err))
  }

  return (
      <>
      <div className={styles.container}>
        <form action="" onSubmit={handleForm}>
        <input type="text" placeholder='Enter Name' value={name} onChange={(e)=>{
          setName(e.target.value)
        }} /> <br />

        <input type="email" placeholder='Enter Email' value={email} onChange={(e)=>{
          setEmail(e.target.value) 
        }} /> <br />

    <input type="text" placeholder='Enter Department' value={dept} onChange={(e)=>{
          setDept(e.target.value) 
        }} /> <br />
        

        <input type="text" placeholder='Enter Course' value={course} onChange={(e)=>{
          setCourse(e.target.value) 
        }} /> <br />

        <button>Add Student</button>
      </form>
      </div>
    </>
  )
}

export default AddStudents