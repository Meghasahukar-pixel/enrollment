import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateStudent = () => {
  const {id} = useParams()

  
  const [name, setName] = useState("")
  const [email,setEmail] = useState("")
  const [department, setDepartment] = useState("")
  const [course, setCourse] = useState("")
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get(`/api/users/${id}`)
    .then((response)=>{
        const {name, email, dept, course} = response.data
        setName(name)
        setEmail(email)
        setDepartment(dept)
        setCourse(course)
    })
    .catch(err=>console.log(err)
    )
  },[])

      function handleUpdate(e){
        e.preventDefault()
        const updateStudent = {name, email, department, course}

        axios.put(`/api/users/${id}`, updateStudent)
        .then(()=>{
          navigate("/viewStudent/users")
        })

      }
  return (
    <>
 <div >
        <form action="" onSubmit={handleUpdate}>
        <input type="text" placeholder='Enter Name' value={name} onChange={(e)=>{
          setName(e.target.value)
        }} /> <br />

        <input type="email" placeholder='Enter Email' value={email} onChange={(e)=>{
          setEmail(e.target.value) 
        }} /> <br />

    <input type="text" placeholder='Enter Department' value={department} onChange={(e)=>{
          setDepartment(e.target.value) 
        }} /> <br />
        

        <input type="text" placeholder='Enter Course' value={course} onChange={(e)=>{
          setCourse(e.target.value) 
        }} /> <br />

        <button>Update Student</button>
      </form>
      </div>
    </>
  )
}

export default UpdateStudent