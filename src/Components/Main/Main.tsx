import { Outlet } from 'react-router-dom';
import { MainContainer } from '../../styles/Main.styles';

const Main = () => {
  return (
    <MainContainer>
      <Outlet />
    </MainContainer>
  );
};

export default Main;
