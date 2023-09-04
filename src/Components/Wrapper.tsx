import { WrapperContainer } from '../styles/General.styles';
import Header from './Header/Header';
import Main from './Main/Main';

const Wrapper = () => {
  return (
    <WrapperContainer>
      <Header />
      <Main />
    </WrapperContainer>
  );
};

export default Wrapper;
