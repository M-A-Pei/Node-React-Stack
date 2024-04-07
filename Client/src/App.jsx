import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [iceCreamList, setIceCreamList] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3001/flavor").then((response) => {
        setIceCreamList(response.data)
    })
  }, [])

  return (
    <>
      <div className='title'>
        this is a list of ice cream flavors
      </div>

      <ul>
        {iceCreamList.map((v, i)=>{return (<li key={i}>{v.flavor}</li>)})}
      </ul>
    </>
  )
}

export default App
