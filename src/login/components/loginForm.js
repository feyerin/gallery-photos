import React, { useState } from 'react'
import {Button, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { getUser } from '../login.api';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();

    const onSubmit = () => {
        dispatch(getUser(username, password))
    }

    return (
        <Card className='login-card'>
            <Form onSubmit={onSubmit()}>
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
    )
}

export default LoginForm;