import { useState } from 'react';
import {
  Label,
  InputText,
  LinkButton,
  InputContainer,
} from '../../../styles/General.styles';
import { AuthError, AuthForm } from '../../../styles/Auth.styles';
import { useNavigate } from 'react-router-dom';
import { loginUser } from './auth.fucn';

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const inputs = [
    { name: 'Email:', type: 'email', data: formData.email },
    { name: 'Password:', type: 'password', data: formData.password },
  ];

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

    navigate('/posts');
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
      {inputs.map((item) => (
        <InputContainer key={item.name}>
          <Label htmlFor='login'>{item.name}</Label>
          <InputText
            type={item.type}
            id={item.type}
            name={item.type}
            value={item.data}
            onChange={handleChange}
          />
        </InputContainer>
      ))}
      <LinkButton type='submit'>Send</LinkButton>
    </AuthForm>
  );
};

export default SignIn;
