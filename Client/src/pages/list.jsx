import { useState, useEffect } from 'react'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from '../assets/card'

export default function List(){
    const [iceCreamList, setIceCreamList] = useState([])
    useEffect(() => {
      axios.get("http://localhost:3001/flavor").then((response) => {
          setIceCreamList(response.data)
      })
    }, [])

    return(
        <>
        <Row className='mb-5 mt-5'>
            <Col>
                <h1>this is a list of ice cream flavors</h1>
            </Col>
        </Row>
    
        <Row>
        <Col>
            <div className='d-flex flex-wrap justify-content-center'>
                {iceCreamList.map((v, i)=>
                <Card key={i} id={v.id} flavor={v.flavor} color={v.color} desc={v.desc}/>
                )}
            </div>
        </Col>
    </Row>
    </>
)}
