import {Col, Row, Table as TableBs, Button, Alert} from "react-bootstrap"
import axios from 'axios'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Table(){
    const navigate = useNavigate()
    const [flavors, setFlavors] = useState([])

    const deleteFlavor = (id)=>{
        axios.delete(`http://localhost:3001/flavor/${id}`).then((response)=>{
            navigate("/list")
        })
    }

    useEffect(()=>{
        axios.get("http://localhost:3001/flavor").then((response)=>{
            setFlavors(response.data)
        })
    },[])
    
    function TableData(){
        if(flavors.length == 0){
            return (
                <tr>
                    <td colSpan={3}>
                        <Alert variant="danger" className="text-center">
                            <h4>No flavors rn, go make one!</h4>
                        </Alert>
                    </td>
                </tr>
            )
        }else{
            return(
            flavors.map((d, i)=>
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{d.flavor}</td>
                        <td> 
                            <Button className="mx-2" onClick={()=> deleteFlavor(d.id)} variant="danger">delete</Button>
                            <Button className="mx-2" variant="warning">update</Button>
                            <Button className="mx-2" onClick={()=> navigate(`/detail/${d.id}`)} variant="success">info</Button>
                        </td>
                    </tr>
                )
            )
        }
    }
                 
    return(
        <>
        <Row>
            <Col>
                <h1 className="mb-3 mt-3">this is a table of commands</h1>
            </Col>
        </Row>
        <Row>
            <Col>
                <TableBs striped bordered hover>
                    <thead>
                    <tr className="table-dark">
                        <th>no</th>
                        <th>Flavor</th>
                        <th>Commands</th>
                   </tr>
                    </thead>
                    <tbody>
                    {TableData()}
                    </tbody>
                </TableBs>
            </Col>
        </Row>
        </>
    )
}