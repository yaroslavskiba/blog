/* eslint-disable react-hooks/exhaustive-deps */
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { ContentContainer, LinkComponent } from '../Main.styles';
import { auth } from '../../../App';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Reader from './Reader';
import { useAppSelector } from '../../../app/hooks';
import Author from './Author';
import { VscSignOut } from 'react-icons/vsc';
import { LinkButton } from '../../../styles/General.styles';

const Profile = () => {
  const user = auth.currentUser;
  const navigate = useNavigate();
  const status = useAppSelector((state) => state.user.status);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, []);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <ContentContainer>
      <LinkComponent to='/'>
        <AiOutlineArrowLeft />
        Main
      </LinkComponent>
      {status === 'Reader' ? <Reader /> : <Author />}
      <LinkButton onClick={handleSignOut}>
        <VscSignOut />
        Sign Out
      </LinkButton>
    </ContentContainer>
  );
};

export default Profile;
