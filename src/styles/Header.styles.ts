import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const HeaderContainer = styled.div`
  min-height: 75px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.articleBackgroundColor};
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: 0 2%;
`;

export const HeaderLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${(props) => props.theme.colors.summaryTextColor};
`;

export const Group = styled.div`
  display: flex;
  gap: 15px;
  justify-content: end;
`;
