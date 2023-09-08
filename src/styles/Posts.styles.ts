import { styled } from 'styled-components';

export const PostContainer = styled.div`
  word-wrap: break-word;
  width: 85%;
  height: max-content;
  background-color: ${(props) => props.theme.colors.articleBackgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0;
  margin: 0 auto;
`;

export const PostTextSpace = styled.div`
  max-width: 55%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DescriptionSpan = styled.span`
  color: ${(props) => props.theme.colors.summaryTextColor};
  font-size: 22px;
`;

export const AuthorSpan = styled.span`
  color: ${(props) => props.theme.colors.summaryTextColor};
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PostAuthorContainer = styled.div`
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const PostData = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
`;

export const PostContent = styled.p`
  font-size: 18px;

  hr {
    width: 75%;
    margin: 15px 0;
  }

  h1 {
    font-size: 22px;
    &:before {
      content: '';
      background: ${(props) => props.theme.colors.DelemiterColor};
      width: 100%;
      height: 3px;
    }
  }

  h2 {
    font-size: 20px;
    &:before {
      content: '';
      background: ${(props) => props.theme.colors.DelemiterColor};
      width: 100%;
      height: 3px;
    }
  }

  h3 {
    font-size: 18px;
    &:before {
      content: '';
      background: ${(props) => props.theme.colors.DelemiterColor};
      width: 100%;
      height: 3px;
    }
  }

  ul li {
    list-style: square;
  }

  blockquote {
    font-family: monospace;
    letter-spacing: 2px;
    margin: 15px;
    padding: 15px;
    border-radius: 10px;
    font-style: italic;
    color: ${(props) => props.theme.colors.summaryTextColor};
  }

  code {
    font-size: 90%;
    font-family: monospace;
    display: block;
    width: 100%;
    font-style: italic;
    letter-spacing: 2px;
    line-height: 35px;
    padding: 15px 0;
    white-space: pre-wrap;
    color: ${(props) => props.theme.colors.summaryTextColor};
  }
`;

export const PostViewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const CommentsContainer = styled.div`
  background-color: ${(props) => props.theme.colors.articleBackgroundColor};
  width: 90%;
  margin: 0 auto;
  padding: 15px 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const CommentsViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const CommentView = styled.div`
  padding: 5px 5px 5px 15px;
  border-left: 3px solid ${(props) => props.theme.colors.DelemiterColor};
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const CommentAuthor = styled.span`
  color: ${(props) => props.theme.colors.summaryTextColor};
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PostControlPanel = styled.div`
  display: flex;
  gap: 25px;
  height: max-content;
  align-items: center;
`;

export const ControlButton = styled.button`
  color: ${(props) => props.theme.colors.danger};
  font-size: 26px;
  display: flex;
  align-items: center;
  gap: 15px;
  width: max-content;
`;
