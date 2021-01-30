import React, { useState } from 'react'
import { saveShippingAddress } from '../../actions/cartActions';
import CheckoutSteps from '../../components/CheckoutSteps/CheckoutSteps'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "./ShippingAddressScreen.css"
import { useSelector,useDispatch } from 'react-redux'
const ShippingAddressScreen = (props) => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!userInfo) {
    props.history.push('/signin');
  }
  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({ fullName, address, city, postalCode, country })
    );
    props.history.push('/payment');
  };
    return (
        <>
        <CheckoutSteps step1 step2></CheckoutSteps>
        <Form onSubmit={submitHandler}>
            <Form.Group controlId="fullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required placeholder="Enter full name" />
            </Form.Group>
            <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required placeholder="Enter address" />
            </Form.Group>
            <Form.Group controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} required placeholder="Enter city" />
            </Form.Group>
            <Form.Group controlId="postalCode">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control type="text" id="postalCode" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required placeholder="Enter postal Code" />
            </Form.Group>
            <Form.Group controlId="country">
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" id="country" value={country} onChange={(e) => setCountry(e.target.value)} required placeholder="Enter country" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Continue
            </Button>
        </Form>
    </>
    )
}

export default ShippingAddressScreen
