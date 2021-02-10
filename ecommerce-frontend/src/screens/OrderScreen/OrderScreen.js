import React, { useEffect, useState } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import Axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { detailsOrder } from "../../actions/orderActions";
import LoadingBox from "../../components/LoadingBox/LoadingBox";
import MessageBox from "../../components/MessageBox/MessageBox";

export default function OrderScreen(props) {
    const orderId = props.match.params.id;
    const [sdkReady, setSdkReady] = useState(false);
    const orderDetails = useSelector((state) => state.orderDetails);
    const { order, loading, error } = orderDetails;
    const dispatch = useDispatch();
    useEffect(() => {
      const addPayPalScript = async () => {
        const { data } = await Axios.get('/api/config/paypal');
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
        script.async = true;
        script.onload = () => {
          setSdkReady(true);
        };
        document.body.appendChild(script);
      };
      if (!order) {
        dispatch(detailsOrder(orderId));
      } else {
        if (!order.isPaid) {
          if (!window.paypal) {
            addPayPalScript();
          } else {
            setSdkReady(true);
          }
        }
      }
    }, [dispatch, order, orderId, sdkReady]);
    const successPaymentHnadler = () => {
      // TODO: dispatch pay order
    };
    return loading ? (
        <LoadingBox></LoadingBox>
    ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
    ) : (
      <>
        <h1>Order {order._id}</h1>
        <Row>
            <Col sm={8}>
                <Row>
                    <Card>
                        <Card.Header>Shipping</Card.Header>
                        <Card.Text>
                            <strong>Name :</strong> {order.shippingAddress.fullName} <br />
                            <strong>Address :</strong> {order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.postalCode}, {order.shippingAddress.country}
                        </Card.Text>
                        {order.isDelivered ? <MessageBox variant="success">Delivered at {order.deliveredAt}</MessageBox> : <MessageBox variant="danger">Not Delivered</MessageBox>}
                    </Card>
                </Row>
                <Row>
                    <Card> 
                        <Card.Header>Payment</Card.Header>
                        <Card.Text>
                            <strong>Method :</strong> {order.paymentMethod} <br />
                        </Card.Text>
                        {order.isPaid ? <MessageBox variant="success">Paid at {order.paidAt}</MessageBox> : <MessageBox variant="danger">Not Paid</MessageBox>}
                    </Card>
                </Row>
                <Row>
                    <Card>
                        <Card.Header>Order Items</Card.Header>
                        <ul>
                            {order.orderItems.map((item) => (
                                <li key={item.product}>
                                    <Row>
                                        <Col sm={3}>
                                            <Image className="img-mini" src={`../../../${item.image}`} alt={item.name} fluid />
                                        </Col>
                                        <Col sm={3}>{item.name}</Col>
                                        <Col sm={3}>
                                            {item.qty} x ${item.price} = ${item.qty * item.price}
                                        </Col>
                                    </Row>
                                </li>
                            ))}
                        </ul>
                    </Card>
                </Row>
            </Col>
            <Col sm={4}>
                <Card>
                    <Card.Header>Order Summary</Card.Header>
                    <Card.Text>
                        <strong>items :</strong> ${order.itemsPrice.toFixed(2)} <br />
                        <strong>Shipping :</strong> ${order.shippingPrice.toFixed(2)} <br />
                        <strong>Tax :</strong> ${order.taxPrice.toFixed(2)} <br />
                        <strong>Order Total :</strong> ${order.totalPrice.toFixed(2)} <br />
                    </Card.Text>
                    {!order.isPaid && (
                      <li>
                        {!sdkReady ? (
                          <LoadingBox></LoadingBox>
                        ) : (
                          <PayPalButton
                            amount={order.totalPrice}
                            onSuccess={successPaymentHnadler}
                          ></PayPalButton>
                        )}
                      </li>
                    )}
                </Card>
            </Col>
        </Row>
      </>
    );
}
