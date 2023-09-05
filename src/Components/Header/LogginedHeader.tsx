import { auth } from '../../App';
import { useAppSelector } from '../../app/hooks';
import { HeaderContainer, HeaderLink } from '../../styles/Header.styles';
import { AiOutlineProfile } from 'react-icons/ai';
import { IoCreateOutline } from 'react-icons/io5';

const LogginedHeader = () => {
  const user = auth.currentUser;
  const status = useAppSelector((state) => state.user.status);

  return (
    <HeaderContainer>
      {status === 'Author' && (
        <HeaderLink to='/createPost'>
          <IoCreateOutline />
          Write
        </HeaderLink>
      )}

      <HeaderLink to='/profile'>
        <AiOutlineProfile />
        {user?.email}
      </HeaderLink>
    </HeaderContainer>
  );
};

export default LogginedHeader;
