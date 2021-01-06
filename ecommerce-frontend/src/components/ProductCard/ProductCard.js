import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "./ProductCard.css";
const ProductCard = ({ image, name, desc }) => {
    return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{desc}</Card.Text>
                    <Button variant="primary">Comprar</Button>
                </Card.Body>
            </Card>
    )
}

export default ProductCard
