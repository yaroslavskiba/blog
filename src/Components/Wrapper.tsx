import { WrapperContainer } from '../styles/General.styles';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';

const Wrapper = () => {
  return (
    <WrapperContainer>
      <Header />
      <Main />
      <Footer />
    </WrapperContainer>
  );
};

export default Wrapper;
