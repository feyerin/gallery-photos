import React from 'react';
import LoginForm from '../components/loginForm';

const LoginPage = () => {
    console.log('user',localStorage.getItem('user'));
    
     return (
        <div className='login'>
            <LoginForm/>
        </div>
    )
}

export default LoginPage