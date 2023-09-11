import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  ControlButton,
  LikesSpan,
  PostControlPanel,
} from '../../../styles/Posts.styles';
import { auth } from '../../../App';
import { updateLikes } from '../../../app/slices/postsSlice';
import { toggleLike } from './Posts.func';
import { AiOutlineHeart } from 'react-icons/ai';

interface PostIdPropsInterface {
  postId: string | undefined;
}

const ControlPanel = ({ postId }: PostIdPropsInterface) => {
  const status = useAppSelector((state) => state.user.status);
  const post = useAppSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );

  const dispatch = useAppDispatch();
  const user = auth.currentUser;

  const handleClick = async () => {
    if (post && post.likes && user?.uid) {
      if (postId && user?.uid) {
        await toggleLike(postId, user.uid);
        dispatch(updateLikes(postId));
      }
    }
  };

  return (
    <>
      {status === 'Author' && (
        <PostControlPanel>
          <ControlButton onClick={handleClick}>
            <AiOutlineHeart />
          </ControlButton>
          <LikesSpan>{post?.likes.length}</LikesSpan>
        </PostControlPanel>
      )}
    </>
  );
};

export default ControlPanel;
