import React, { useState } from 'react'
import {Button, Card, Form } from 'react-bootstrap'
import { getUser } from '../login.api';
import { useDispatch,useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
   

const Page = () => {
    console.log('user',localStorage.getItem('user'));
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const xxx = useSelector((state => state.login.user[0]))

    const dispatch = useDispatch();

    const onSubmit = (event) => {
        dispatch(getUser(username, password));
        event.preventDefault();
    }

    console.log("xxx", xxx);
    
    if (xxx !== undefined) {
        return <Redirect to='/album'></Redirect>
    }

     return (
        <div className='login'>
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
                </div>
    )
}

export default Page