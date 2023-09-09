import { StyleSheetManager } from 'styled-components';
import { InputText, LinkButton } from '../../../styles/General.styles';
import {
  CommentAuthor,
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
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

const Comments = () => {
  const status = useAppSelector((state) => state.user.status);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [commentState, setCommentState] = useState('');
  const post = useAppSelector((state) =>
    state.posts.find((post) => post.id === id)
  );
  const comments = post?.comments;

  const handleComment = async () => {
    await createComment(commentState, id);
    dispatch(getPosts());
    setCommentState('');
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
            <CommentView key={index}>
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
          );
        })}
      </CommentsViewContainer>
    </CommentsContainer>
  );
};

export default Comments;
