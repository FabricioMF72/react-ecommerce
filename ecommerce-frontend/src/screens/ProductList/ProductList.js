import React from 'react'
import data from '../../data'
import ProductCard from '../../components/ProductCard/ProductCard'
import Row from 'react-bootstrap/Row'
import "./ProductList.css"
const ProductList = () => {
    return (
        <Row>
            {data.products.map((product)=> (
                    <ProductCard name={product.name} image={product.image} desc={product.desc} />
                ))
            }
        </Row>
    )
}

export default ProductList
