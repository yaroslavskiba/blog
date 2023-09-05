/* eslint-disable react-hooks/exhaustive-deps */
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { ContentContainer, LinkComponent } from '../Main.styles';
import { auth } from '../../../App';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserProfileData from './UserProfileData';
import { VscSignOut } from 'react-icons/vsc';
import { LinkButton } from '../../../styles/General.styles';

const Profile = () => {
  const user = auth.currentUser;
  const navigate = useNavigate();

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
      <UserProfileData />
      <LinkButton onClick={handleSignOut}>
        <VscSignOut />
        Sign Out
      </LinkButton>
    </ContentContainer>
  );
};

export default Profile;
