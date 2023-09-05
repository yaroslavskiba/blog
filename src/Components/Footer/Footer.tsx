import { styled } from 'styled-components';

const FooterComponent = styled.footer`
  min-height: 75px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.articleBackgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return <FooterComponent>Created by yaroslavskiba 2023</FooterComponent>;
};

export default Footer;
