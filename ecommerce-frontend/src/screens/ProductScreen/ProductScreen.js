import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/col'
import Image from 'react-bootstrap/Image'
import data from '../../data'
import "./ProductScreen.css"
import Rating from '../../components/Rating/Rating'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
const ProductScreen = (props) => {
    const product = data.products.find((x) => x._id === props.match.params.id);

    if(!product){
        return <div> Product Not found</div>
    }
    return (
        <>
            <Link to="/">return to result</Link>
            <Row className="row-productScreen" >
                <Col sm={4}>
                    <Image src={`../../../${product.image}`} fluid/>
                </Col>
                <Col sm={4}>
                    <ul>
                        <li>
                            {product.name}
                        </li>
                        <li>
                            <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                        </li>
                        <li>
                            Price: ${product.price}
                        </li>
                        <li>
                            Descripcion: <p>{product.desc}</p>
                        </li>
                    </ul>
                </Col>
                <Col sm={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Price</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">$ {product.price}</Card.Subtitle>
                            <Card.Text>
                                {product.countInStock > 0 ?(
                                    <span className="success">In Stock</span>
                                ) : (
                                    <span className="error">Unavalible</span>
                                )}
                            </Card.Text>
                            <Card.Link href="#">Add to Cart</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
