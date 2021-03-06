// import { Checkbox } from '@chakra-ui/checkbox';
import Checkbox from '../Checkbox/Checkbox';
import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import FormGroup from '../FormGroup/FormGroup';
import InputField from '../InputField/InputField';
import Modal from '../Modal/Modal';
import * as yup from 'yup';
import { Formik } from 'formik';
import classes from './LoginModal.module.scss';

const LoginModal = ({ tab, open, close }) => {

  const [tabSwitch,setTabSwitch] = useState('')
  const [loading, setLoading] = useState(false)
  
  useEffect(()=> {
    setTabSwitch(tab)
  },[tab])

  const onSignInSwitch = () => {
    setTabSwitch('signin')
    console.log(tab)
  }

  const onSignUpSwitch = () => {
    setTabSwitch('signup') 
  }

  const signInSchema = yup.object({
    email: yup.string().email().default(''),
    password: yup.string().min(6).default(''),
    rememberMe: yup.boolean().default(false),
  });
  const signUpSchema = yup.object({
    firstName: yup.string().default('').required(),
    lastName: yup.string().default('').required(),
    email: yup.string().email().default(''),
    password: yup.string().min(6).default(''),
    terms: yup.bool().default(true).oneOf([true], 'Field must be checked'),
  });
  const signIn = (
    <>
      <Formik
        // validationSchema={signInSchema}
        initialValues={signInSchema.cast()}
        onSubmit={(values) => {
          console.log(values);
          setLoading(true)
        }}
      >
        {() => (
          <FormGroup>
            <h4>Sign In</h4>
            <h5>
              New user?{' '}
              <div className={classes.ModalBtn} onClick={onSignUpSwitch}>Create an accout</div>{' '}
            </h5>

            <InputField
              placeholder="Username or email"
              type="email"
              name="email"
            />
            <InputField
              placeholder="Password"
              type="password"
              name="password"
            />
            <Checkbox name="rememberMe" className={classes.Checked}>
              Keep me signed in
            </Checkbox>
            <Button className={classes.Btn} type="submit">
              Sign In
            </Button>
            <h5 className={classes.Divider}>Or Sign In With</h5>
            <div className={classes.Icons}>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-google"></i>
            </div>
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
          console.log(values);
          setLoading(true)
        }}
      >
        {() => (
          <FormGroup>
            <h4>Create An Accout</h4>
            <h5>
              Already an user?
              <div className={classes.ModalBtn} onClick={onSignInSwitch}>Sign In</div>{' '}
            </h5>
            <div
             className={classes.TwoInput}
            >
              <InputField
                placeholder="First Name"
                type="text"
                name="firstName"
              />
              <InputField placeholder="Last Name" type="text" name="lastName" />
            </div>
            <InputField placeholder="Email" type="email" name="email" />
            <InputField
              placeholder="Password"
              type="password"
              name="password"
            />
            <Checkbox name="terms" checked className={classes.Checked}>
              I accept the Terms and conditions
            </Checkbox>
            <Button type="submit" className={classes.Btn}>
              Sign Up
            </Button>
            <h5 className={classes.Divider}>Or Sign In With</h5>
            <div className={classes.Icons}>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-google"></i>
            </div>
          </FormGroup>
        )}
      </Formik>
    </>
  );

  return (
    <Modal isOpen={open} onClose={close} loading={loading}>
      <div className={classes.Container}>
        {tabSwitch === 'signin' && signIn}
        {tabSwitch === 'signup' && signUp}
      </div>
    </Modal>
  );
};

export default LoginModal;
