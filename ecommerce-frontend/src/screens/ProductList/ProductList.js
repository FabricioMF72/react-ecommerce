import React from 'react'
import data from '../../data'
import ProductCard from '../../components/ProductCard/ProductCard'
import Row from 'react-bootstrap/Row'
import "./ProductList.css"
const ProductList = () => {
    return (
        <Row className="row-productlist">
            {data.products.map((product)=> (
                    <ProductCard name={product.name} image={product.image} desc={product.desc} rating={product.rating} numReviews={product.numReviews} id={product._id} />
                ))
            }
        </Row>
    )
}

export default ProductList
