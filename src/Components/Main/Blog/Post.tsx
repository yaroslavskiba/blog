import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../app/hooks';
import { AiOutlineArrowLeft, AiOutlineFieldTime } from 'react-icons/ai';
import { BsGraphUpArrow } from 'react-icons/bs';
import { GiMailbox } from 'react-icons/gi';
import { MdDateRange } from 'react-icons/md';
import { LinkComponent } from '../../../styles/Main.styles';
import {
  PostContainer,
  PostTextSpace,
  DescriptionSpan,
  PostAuthorContainer,
  AuthorSpan,
  PostData,
  PostContent,
  PostViewContainer,
  AuthorLink,
} from '../../../styles/Posts.styles';
import { marked } from 'marked';
import Comments from './Comments';
import ControlPanel from './ControlPanel';

const Post = () => {
  const { id } = useParams();
  const posts = useAppSelector((state) => state.posts);

  const post = posts.find((post) => post.id === id);

  const firstLetter = (title: string | undefined) => {
    if (title) {
      return title[0].toUpperCase() + title.slice(1);
    }
  };

  const compileMarkdown = (text: string | undefined) => {
    if (text) {
      return { __html: marked(text) };
    }
  };

  return (
    <>
      <PostViewContainer>
        <PostContainer>
          <LinkComponent to='/posts'>
            <AiOutlineArrowLeft />
            Main
          </LinkComponent>
          <PostTextSpace>
            <h1>{firstLetter(post?.title)}</h1>
            <DescriptionSpan>{firstLetter(post?.description)}</DescriptionSpan>
            <hr />
            <PostAuthorContainer>
              <AuthorSpan>
                <GiMailbox />
                By
                <AuthorLink to={`/user/${post?.creator}`}>
                  {post?.creatorEmail}
                </AuthorLink>
              </AuthorSpan>
              <PostData>
                <AuthorSpan>
                  <MdDateRange />
                  {post?.date}
                </AuthorSpan>

                <AuthorSpan>
                  <AiOutlineFieldTime />
                  {post?.readingTime}
                </AuthorSpan>
              </PostData>
              <>
                <AuthorSpan>
                  <BsGraphUpArrow />
                  {post?.postRating}
                </AuthorSpan>
              </>
            </PostAuthorContainer>
            <hr />
            <PostContent
              dangerouslySetInnerHTML={compileMarkdown(post?.postText)}
            />
            <ControlPanel postId={post?.id} />
          </PostTextSpace>
        </PostContainer>
        <Comments />
      </PostViewContainer>
    </>
  );
};

export default Post;
