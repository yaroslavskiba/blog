import { useState, useRef, ChangeEvent } from 'react';
import { StyleSheetManager } from 'styled-components';
import {
  InputContainer,
  InputText,
  Label,
} from '../../../../styles/General.styles';
import { ContentContainer } from '../../../../styles/Main.styles';
import {
  MarkedEditorContainer,
  PostTextArea,
  PostTextAreaContainer,
} from '../../../../styles/CreatePost.styles';
import MarkedPanel from './MarkedPanel';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [postText, setPostText] = useState('');

  console.log(title, description, postText);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
    setPostText(e.target.value);
  };

  return (
    <ContentContainer>
      <h1>Create Post:</h1>
      <InputContainer>
        <Label>Title</Label>
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'lightbg'}>
          <InputText
            lightbg='light'
            type='text'
            name='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </StyleSheetManager>
      </InputContainer>

      <PostTextAreaContainer>
        <Label>Post Description:</Label>
        <PostTextArea
          name='description'
          value={description}
          ref={textareaRef}
          onChange={(e) => setDescription(e.target.value)}
        />
      </PostTextAreaContainer>

      <PostTextAreaContainer>
        <Label>Post Text:</Label>
        <MarkedEditorContainer>
          <MarkedPanel setPostText={setPostText} />
          <StyleSheetManager shouldForwardProp={(prop) => prop !== 'post'}>
            <PostTextArea
              post='true'
              name='post'
              value={postText}
              ref={textareaRef}
              onChange={(e) => {
                setPostText(e.target.value);
                handleTextareaChange(e);
              }}
            />
          </StyleSheetManager>
        </MarkedEditorContainer>
      </PostTextAreaContainer>
    </ContentContainer>
  );
};

export default CreatePost;
