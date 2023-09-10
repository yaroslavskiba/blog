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
  const userRef = doc(db, 'users', userId);
  const userDoc = await getDoc(userRef);

  if (postDoc.exists() && userDoc.exists()) {
    const post = postDoc.data();
    const likes = post.likes || [];
    const user = userDoc.data();

    let postRating = post.postRating;
    let userRating = user.rating;

    const increment = () => {
      postRating += 10;
      userRating += 10;
      return { postRating, userRating };
    };

    const decrement = () => {
      if (likes.includes(userId)) {
        postRating = 0;
        userRating -= 10;
        return { postRating, userRating };
      } else {
        userRating -= 10;
        postRating -= 10;
        return { postRating, userRating };
      }
    };

    if (likes.includes(userId)) {
      const { postRating, userRating } = await decrement();
      await updateDoc(postRef, {
        likes: arrayRemove(userId),
        postRating: postRating,
      });
      await updateDoc(userRef, {
        rating: userRating,
      });
    } else {
      const { postRating, userRating } = await increment();
      await updateDoc(postRef, {
        likes: arrayUnion(userId),
        postRating: postRating,
      });
      await updateDoc(userRef, {
        rating: userRating,
      });
    }
  }
};
