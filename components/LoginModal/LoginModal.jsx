import { Checkbox } from '@chakra-ui/checkbox';
import React, { useState } from 'react';
import Button from '../Button/Button';
import FormGroup from '../FormGroup/FormGroup';
import InputField from '../InputField/InputField';
import Modal from '../Modal/Modal';
import * as yup from 'yup'
import { Formik } from 'formik';

const LoginModal = ({ tab, open, close }) => {
  const schema = yup.object({
    email: yup.string().email().default(''),
    password: yup.string().min(6).default('') 
  })
  const signIn = (
    <>
      <Formik
        validationSchema={schema}
        initialValues={schema.cast()}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {() => (
          <FormGroup>
            <h4>Sign In</h4>
            <h5>
              New user? <button>Create an accout</button>{' '}
            </h5>
            <InputField placeholder="Username or email" type="email" name='email' />
            <InputField placeholder="Password" type="password" name='password' />
            <Checkbox>Keep me signed in</Checkbox>
            <Button type="submit">Sign In</Button>
            <h5>Or Sign In With</h5>
          </FormGroup>
        )}
      </Formik>
    </>
  );

  const signUp = (
    <>
      <div>Hello </div>
    </>
  );

  return (
    <Modal isOpen={open} onClose={close}>
      {tab === 'signin' && signIn}
      {tab === 'signup' && signUp}
    </Modal>
  );
};

export default LoginModal;
