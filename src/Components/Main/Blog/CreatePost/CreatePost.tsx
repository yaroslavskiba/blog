import { InputContainer } from '../../../../styles/Auth.styles';
import { InputText, Label } from '../../../../styles/General.styles';
import { ContentContainer } from '../../../../styles/Main.styles';

const CreatePost = () => {
  return (
    <ContentContainer>
      <h1>Create Post:</h1>
      <InputContainer>
        <Label>Title</Label>
        <InputText type='text' />
      </InputContainer>
    </ContentContainer>
  );
};

export default CreatePost;
