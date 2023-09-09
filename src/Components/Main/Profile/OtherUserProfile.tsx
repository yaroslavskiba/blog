import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../../App';
import { doc, collection, getDoc, DocumentData } from 'firebase/firestore';
import { FlexDisplayColumn } from '../../../styles/General.styles';
import {
  ImgComponent,
  UserInfoContainer,
  UserHighlights,
  UserStatistics,
  ContentContainer,
  LinkComponent,
} from '../../../styles/Main.styles';
import { AiOutlineArrowLeft } from 'react-icons/ai';

interface OtherUserInterface {
  rating: number;
  gender: string;
  name: string;
  description: string;
  birthDate: string;
  image: string;
  status: string;
}

const OtherUserProfile = () => {
  const { uid } = useParams();
  const [user, setUser] = useState<OtherUserInterface>({
    name: '',
    rating: 100,
    gender: '',
    description: '',
    birthDate: '',
    image: '',
    status: '',
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userRef = doc(collection(db, 'users'), uid);
        const snapshot = await getDoc(userRef);

        if (snapshot.exists()) {
          const userData = snapshot.data() as DocumentData;
          const formattedUser: OtherUserInterface = {
            rating: userData.rating,
            gender: userData.gender,
            name: userData.name,
            description: userData.description,
            birthDate: userData.birthDate,
            image: userData.image,
            status: userData.status,
          };
          setUser(formattedUser);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, [uid]);

  return (
    <ContentContainer>
      <LinkComponent to='/posts'>
        <AiOutlineArrowLeft />
        Main
      </LinkComponent>
      <FlexDisplayColumn>
        <ImgComponent src={user.image} alt='profile img' />
        <UserInfoContainer>
          <UserHighlights>Name:</UserHighlights>
          <UserStatistics>{user.name}</UserStatistics>
        </UserInfoContainer>
        <UserInfoContainer>
          <UserHighlights>Description:</UserHighlights>
          <UserStatistics>{user.description}</UserStatistics>
        </UserInfoContainer>
        <UserInfoContainer>
          <UserHighlights>Status:</UserHighlights>
          <UserStatistics>{user.status}</UserStatistics>
        </UserInfoContainer>
        <UserInfoContainer>
          <UserHighlights>Rating:</UserHighlights>
          <UserStatistics>{user.rating}</UserStatistics>
        </UserInfoContainer>
        <UserInfoContainer>
          <UserHighlights>Birth date:</UserHighlights>
          <UserStatistics>{user.birthDate}</UserStatistics>
        </UserInfoContainer>
        <UserInfoContainer>
          <UserHighlights>Gender:</UserHighlights>
          <UserStatistics>{user.gender}</UserStatistics>
        </UserInfoContainer>
      </FlexDisplayColumn>
    </ContentContainer>
  );
};

export default OtherUserProfile;
