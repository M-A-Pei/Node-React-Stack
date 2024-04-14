import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import DefaultNavbar from './assets/navbar'
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
import List from './routes/list'
import Home from './routes/home'

function App() {

  return (
    <>
      <DefaultNavbar/>

      <Container>
        <Router>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/list" exact element={<List/>} />
          </Routes>
        </Router>
      </Container>
    </>
  )
}

export default App
