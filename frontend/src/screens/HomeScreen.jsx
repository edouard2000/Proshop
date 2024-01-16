import { Col, Row } from "react-bootstrap";
import Product from "../components/product"
import products from "../products"


const home = () => {
    return (
        <>
        <Row>
            {products.map ( (product) => (
                <Col key={product._id} sm = {12} md = {6} xl = {3}>
                <Product product={product} />
                </Col>
            ))}
        </Row>
        
        
        </>
    )
}

export default home; 
