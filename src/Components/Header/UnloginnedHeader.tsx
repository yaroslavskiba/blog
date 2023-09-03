import { HeaderContainer, HeaderLink } from './styles/Header.styles';

const UnlogginedHeader = () => {
  return (
    <HeaderContainer>
      <HeaderLink to='/authentication'>Sign In</HeaderLink>
      <HeaderLink to='/registration'>Sign Up</HeaderLink>
    </HeaderContainer>
  );
};

export default UnlogginedHeader;
