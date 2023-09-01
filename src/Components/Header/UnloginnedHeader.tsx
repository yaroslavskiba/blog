import { HeaderContainer, HeaderLink } from './styles/Header.styles';

const UnlogginedHeader = () => {
  return (
    <HeaderContainer>
      <HeaderLink to='/registration'>Sign In</HeaderLink>
      <HeaderLink to='/authentication'>Sign Up</HeaderLink>
    </HeaderContainer>
  );
};

export default UnlogginedHeader;
