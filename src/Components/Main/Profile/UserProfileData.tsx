import { auth } from '../../../App';
import { useAppSelector } from '../../../app/hooks';
import { FlexDisplayColumn } from '../../../styles/General.styles';
import {
  UserInfoContainer,
  UserHighlights,
  UserStatistics,
  ImgComponent,
} from '../../../styles/Main.styles';

const UserProfileData = () => {
  const user = auth.currentUser;
  const { name, description, status, birthDate, gender, image } =
    useAppSelector((state) => state.user);

  return (
    <FlexDisplayColumn>
      <ImgComponent
        src={
          image
            ? image
            : 'https://firebasestorage.googleapis.com/v0/b/blog-app-dbdf8.appspot.com/o/usersImages%2FreaderImg.svg?alt=media&token=1aabe9d2-615f-413c-9395-d920cf23cf25'
        }
        alt='base profile img'
      />

      <UserInfoContainer>
        <UserHighlights>Email:</UserHighlights>
        <UserStatistics>{user?.email}</UserStatistics>
      </UserInfoContainer>
      <UserInfoContainer>
        <UserHighlights>Name:</UserHighlights>
        <UserStatistics>{name}</UserStatistics>
      </UserInfoContainer>
      <UserInfoContainer>
        <UserHighlights>Description:</UserHighlights>
        <UserStatistics>{description}</UserStatistics>
      </UserInfoContainer>
      <UserInfoContainer>
        <UserHighlights>Status:</UserHighlights>
        <UserStatistics>{status}</UserStatistics>
      </UserInfoContainer>
      <UserInfoContainer>
        <UserHighlights>Birth date:</UserHighlights>
        <UserStatistics>{birthDate}</UserStatistics>
      </UserInfoContainer>
      <UserInfoContainer>
        <UserHighlights>Gender:</UserHighlights>
        <UserStatistics>{gender}</UserStatistics>
      </UserInfoContainer>
    </FlexDisplayColumn>
  );
};

export default UserProfileData;
