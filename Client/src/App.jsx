import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import DefaultNavbar from './assets/navbar'
import {BrowserRouter as Router,Route, Routes, useParams} from "react-router-dom"
import List from './pages/list'
import Home from './pages/home'
import NewData from './pages/newdata'
import Table from './pages/table'
import Detail from './pages/detail'

function App() {

  return (
    <>
      <DefaultNavbar/>

      <Container>
        <Router>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/list" exact element={<List/>} />
            <Route path="/newdata" exact element={<NewData/>} />
            <Route path="/table" exact element={<Table/>} />
            <Route path="/detail/:id" exact element={<Detail/>} />
          </Routes>
        </Router>
      </Container>
    </>
  )
}

export default App
