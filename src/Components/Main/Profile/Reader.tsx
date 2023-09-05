import { auth } from '../../../App';
import { useAppSelector } from '../../../app/hooks';
import { FlexDisplayColumn } from '../../../styles/General.styles';
import {
  UserInfoContainer,
  UserHighlights,
  UserStatistics,
  ImgComponent,
  LinkComponent,
} from '../Main.styles';
import { TbExchange } from 'react-icons/tb';

const Reader = () => {
  const user = auth.currentUser;
  const { name, description, status, rating, birthDate, gender } =
    useAppSelector((state) => state.user);

  return (
    <FlexDisplayColumn>
      <ImgComponent src='/img/readerImg.svg' alt='base profile img' />
      <UserInfoContainer>
        <UserHighlights>uId:</UserHighlights>
        <UserStatistics>{user?.uid}</UserStatistics>
      </UserInfoContainer>
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
        <UserHighlights>Rating:</UserHighlights>
        <UserStatistics>{rating}</UserStatistics>
      </UserInfoContainer>
      <UserInfoContainer>
        <UserHighlights>Birth date:</UserHighlights>
        <UserStatistics>{birthDate}</UserStatistics>
      </UserInfoContainer>
      <UserInfoContainer>
        <UserHighlights>Gender:</UserHighlights>
        <UserStatistics>{gender}</UserStatistics>
      </UserInfoContainer>
      <LinkComponent to='/change_to_author'>
        <TbExchange />
        Change to author mode
      </LinkComponent>
    </FlexDisplayColumn>
  );
};

export default Reader;
