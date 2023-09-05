import { Group, HeaderContainer, HeaderLink } from '../../styles/Header.styles';

const UnlogginedHeader = () => {
  return (
    <HeaderContainer>
      <Group>
        <HeaderLink to='/signIn'>Sign In</HeaderLink>
        <HeaderLink to='/signUp'>Sign Up</HeaderLink>
      </Group>
    </HeaderContainer>
  );
};

export default UnlogginedHeader;
