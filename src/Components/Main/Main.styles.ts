import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const MainContainer = styled.div`
  flex: 1 1 auto;
  max-width: 1110px;
  margin: 25px auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.articleBackgroundColor};
`;

export const ContentContainer = styled.div`
  max-width: 768px;
  width: 100%;
  height: 100%;
  padding: 25px 2%;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (max-width: 768px) {
    padding: 25px 10%;
  }
`;

export const LinkComponent = styled(Link)`
  display: flex;
  gap: 5px;
  align-items: center;
  color: ${(props) => props.theme.colors.linkColor};
`;

export const UserInfoContainer = styled.div`
  padding: 0 30px;
  display: flex;
`;

export const UserHighlights = styled.div`
  flex: 0 0 15%;
  color: ${(props) => props.theme.colors.summaryTextColor};
`;

export const UserStatistics = styled.div`
  flex: 0 0 85%;
  letter-spacing: 1px;
`;
