import { styled } from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 95px;
`;

export const AuthForm = styled.form`
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const AuthError = styled.div`
  width: inherit;
  height: 85px;
  background-color: ${(props) => props.theme.colors.danger};
  display: flex;
  align-items: center;
  padding: 0 5%;
`;
