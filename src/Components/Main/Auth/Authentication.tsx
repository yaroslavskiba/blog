import { useState } from 'react';
import { Label, InputText, LinkButton } from '../../../styles/General.styles';
import { AuthError, AuthForm, InputContainer } from './Auth.styles';
import { useNavigate } from 'react-router-dom';
import { loginUser } from './auth.fucn';

const Authentication = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(false);

  const handleAuthentication = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const user = await loginUser(formData.email, formData.password);
    if (!user) {
      setError(true);
      return;
    }
    setError(false);

    setFormData({
      email: '',
      password: '',
    });

    navigate('/');
  };

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <AuthForm onSubmit={handleAuthentication}>
      <h1>Sign In: </h1>
      {error && (
        <AuthError>
          An error occurred during authorization! Please check the entered data.
        </AuthError>
      )}
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
      <LinkButton type='submit'>Send</LinkButton>
    </AuthForm>
  );
};

export default Authentication;
