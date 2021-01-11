import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import "./ProductCard.css";
import Rating from '../Rating/Rating';
const ProductCard = ({id, image, name, desc, rating, numReviews}) => {
    return (
            <Card key={id} style={{ width: '18rem' }}>
                <Link to={`/product/${id}`}>
                    <Card.Img variant="top" src={image}/>
                </Link>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{desc}</Card.Text>
                    <Rating rating={rating} numReviews={numReviews}/>
                    <Link to={`/product/${id}`}>
                        <Button variant="primary">Comprar</Button>
                    </Link>
                </Card.Body>
            </Card>
    )
}

export default ProductCard
