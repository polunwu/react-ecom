import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from '../../redux/user/user.actions';

import './sign-up.styles.scss';

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpStart({ email, password, displayName });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have a account</h2>
      <span>Sign in with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          id='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        ></FormInput>
        <FormInput
          type='email'
          name='email'
          id='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        ></FormInput>
        <FormInput
          type='password'
          name='password'
          id='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        ></FormInput>
        <FormInput
          type='password'
          name='confirmPassword'
          id='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        ></FormInput>

        <CustomButton type='submit'>Sign Up</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
