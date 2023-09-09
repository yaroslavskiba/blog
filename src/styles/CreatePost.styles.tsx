import { styled } from 'styled-components';

export const PostTextAreaContainer = styled.div`
  width: 100%;
  max-height: 1110px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const PostTextArea = styled.textarea<{
  post?: string;
}>`
  resize: none;
  max-width: 730px;
  min-width: 300px;
  width: 100%;
  min-height: ${(props) => (props.post === 'true' ? '360px' : '95px')};
  max-height: 900px;
  border: 3px solid ${(props) => props.theme.colors.summaryTextColor};
  background-color: ${(props) => props.theme.colors.articleBackgroundColor};
  font-size: 22px;
  padding: 15px 10px;
  color: ${(props) => props.theme.colors.articleTextColor};
`;

export const MarkedEditorContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MarkedPanelButtons = styled.div`
  padding: 0 15px;
  height: 55px;
  width: 100%;
  border: 3px solid ${(props) => props.theme.colors.summaryTextColor};
  border-bottom: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 25px;
`;

export const MarkedButton = styled.button`
  font-size: 22px;
  color: ${(props) => props.theme.colors.linkColor};
  font-weight: 700;
`;

export const CreatePostError = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  background-color: ${(props) => props.theme.colors.danger};
`;
