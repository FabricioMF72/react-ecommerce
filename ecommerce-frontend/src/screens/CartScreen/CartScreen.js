import React, { useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MessageBox from '../../components/MessageBox/MessageBox'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import {useDispatch, useSelector} from 'react-redux'
import { addToCart } from '../../actions/cartAction';
import { Link } from 'react-router-dom'
const CartScreen = (props) => {
    const productId = props.match.params.id;
    const qty = props.location.search 
        ? Number(props.location.search.split('=')[1])
        : 1;
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart;
    const dispatch = useDispatch()    
    useEffect(() =>{
        if(productId){
            dispatch(addToCart(productId, qty))
        }
    },[dispatch,productId,qty]);

    const removeFromCartHandler = (id) => {
        // delete action
      };

    const checkoutHandler = () => {
        props.history.push('/signin?redirect=shipping');
    };

    return (
        <>
            <Row>
                <Col sm={8}>
                    {
                        cartItems === 0? <MessageBox>
                            Cart is empty. <Link to="/">Go Shopping</Link>
                        </MessageBox>
                        :
                        (
                            <ul>
                                {
                                    cartItems.map((item)=> (
                                        <li key={item.product}>
                                            <Row>
                                                <Col sm={3}>
                                                    <Image  className="img-mini" src={`../../../${item.image}`} alt={item.name} fluid/>
                                                </Col>
                                                <Col sm={3}>
                                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                                </Col>
                                                <Col sm={3}>
                                                    <select
                                                        value={item.qty}
                                                        onChange={(e) =>
                                                            dispatch(
                                                            addToCart(item.product, Number(e.target.value))
                                                            )
                                                        }
                                                        >
                                                        {[...Array(item.countInStock).keys()].map((x) => (
                                                            <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </Col>
                                                <Col sm={1}>
                                                    ${item.price}
                                                </Col>
                                                <Col sm={2}>
                                                    <button
                                                        type="button"
                                                        onClick={() => removeFromCartHandler(item.product)}
                                                        >
                                                        Delete
                                                    </button>
                                                </Col>
                                            </Row>
                                        </li>
                                    ))
                                }
                            </ul>
                        )
                    }
                </Col>
                <Col sm={4}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>
                            Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
                            {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                        </Card.Title>
                        <Button type="button"
                            onClick={checkoutHandler}
                            className="primary block"
                            disabled={cartItems.length === 0}
                        >
                            Proceed to Checkout
                        </Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </>
    )
}

export default CartScreen

