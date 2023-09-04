/* eslint-disable react-hooks/exhaustive-deps */
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { ContentContainer, LinkComponent } from '../Main.styles';
import { auth } from '../../../App';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Reader from './Reader';

const Profile = () => {
  const user = auth.currentUser;
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, []);

  return (
    <ContentContainer>
      <LinkComponent to='/'>
        <AiOutlineArrowLeft />
        Main
      </LinkComponent>
      <Reader />
    </ContentContainer>
  );
};

export default Profile;
