import { auth } from '../../App';
import { HeaderContainer, HeaderLink } from './Header.styles';
import { AiOutlineProfile } from 'react-icons/ai';

const LogginedHeader = () => {
  const user = auth.currentUser;

  return (
    <HeaderContainer>
      <HeaderLink to='/profile'>
        <AiOutlineProfile />
        {user?.email}
      </HeaderLink>
    </HeaderContainer>
  );
};

export default LogginedHeader;
