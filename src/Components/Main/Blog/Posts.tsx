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
import { AiOutlineFieldTime, AiOutlineLink } from 'react-icons/ai';
import { marked } from 'marked';
import { HeaderLinkComponent } from '../../../styles/Main.styles';
import ControlPanel from './ControlPanel';

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

  const truncateText = (text: string) => {
    if (text.length > 350) {
      return text.slice(0, 1000) + '...';
    }
    return text;
  };

  const firstLetter = (title: string) => {
    return title[0].toUpperCase() + title.slice(1);
  };

  return (
    <>
      {posts.map(
        ({
          id,
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
                <HeaderLinkComponent to={`/posts/${id}`}>
                  <AiOutlineLink />
                  {firstLetter(title)}
                </HeaderLinkComponent>
                <DescriptionSpan>
                  {firstLetter(truncateText(description))}
                </DescriptionSpan>
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
                  dangerouslySetInnerHTML={compileMarkdown(
                    truncateText(postText)
                  )}
                />
                <hr />
                <ControlPanel />
              </PostTextSpace>
            </PostContainer>
          );
        }
      )}
    </>
  );
};

export default Posts;
