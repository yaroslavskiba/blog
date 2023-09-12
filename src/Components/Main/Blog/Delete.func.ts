import { deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../App';
import { CommentsInterface } from '../../../app/slices/postsSlice';

export const deleteComment = async (postId: string, index: number) => {
  const postRef = doc(db, 'posts', postId);
  const postDoc = await getDoc(postRef);

  const data = postDoc.data()?.comments;

  if (data) {
    const newData = data.filter(
      (_comment: CommentsInterface, i: number) => i !== index
    );
    await updateDoc(postRef, { comments: newData });
  }
};

export const deletePost = async (postId: string) => {
  const postRef = doc(db, 'posts', postId);
  const postDoc = await getDoc(postRef);

  if (postDoc.exists()) {
    await deleteDoc(postRef);
  }
};
