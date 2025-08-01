import axios from 'axios'
import React, { useEffect, useState } from 'react'

import styles from "../styles/ViewStudent.module.css"
import { useNavigate } from 'react-router-dom'

const ViewStudents = () => {
  const [users,setUsers] = useState([])
  const navigate = useNavigate()

  function fetchData(){
    axios.get("/api/users")
    .then((response)=>setUsers(response.data))
    .catch(err=>console.log(err))
  }
  useEffect(()=>{
    fetchData()
  },[])

    function handleEdit(id){
      navigate(`/updateStudent/${id}`)
    }

    function handleDelete(id){
      axios.delete(`/api/users/${id}`)
      .then(()=>{
        fetchData()
      })
      .catch(err=>console.log(err)
      )
    }
  return (
    <>
        {users.map((x)=>(
          <div className={styles.container}>
              <div className={styles.details}>
                <h1>{x.name}</h1> <br />
              <p><b>Email:</b> {x.email}</p>
              <p><b>Department:</b> {x.dept}</p>
              <p><b>Course:</b> {x.course}</p> <br />
              <button onClick={()=>{handleEdit(x.id)}}>EDIT</button>
              <button onClick={()=>{handleDelete(x.id)}}>DELETE</button>
              </div>
          </div>
        ))}
    </>
  )
}

export default ViewStudents