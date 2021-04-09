// import { Checkbox } from '@chakra-ui/checkbox';
import Checkbox from '../Checkbox/Checkbox';
import React, { useState } from 'react';
import Button from '../Button/Button';
import FormGroup from '../FormGroup/FormGroup';
import InputField from '../InputField/InputField';
import Modal from '../Modal/Modal';
import * as yup from 'yup'
import { Formik } from 'formik';

const LoginModal = ({ tab, open, close }) => {
  const signInSchema = yup.object({
    email: yup.string().email().default(''),
    password: yup.string().min(6).default(''),
    rememberMe: yup.boolean().default(false)
  })
  const signUpSchema = yup.object({
    firstName: yup.string().default('').required(),
    lastName: yup.string().default('').required(),
    email: yup.string().email().default(''),
    password: yup.string().min(6).default(''),
    terms: yup.bool().default(true).oneOf([true], 'Field must be checked') 
  })
  const signIn = (
    <>
      <Formik
        // validationSchema={signInSchema}
        initialValues={signInSchema.cast()}
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
            <Checkbox name='rememberMe'>Keep me signed in</Checkbox>
            <Button type="submit">Sign In</Button>
            <h5>Or Sign In With</h5>
          </FormGroup>
        )}
      </Formik>
    </>
  );

  const signUp = (
       <>
      <Formik
        // validationSchema={signUpSchema}
        initialValues={signUpSchema.cast()}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {() => (
          <FormGroup>
            <h4>Create An Accout</h4>
            <h5>
              Already an user?<button>Sign In</button>{' '}
            </h5>
            <InputField placeholder="First Name" type="text" name='firstName' />
            <InputField placeholder="Last Name" type="text" name='lastName' />
            <InputField placeholder="Email" type="email" name='email' />
            <InputField placeholder="Password" type="password" name='password' />
            <Checkbox name='terms' checked>I accept the Terms and conditions</Checkbox>
            <Button type="submit">Sign Up</Button>
            <h5>Or Sign In With</h5>
          </FormGroup>
        )}
      </Formik>
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
