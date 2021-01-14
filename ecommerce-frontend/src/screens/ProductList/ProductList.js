import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProductCard from '../../components/ProductCard/ProductCard';
import Row from 'react-bootstrap/Row';
import LoadingBox from '../../components/LoadingBox/LoadingBox'
import MessageBox from '../../components/MessageBox/MessageBox'
import "./ProductList.css";

const ProductList = () => {
    const [products, setProducts] = useState( [] );
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() =>{
        const fecthdata = async () =>{
            try {
                setLoading(true);
                const { data } = await axios.get('/api/products');
                setProducts(data);;
                setLoading(false)
            } catch (err) {
                setError(err.message);
                setLoading(false)
            }
        };    
        fecthdata();
    }, [])
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
