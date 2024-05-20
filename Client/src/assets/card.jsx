import CardBs from 'react-bootstrap/Card'
import {Link} from 'react-router-dom'

export default function Card({flavor, color, desc, id}){
    return (
        <Link to={'/detail/'+ id} style={{textDecoration: "none"}}>
            <CardBs style={{ width: '18rem'}} bg="dark" text="light" border="danger">
                    <CardBs.Header>{flavor}</CardBs.Header>
                    <CardBs.Body>
                        <CardBs.Title>{flavor} ice cream</CardBs.Title>
                        <CardBs.Text>
                            {desc}
                        </CardBs.Text>
                    </CardBs.Body>
                    <CardBs.Footer>this ice cream is {color}</CardBs.Footer>
            </CardBs>
        </Link>
    )
}