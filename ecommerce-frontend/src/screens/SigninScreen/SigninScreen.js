
import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import LoadingBox from "../../components/LoadingBox/LoadingBox";
import MessageBox from "../../components/MessageBox/MessageBox";
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../../actions/userActions';

const SigninScreen = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo, loading, error } = userSignin;

    const dispatch= useDispatch(); 
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    };
    useEffect(() => {
        if (userInfo) {
          props.history.push(redirect);
        }
      }, [props.history, redirect, userInfo]);
    return (
        <>
            {loading && <LoadingBox></LoadingBox>}
            {error && <MessageBox variant="danger">{error}</MessageBox>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default SigninScreen
