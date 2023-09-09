/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet, useNavigate } from 'react-router-dom';
import { MainContainer } from '../../styles/Main.styles';
import { useEffect } from 'react';

const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/posts');
  }, []);

  return (
    <MainContainer>
      <Outlet />
    </MainContainer>
  );
};

export default Main;
