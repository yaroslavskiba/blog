import { HeaderContainer, HeaderLink } from './Header.styles';

const UnlogginedHeader = () => {
  return (
    <HeaderContainer>
      <HeaderLink to='/signIn'>Sign In</HeaderLink>
      <HeaderLink to='/signUp'>Sign Up</HeaderLink>
    </HeaderContainer>
  );
};

export default UnlogginedHeader;
