import React from 'react';
import Form from '../../Form/Form';
import { IRegisterProps } from './Register.model';
import RegistrationRows from '../../../common/config/registration/registrationRows.json';

const Register = (props: IRegisterProps) => (
    <Form
        message={props.message}
        title="Please Register"
        rows={RegistrationRows}
        onSubmit={props.onSubmit}
        onChange={props.onChange}
        buttonText={"Submit"}
    />
)
    


export default Register;