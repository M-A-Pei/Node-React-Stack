import { InputGroup, Form, Row, Col, Button } from "react-bootstrap"
import { useState } from 'react'
import axios from 'axios'
import {Formik, Form as FormikForm, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'
import { useNavigate } from "react-router-dom"


const validations = yup.object().shape({
    flavor: yup.string().required(),
    color: yup.string().required(),
    desc: yup.string().min(5).max(30).required()
})


export default function newData(){

    // const [flavor, setFlavor] = useState("");
    // const [desc, setDesc] = useState("");
    // const [color, setColor] = useState("");

    // function handleSubmit(){
    //     axios.post("http://localhost:3001/flavor", {
    //         flavor, desc, color
    //     }).then(response => {
    //         console.log(response)
    //     })
    // }

    let navigate = useNavigate()

    function onFormik(values){
        axios.post("http://localhost:3001/flavor", values).then(response => {
            navigate("/list")
        })              
    }

    return(
        <>
            <Row>
                <Col>
                    <h1 className="mb-5 mt-5">make a new ice cream flavor</h1>
                </Col>
            </Row>

            <Row>
                <Col>

                    {/* this is  a form with no libraries at all, just states and a regular form*/}
                    {/* <form onSubmit={handleSubmit}>
                        <label>flavor</label><input type="text" value={flavor} onChange={(e) => setFlavor(e.target.value)}/><br/>
                        <label>desc</label><input type="text" onChange={(e) => setDesc(e.target.value)}/><br/>
                        <label>color</label><input type="text" onChange={(e) => setColor(e.target.value)}/><br/>
                        <input type="submit" value="submit"/>
                    </form> */}

                    {/* this is a form with the react-bootstrap library, but still using regular states*/}
                    {/* <form onSubmit={handleSubmit}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">what's the flavor?</InputGroup.Text>
                            <Form.Control
                            placeholder="..."
                            onChange={(e) => setFlavor(e.target.value)}
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1" >what color is it?</InputGroup.Text>
                            <Form.Control
                            onChange={(e) => setColor(e.target.value)}
                            placeholder="..."
                            />
                        </InputGroup>
    
                        <InputGroup className="mb-3">
                            <InputGroup.Text>How does it taste?</InputGroup.Text>
                            <Form.Control as="textarea"
                            onChange={(e) => setDesc(e.target.value)}
                            />
                        </InputGroup>

                        <Button type="submit" variant="warning">
                            Submit
                        </Button>
                    </form> */}

                    {/* this is a form using just Formik*/}
                    {/* <Formik
                        initialValues={{flavor:"", color:"", desc:""}}
                        validator={() => ({})}
                        onSubmit={onFormik}
                    >
                        <FormikForm>
                            <label htmlFor="flavor">flavor</label><Field name="flavor" id="flavor" type="text"/><br/>
                            <label htmlFor="color">color</label><Field name="color" id="color" type="text"/><br/>
                            <label htmlFor="desc">desc</label><Field name="desc" id="desc" type="text"/><br/>

                            <Button type="submit" variant="warning">
                                Submit
                            </Button>
                        </FormikForm>
                    </Formik> */}

                    {/* this is a form using formik and react-bootstrap */}
                    <Formik
                        initialValues={{flavor:"", color:"", desc:""}}
                        validationSchema={validations}
                        onSubmit={onFormik}
                    >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting
                    })=>(
                    <form onSubmit={handleSubmit}>
                        <InputGroup className="mb-3">
                            <ErrorMessage name="flavor" component="span" />
                            <InputGroup.Text id="basic-addon1">what's the flavor?</InputGroup.Text>
                            <Form.Control
                            placeholder="..."
                            name="flavor"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.flavor}
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1" >what color is it?</InputGroup.Text>
                            <Form.Control
                            name="color"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.color}
                            placeholder="..."
                            />
                        </InputGroup>
    
                        <InputGroup className="mb-3">
                            <InputGroup.Text>How does it taste?</InputGroup.Text>
                            <Form.Control as="textarea"
                            name="desc"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.desc}
                            />
                        </InputGroup>

                        <Button type="submit" variant="warning">
                            Submit
                        </Button>
                    </form>
                    )}
                    </Formik>

                </Col>
            </Row>
      </>
    )
}