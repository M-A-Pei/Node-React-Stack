import { useState, useEffect } from 'react'
import axios from 'axios'
import {Card, Row, Col} from 'react-bootstrap'

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
            {iceCreamList.map((v, i)=>{return (
            <Card key={i} style={{ width: '18rem'}} bg="dark" text="light" border="danger">
            <Card.Header>{v.flavor}</Card.Header>
            <Card.Body>
                <Card.Title>{v.flavor} ice cream</Card.Title>
                <Card.Text>
                {v.desc}
                </Card.Text>
            </Card.Body>
            <Card.Footer>this ice cream is {v.color}</Card.Footer>
            </Card>
            )})}
        </Col>
    </Row>
    </>
)}
