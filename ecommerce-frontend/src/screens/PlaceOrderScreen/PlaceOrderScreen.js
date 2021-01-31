import React from 'react';
import { useSelector } from 'react-redux';
import "./PlaceOrderScreen.css"
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CheckoutSteps from '../../components/CheckoutSteps/CheckoutSteps'

const PlaceOrderScreen = (props) => {
    const cart = useSelector((state) => state.cart);
    if (!cart.paymentMethod) {
      props.history.push('/payment');
    }
    const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
    cart.itemsPrice = toPrice(
      cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
    );
    cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
    cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
    cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;
    const placeOrderHandler = () => {
      console.log("HOLA")
    };
    return (
        <div>
            <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
            <Row>
                <Col sm={8}>
                    <Row>
                        <Card>
                            <Card.Header>Shipping</Card.Header>
                                <Card.Text>
                                    <strong>Name :</strong> {cart.shippingAddress.fullName} <br/>
                                    <strong>Address :</strong> {cart.shippingAddress.address}
                                    , {cart.shippingAddress.city}, {cart.shippingAddress.postalCode} 
                                    , {cart.shippingAddress.country}
                                </Card.Text>
                        </Card>
                    </Row>
                    <Row>
                        <Card>
                            <Card.Header>Payment</Card.Header>
                            <Card.Text>
                                <strong>Method :</strong> {cart.paymentMethod} <br/>
                            </Card.Text>
                        </Card>
                    </Row>
                    <Row>
                        <Card>
                            <Card.Header>Order Items</Card.Header>
                            <ul>
                                {
                                    cart.cartItems.map((item)=> (
                                        <li key={item.product}>
                                            <Row>
                                                <Col sm={3}>
                                                    <Image  className="img-mini" src={`../../../${item.image}`} alt={item.name} fluid/>
                                                </Col>
                                                <Col sm={3}>
                                                    {item.name}
                                                </Col>
                                                <Col sm={3}>
                                                    {item.qty} x ${item.price} = ${item.qty * item.price}
                                                </Col>
                                            </Row>
                                        </li>
                                    ))
                                }
                            </ul>
                        </Card>
                    </Row>
                </Col>
                <Col sm={4}>
                    <Card>
                        <Card.Header>Order Summary</Card.Header>
                        <Card.Text>
                                <strong>items :</strong> ${cart.itemsPrice.toFixed(2)} <br/>
                                <strong>Shipping :</strong> ${cart.shippingPrice.toFixed(2)} <br/>
                                <strong>Tax :</strong> ${cart.taxPrice.toFixed(2)} <br/>
                                <strong>Order Total :</strong> ${cart.totalPrice.toFixed(2)} <br/>
                         </Card.Text>
                        <Button onClick={placeOrderHandler} disabled={cart.cartItems.length === 0} variant="primary">PlaceOrder</Button>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default PlaceOrderScreen
