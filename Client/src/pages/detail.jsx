import { useParams} from "react-router-dom";
import Card from "../assets/card";
import axios from "axios"
import { useState, useEffect } from "react";
import {Row, Col} from "react-bootstrap"



export default function Detail(){
    let {id} = useParams()
    const [data, setData] = useState({})
    
    useEffect(()=>{
        axios.get(`http://localhost:3001/flavor/byid/${id}`).then((response)=>{
            setData(response.data)
            console.log(response.data)
        })
    }, [])
    

    return(
        <>
        <Row>
            <Col>
                <h1 className="my-3">This is about {data.flavor} ice cream</h1>
            </Col>
        </Row>

        <Row>
            <Col>
                <Card flavor={data.flavor} desc={data.desc} color={data.flavor}/>
            </Col>
        </Row>
        
        </>
    )
    
}