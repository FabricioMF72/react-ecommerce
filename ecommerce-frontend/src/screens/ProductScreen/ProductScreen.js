  
import React, { useEffect } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/col";
import Image from "react-bootstrap/Image";
import "./ProductScreen.css";
import Rating from "../../components/Rating/Rating";
import Card from "react-bootstrap/Card";
import LoadingBox from "../../components/LoadingBox/LoadingBox";
import MessageBox from "../../components/MessageBox/MessageBox";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from "../../actions/productActions";
const ProductScreen = (props) => {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const productDetail = useSelector((state) => state.productDetail);
    const { loading, error, product } = productDetail;
  
    useEffect(() => {
      dispatch(detailsProduct(productId));
    }, [dispatch, productId]);
    return (
            <div>
                {loading ? (
                    <LoadingBox></LoadingBox>
                ) : error ? (
                    <MessageBox>{error}</MessageBox>
                ) : (
                    <div>
                        <Link to="/">return to result</Link>
                        <Row className="row-productScreen">
                            <Col sm={4}>
                                <Image src={`../../../${product.image}`} fluid />
                            </Col>
                            <Col sm={4}>
                                <ul>
                                    <li>{product.name}</li>
                                    <li>
                                        <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                                    </li>
                                    <li>Price: ${product.price}</li>
                                    <li>
                                        Descripcion: <p>{product.desc}</p>
                                    </li>
                                </ul>
                            </Col>
                            <Col sm={4}>
                                <Card style={{ width: "18rem" }}>
                                    <Card.Body>
                                        <Card.Title>Price</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">$ {product.price}</Card.Subtitle>
                                        <Card.Text>{product.countInStock > 0 ? <span className="success">In Stock</span> : <span className="danger">Unavalible</span>}</Card.Text>
                                        <Card.Link href="#">Add to Cart</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                )}
            </div>
    );
};

export default ProductScreen;
