import LogginedHeader from './LogginedHeader';
import UnlogginedHeader from './UnloginnedHeader';

const Header = () => {
  const user = '';
  return user ? <LogginedHeader /> : <UnlogginedHeader />;
};

export default Header;
