import { useAppSelector } from '../../../app/hooks';
import {
  AuthorSpan,
  DescriptionSpan,
  PostAuthorContainer,
  PostContainer,
  PostContent,
  PostData,
  PostTextSpace,
} from '../../../styles/Posts.styles';
import { GiMailbox } from 'react-icons/gi';
import { MdDateRange } from 'react-icons/md';
import { BsGraphUpArrow } from 'react-icons/bs';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { marked } from 'marked';

marked.use({
  pedantic: false,
  gfm: true,
  breaks: false,
});

const Posts = () => {
  const posts = useAppSelector((state) => state.posts);

  const compileMarkdown = (text: string) => {
    if (text) {
      return { __html: marked(text) };
    }
  };

  return (
    <>
      {posts.map(
        ({
          id,
          creator,
          creatorEmail,
          date,
          title,
          description,
          postText,
          readingTime,
          postRating,
        }) => {
          return (
            <PostContainer key={id}>
              <PostTextSpace>
                <h1>{title}</h1>
                <DescriptionSpan>{description}</DescriptionSpan>
                <hr />
                <PostAuthorContainer>
                  <>
                    <AuthorSpan>
                      <GiMailbox />
                      By {creatorEmail}
                    </AuthorSpan>
                  </>
                  <PostData>
                    <AuthorSpan>
                      <MdDateRange />
                      {date}
                    </AuthorSpan>

                    <AuthorSpan>
                      <AiOutlineFieldTime />
                      {readingTime}
                    </AuthorSpan>
                  </PostData>
                  <>
                    <AuthorSpan>
                      <BsGraphUpArrow />
                      {postRating}
                    </AuthorSpan>
                  </>
                </PostAuthorContainer>
                <hr />
                <PostContent
                  dangerouslySetInnerHTML={compileMarkdown(postText)}
                />
              </PostTextSpace>
            </PostContainer>
          );
        }
      )}
    </>
  );
};

export default Posts;
