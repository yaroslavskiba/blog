import { collection, doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { auth, db } from '../../../App';
import { getDate } from './CreatePost/createPost.fucn';

export const createComment = async (
  comment: string,
  id: string | undefined
) => {
  const user = auth.currentUser;

  const dateForSend = {
    comment,
    creator: user?.email,
    creatorUid: user?.uid,
    date: getDate(),
  };

  if (user) {
    const postRef = doc(collection(db, 'posts'), id);
    await updateDoc(postRef, {
      comments: arrayUnion(dateForSend),
    });
  } else {
    throw new Error('Error create comment');
  }
};
