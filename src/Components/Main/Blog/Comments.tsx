import { StyleSheetManager } from 'styled-components';
import { InputText, LinkButton } from '../../../styles/General.styles';
import {
  CommentAuthor,
  DeleteButton,
  Group,
  CommentView,
  CommentsContainer,
  CommentsViewContainer,
} from '../../../styles/Posts.styles';
import { useState } from 'react';
import { AiOutlineSave } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { createComment } from './CreateComment.func';
import { getPosts } from '../../../app/slices/postsSlice';
import { BsPersonBoundingBox, BsCalendarDate } from 'react-icons/bs';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { deleteComment } from './Delete.func';
import { auth } from '../../../App';

const Comments = () => {
  const status = useAppSelector((state) => state.user.status);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [commentState, setCommentState] = useState('');
  const post = useAppSelector((state) =>
    state.posts.find((post) => post.id === id)
  );
  const comments = post?.comments;
  const user = auth.currentUser;

  const handleComment = async () => {
    await createComment(commentState, id);
    dispatch(getPosts());
    setCommentState('');
  };

  const handleDelete = (id: string | undefined, index: number) => {
    if (window.confirm('Are you sure?')) {
      if (id) {
        deleteComment(id, index);
      }
      dispatch(getPosts());
    }
  };

  return (
    <CommentsContainer>
      {status === 'Author' && (
        <>
          <h2>Create:</h2>
          <StyleSheetManager shouldForwardProp={(prop) => prop !== 'lightbg'}>
            <InputText
              lightbg='light'
              type='text'
              name='comment'
              value={commentState}
              onChange={(e) => setCommentState(e.target.value)}
              placeholder='Write your comment here'
            />
          </StyleSheetManager>
          <LinkButton onClick={handleComment}>
            <AiOutlineSave />
            Send
          </LinkButton>
          <hr />
        </>
      )}
      <h3>Comments:</h3>
      <CommentsViewContainer>
        {comments?.map((comment, index: number) => {
          return (
            <Group key={index}>
              <CommentView>
                <CommentAuthor>
                  <BsPersonBoundingBox />
                  {comment.creator}
                </CommentAuthor>
                <CommentAuthor>
                  <BsCalendarDate />
                  {comment.date}
                </CommentAuthor>
                {comment.comment}
              </CommentView>
              {user?.uid === comment?.creatorUid && (
                <DeleteButton onClick={() => handleDelete(id, index)}>
                  <RiDeleteBin5Line />
                </DeleteButton>
              )}
            </Group>
          );
        })}
      </CommentsViewContainer>
    </CommentsContainer>
  );
};

export default Comments;
