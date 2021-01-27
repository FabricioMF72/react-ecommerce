import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import NavDropdown from 'react-bootstrap/NavDropdown'
import FormControl from 'react-bootstrap/FormControl'
import Badge from 'react-bootstrap/Badge'
import { signout } from '../../actions/userActions.js';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import "./Header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux'

const Header = () => {
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    const signoutHandler = () => {
        dispatch(signout());
    };
    return (
        <Navbar bg="light" expand="lg" className="header-navbar">
            <Navbar.Brand>NIKE</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link>
                    <Link to={`/`}>
                    <span>Home</span>
                    </Link></Nav.Link>
                <Nav.Link>
                    <Link to={`/cart`}>
                        <span>Cart</span>
                        {
                            cartItems.length > 0 && (
                                <Badge variant="light">{cartItems.length}</Badge>
                            )
                        }
                    </Link>
                </Nav.Link>
                <NavDropdown title={
                        userInfo ? (
                            <Link to="#">
                                {
                                    userInfo.name
                                }
                            </Link>
                        ) :
                        <Link to="/signin">
                            Sign In 
                        </Link>
                    } id="basic-nav-dropdown">

                    {userInfo ? (
                        <>
                            <Link to="#signout" onClick={signoutHandler}>
                                <NavDropdown.Item to="#signout" onClick={signoutHandler}>
                                   <Link to="#signout" onClick={signoutHandler}>Sign Out</Link> 
                                </NavDropdown.Item>
                             </Link>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>

                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </>
                        ) 
                            
                        :
                        
                        <>
                        </>
                    }
                </NavDropdown>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
