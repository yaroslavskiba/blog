import { MdContainer, MdImg } from '../styles/General.styles';

const NotFound = () => {
  return (
    <MdContainer>
      <MdImg src='/img/nf.svg' alt='not found' />
      <h1>404</h1>
      <h2>Page not found...</h2>
    </MdContainer>
  );
};

export default NotFound;
