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

export const createPost = async (data: PostData) => {
  const { title, description, postText } = data;
  const user = auth.currentUser;
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}.${
    currentDate.getMonth() + 1
  }.${currentDate.getFullYear()}`;
  const readingTime = calculateReadingTime(postText) + 'min';

  const dateForSend = {
    creator: user?.uid,
    creatorEmail: user?.email,
    date: formattedDate,
    title,
    description,
    postText,
    readingTime,
    postRating: 0,
  };

  if (user) {
    const docRef = doc(collection(db, 'posts'));
    await setDoc(docRef, dateForSend);
  }
};
