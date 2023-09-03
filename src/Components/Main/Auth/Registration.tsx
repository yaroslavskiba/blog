import React, { useState } from 'react';
import { Label, InputText, LinkButton } from '../../../styles/General.styles';
import { AuthForm, InputContainer } from './Auth.styles';
import { createNewUser } from './createNewUser.func';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
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
