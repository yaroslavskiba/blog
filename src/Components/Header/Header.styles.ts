import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const HeaderContainer = styled.div`
  min-height: 55px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.articleBackgroundColor};
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 15px;
  padding: 0 2%;
`;

export const HeaderLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${(props) => props.theme.colors.linkColor};
`;
