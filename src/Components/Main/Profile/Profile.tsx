/* eslint-disable react-hooks/exhaustive-deps */
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { ContentContainer, LinkComponent } from '../../../styles/Main.styles';
import { auth } from '../../../App';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserProfileData from './UserProfileData';
import { VscSignOut } from 'react-icons/vsc';
import { LinkButton } from '../../../styles/General.styles';
import { TbExchange } from 'react-icons/tb';
import { useAppSelector } from '../../../app/hooks';

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
      <LinkComponent to='/posts'>
        <AiOutlineArrowLeft />
        Main
      </LinkComponent>
      <UserProfileData />
      {status === 'Reader' && (
        <LinkComponent to='/change_to_author'>
          <TbExchange />
          Change to author mode
        </LinkComponent>
      )}
      <LinkButton onClick={handleSignOut}>
        <VscSignOut />
        Sign Out
      </LinkButton>
    </ContentContainer>
  );
};

export default Profile;
