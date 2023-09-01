import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const HeaderContainer = styled.div`
  height: 55px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.articleBackgroundColor};
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 15px;
  padding: 0 2%;
  margin-bottom: 25px;
`;

export const HeaderLink = styled(Link)`
  color: ${(props) => props.theme.colors.linkColor};
`;
