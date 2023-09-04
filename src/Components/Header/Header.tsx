/* eslint-disable react-hooks/exhaustive-deps */
import LogginedHeader from './LogginedHeader';
import UnlogginedHeader from './UnloginnedHeader';

const Header = () => {
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(checkAuthUser());
  // }, []);

  // const user = useAppSelector((state) => state.authUser);
  const user = '';
  return user ? <LogginedHeader /> : <UnlogginedHeader />;
};

export default Header;
