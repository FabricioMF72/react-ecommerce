import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard/ProductCard';
import Row from 'react-bootstrap/Row';
import LoadingBox from '../../components/LoadingBox/LoadingBox'
import MessageBox from '../../components/MessageBox/MessageBox'
import "./ProductList.css";
import { listProducts } from '../../actions/productActions';

const ProductList = () => {
    const dispatch = useDispatch();
    const productList = useSelector( (state) => state.productList)
    const {loading,error,products} = productList;
    useEffect(() =>{
        dispatch(listProducts());
    }, [dispatch])
    return (
        <div>
            {loading? (<LoadingBox></LoadingBox>)
            :
            error? (<MessageBox>{error}</MessageBox>)
            :
            (<Row className="row-productlist">
                {products.map((product)=> (
                        <ProductCard name={product.name} image={product.image} desc={product.desc} rating={product.rating} numReviews={product.numReviews} id={product._id} />
                    ))
                }
            </Row>)}
        </div>
    )
}

export default ProductList
