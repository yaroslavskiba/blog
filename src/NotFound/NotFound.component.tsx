import { MdContainer, MdImg } from '../styles/styles';

const NotFound = () => {
  return (
    <MdContainer>
      <MdImg src='../public/img/nf.svg' alt='not found' />
      <h1>404</h1>
      <h2>Page not found :(</h2>
    </MdContainer>
  );
};

export default NotFound;
