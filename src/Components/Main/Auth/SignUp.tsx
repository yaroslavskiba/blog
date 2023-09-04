import React, { useState } from 'react';
import { Label, InputText, LinkButton } from '../../../styles/General.styles';
import { AuthForm, InputContainer } from './Auth.styles';
import { createNewUser, createUserData } from './auth.fucn';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const inputs = [
    { name: 'Email:', type: 'email', id: 'email', data: formData.email },
    {
      name: 'Password:',
      type: 'password',
      id: 'password',
      data: formData.password,
    },
    {
      name: 'Confirm Password:',
      type: 'password',
      id: 'confirmPassword',
      data: formData.confirmPassword,
    },
  ];

  const [error, setError] = useState<{ [key: string]: string }>({
    email: 'false',
    password: 'false',
    confirmPassword: 'false',
  });

  const [validation, setValidation] = useState(true);

  const handleRegistration = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      await createNewUser(formData.email, formData.password);
      createUserData();

      setFormData({
        email: '',
        password: '',
        confirmPassword: '',
      });
      navigate('/');
    } else {
      setValidation(false);
      setError({
        email: 'false',
        password: 'true',
        confirmPassword: 'true',
      });
    }
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
      {inputs.map((item) => (
        <InputContainer key={item.name}>
          <Label errorinput={error[item.type]} htmlFor='login'>
            {item.name}
          </Label>
          <InputText
            errorinput={error[item.type]}
            type={item.type}
            name={item.id}
            value={item.data}
            onChange={handleChange}
          />
        </InputContainer>
      ))}
      {validation ? (
        <LinkButton type='submit'>Save</LinkButton>
      ) : (
        <LinkButton type='submit' disabled>
          Save
        </LinkButton>
      )}
    </AuthForm>
  );
};

export default SignUp;