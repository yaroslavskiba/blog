/* eslint-disable react-hooks/exhaustive-deps */
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { ContentContainer, LinkComponent } from '../Main.styles';
import { auth } from '../../../App';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Reader from './Reader';
import { useAppSelector } from '../../../app/hooks';
import Author from './Author';

const Profile = () => {
  const user = auth.currentUser;
  const navigate = useNavigate();
  const status = useAppSelector((state) => state.user.status);

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
      {status === 'Reader' ? <Reader /> : <Author />}
    </ContentContainer>
  );
};

export default Profile;
