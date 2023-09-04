import { auth } from '../../../App';
import { FlexDisplayColumn } from '../../../styles/General.styles';
import {
  UserInfoContainer,
  UserHighlights,
  UserStatistics,
} from '../Main.styles';

const Reader = () => {
  const user = auth.currentUser;

  return (
    <FlexDisplayColumn>
      <UserInfoContainer>
        <UserHighlights>uId:</UserHighlights>
        <UserStatistics>{user?.uid}</UserStatistics>
      </UserInfoContainer>

      <UserInfoContainer>
        <UserHighlights>Email:</UserHighlights>
        <UserStatistics>{user?.email}</UserStatistics>
      </UserInfoContainer>
    </FlexDisplayColumn>
  );
};

export default Reader;
