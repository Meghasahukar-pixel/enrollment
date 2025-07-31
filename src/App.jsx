import Nav from './components/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ViewStudents from './components/ViewStudents'
import AddStudents from './components/AddStudents'
import UpdateStudent from './components/UpdateStudent'

const App = () => {
  return (
      <>
        <Router>
          <Nav/>
          <Routes>
            <Route path="/viewStudent/users/" element = {<ViewStudents/>}/>
            <Route path='/addStudent/users' element ={<AddStudents/>}/>
            <Route path='/updateStudent/:id' element = {<UpdateStudent/>}/>
            
          </Routes>
        </Router>
      </>
  )
}

export default App