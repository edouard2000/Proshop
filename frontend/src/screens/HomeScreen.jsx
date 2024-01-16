
import {useEffect, useState} from "react";
import axios from "axios"
import { Col, Row } from "react-bootstrap";
import Product from "../components/product"

const HomePage = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { data } = await axios.get('/api/products');
                setProduct(data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };
    
        fetchProduct();
    }, []);
    
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

export default HomePage; 
