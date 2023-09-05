import { styled } from 'styled-components';

export const AuthForm = styled.form`
  max-width: 1110px;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
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
