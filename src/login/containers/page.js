import React, { useState } from 'react'
import {Button, Card, Form, Toast } from 'react-bootstrap'
import { getUser } from '../login.api';
import { useDispatch,useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { user } from '../../dataSet/password';
import background from '../../assets/lake.jpg'
   

const Page = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);
    const xxx = useSelector((state => state.login.user[0]))

    const dispatch = useDispatch();

    const onSubmit = (event) => {
        const userPassword = user.find(element => element.password === password);
        console.log('password', userPassword)
        if (password === userPassword.password) {
            dispatch(getUser(username, password));
            event.preventDefault();
        }
        else {
            console.log('login failed');
            setShow(true);
        }
    }
    
    if (xxx !== undefined) {
        return <Redirect to='/album'></Redirect>
    }

    return (
        <div className='login' style={{backgroundImage:`url(${background}`}}>
            <Card className='login-card'>
                <Form onSubmit={onSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" onChange={(event) => {setUsername(event.target.value)}} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"  onChange={(event) => {setPassword(event.target.value)}}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card>
            <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                <Toast.Header>
                    <strong className="mr-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
            </Toast>
        </div>
    )
}

export default Page;