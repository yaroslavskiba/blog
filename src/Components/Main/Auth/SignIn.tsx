import React, { useState } from 'react';
import { Label, InputText, LinkButton } from '../../../styles/General.styles';
import { AuthForm, InputContainer } from './Auth.styles';
import { useNavigate } from 'react-router-dom';
import { createNewUser } from './auth.fucn';

const RegistrationForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });

  const handleRegistration = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await createNewUser(formData.email, formData.password);
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
    });

    navigate('/authentication');
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
        <Label errorInput={error.email} htmlFor='login'>
          Email:
        </Label>
        <InputText
          errorInput={error.email}
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
      </InputContainer>
      <InputContainer>
        <Label errorInput={error.password} htmlFor='password'>
          Password:
        </Label>
        <InputText
          errorInput={error.password}
          type='password'
          id='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
      </InputContainer>
      <InputContainer>
        <Label errorInput={error.confirmPassword} htmlFor='confirmPassword'>
          Confirm Password:
        </Label>
        <InputText
          errorInput={error.confirmPassword}
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
