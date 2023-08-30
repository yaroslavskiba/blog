import { NfContainer, NfImg } from './NotFound.styles';

const NotFound = () => {
  return (
    <NfContainer>
      <NfImg src='../public/img/nf.svg' alt='not found' />
      <h1>404</h1>
      <h2>Page not found :(</h2>
    </NfContainer>
  );
};

export default NotFound;
