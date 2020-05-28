import React from 'react';
import Form from '../../Form/Form';
import { ILoginProps } from './Login.model';
import LoginRows from '../../../common/config/login/loginRows.json';

const Login = (props: ILoginProps) => (
    <Form
        message={props.message}
        title="Please sign in"
        rows={LoginRows}
        onSubmit={props.onSubmit}
        onChange={props.onChange}
        buttonText="Log in"
    />
)
    


export default Login;