import { doc, collection, setDoc } from 'firebase/firestore';
import { auth, db } from '../../../../App';

interface PostData {
  title: string;
  description: string;
  postText: string;
}

const calculateReadingTime = (text: string): number => {
  const wordCount = text.split(' ').length;
  const characterCount = text.length;
  const averageWordLength = characterCount / wordCount;
  const averageCharacterPerMinute = 250 * averageWordLength;
  const readingTime = Math.ceil(characterCount / averageCharacterPerMinute);

  return readingTime;
};

export const getDate = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate
    .getDate()
    .toString()
    .padStart(2, '0')}.${(currentDate.getMonth() + 1)
    .toString()
    .padStart(2, '0')}.${currentDate.getFullYear()}`;
  const formattedTime = `${currentDate
    .getHours()
    .toString()
    .padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}`;
  const formattedDateTime = `${formattedDate}, ${formattedTime}`;
  return formattedDateTime;
};

export const createPost = async (data: PostData) => {
  const { title, description, postText } = data;
  const user = auth.currentUser;
  const date = getDate();
  const readingTime = calculateReadingTime(postText) + 'min';

  const dateForSend = {
    creatorEmail: user?.email,
    date,
    title,
    description,
    postText,
    readingTime,
    postRating: 0,
    comments: [],
  };

  if (user) {
    const docRef = doc(collection(db, 'posts'));
    await setDoc(docRef, dateForSend);
  }
};
