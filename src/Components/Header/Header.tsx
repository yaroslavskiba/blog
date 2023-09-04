import { auth } from '../../App';
import LogginedHeader from './LogginedHeader';
import UnlogginedHeader from './UnloginnedHeader';
import { useAuthState } from 'react-firebase-hooks/auth';

const Header = () => {
  const [user] = useAuthState(auth);

  return user ? <LogginedHeader /> : <UnlogginedHeader />;
};

export default Header;
