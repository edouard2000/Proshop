
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios"; 
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";

const ProductScreen = () => {
    const { id } = useParams(); 
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { data } = await axios.get(`/api/products/${id}`);
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [id]);


    
    if (!product) {
        return <div>Loading...</div>;
    }


    return (
        <>
            <Link className = 'btn btn-light my-3' to = '/' > 
            Go Back
            </Link>
            <Row>
                <Col md = {5}>
                    <Image src = {product.image}  alt = {product.name } fluid />
                </Col>

                <Col md = {4}>
                    <ListGroup.Item>
                        <h3> {product.name} </h3>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} /></ListGroup.Item>

                    <ListGroup.Item> Price : ${product.price}</ListGroup.Item>
                    <ListGroup.Item> Description : ${product.description}</ListGroup.Item>
                 </Col>

                <Col md = {3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col> Price: </Col>
                                    <Col>
                                    <strong> ${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup> 

                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col> Status: </Col>
                                    <Col>
                                    <strong> {product.countInStock > 0 ? "In stock" : "Out of stock"}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup> 

                        <ListGroup.Item>
                            <Button className="btn-block" type="button" 
                                disabled = {product.countInStock === 0}> Add to Cart 
                            </Button>
                        </ListGroup.Item>

                    </Card>
                
                </Col>
            </Row>

        </>
           
    )
}

export default ProductScreen;
