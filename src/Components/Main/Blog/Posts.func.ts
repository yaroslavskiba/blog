import {
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  getDoc,
} from 'firebase/firestore';
import { db } from '../../../App';

export const toggleLike = async (postId: string, userId: string) => {
  const postRef = doc(db, 'posts', postId);
  const postDoc = await getDoc(postRef);

  if (postDoc.exists()) {
    const post = postDoc.data();
    const likes = post.likes || [];

    if (likes.includes(userId)) {
      await updateDoc(postRef, {
        likes: arrayRemove(userId),
      });
    } else {
      await updateDoc(postRef, {
        likes: arrayUnion(userId),
      });
    }
  }
};
