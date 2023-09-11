import { doc, updateDoc, arrayUnion, getDoc } from 'firebase/firestore';
import { db } from '../../../App';

export const toggleLike = async (postId: string, userId: string) => {
  const postRef = doc(db, 'posts', postId);
  const userRef = doc(db, 'users', userId);

  const [postDoc, userDoc] = await Promise.all([
    getDoc(postRef),
    getDoc(userRef),
  ]);

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
        likes.splice(likes.indexOf(userId), 1);
        if (likes.length === 0) {
          postRating = 0;
        } else {
          postRating -= 10;
        }
        userRating -= 10;
        return { postRating, userRating };
      } else {
        userRating -= 10;
        postRating -= 10;
        return { postRating, userRating };
      }
    };

    if (likes.includes(userId)) {
      const { postRating, userRating } = decrement();
      await Promise.all([
        updateDoc(postRef, {
          likes: likes,
          postRating: postRating,
        }),
        updateDoc(userRef, {
          rating: userRating,
        }),
      ]);
    } else {
      const { postRating, userRating } = increment();
      await Promise.all([
        updateDoc(postRef, {
          likes: arrayUnion(userId),
          postRating: postRating,
        }),
        updateDoc(userRef, {
          rating: userRating,
        }),
      ]);
    }
  }
};
