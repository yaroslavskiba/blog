import React, { useState } from 'react';
import { Label, InputText, LinkButton } from '../../../styles/General.styles';
import { AuthForm, InputContainer } from './Auth.styles';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleRegistration = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <AuthForm onSubmit={handleRegistration}>
      <h1>Sign Up: </h1>
      <InputContainer>
        <Label htmlFor='login'>Email:</Label>
        <InputText
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor='password'>Password:</Label>
        <InputText
          type='password'
          id='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor='confirmPassword'>Confirm Password:</Label>
        <InputText
          type='password'
          id='confirmPassword'
          name='confirmPassword'
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </InputContainer>
      <LinkButton type='submit'>Save</LinkButton>
    </AuthForm>
  );
};

export default RegistrationForm;
