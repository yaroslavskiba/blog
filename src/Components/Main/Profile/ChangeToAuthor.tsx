import { useEffect, useState } from 'react';
import {
  Label,
  InputText,
  TextArea,
  Flex,
  LinkButton,
  InputContainer,
} from '../../../styles/General.styles';
import Radio from '../../../styles/RadioButton';
import { AreaContainer, ContentContainer } from '../../../styles/Main.styles';
import { StyleSheetManager } from 'styled-components';
import {
  changeToAuthorMode,
  uploadImageToFirebase,
} from './ProfileUpdate.func';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../App';
import { useAppDispatch } from '../../../app/hooks';
import { fetchUserData } from '../../../app/slices/userSlice';

interface FormDataInterface {
  name: string;
  description: string;
  birthDate: string;
  selectedOption: string;
  image: null | File;
}

const ChangeToAuthor = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormDataInterface>({
    name: '',
    description: '',
    birthDate: '',
    selectedOption: 'Male',
    image: null,
  });
  console.log(formData);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      navigate('/');
    }
  });

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOptionChange = (value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      selectedOption: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setFormData((prevState) => ({
      ...prevState,
      image: file || null,
    }));
  };

  const handleSubmit = async () => {
    try {
      const imageURL = await uploadImageToFirebase(formData.image);

      const updatedFormData = {
        ...formData,
        image: imageURL,
      };
      await changeToAuthorMode(updatedFormData);

      setFormData({
        name: '',
        description: '',
        birthDate: '',
        selectedOption: 'Male',
        image: null,
      });

      dispatch(fetchUserData());
      navigate('/profile');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContentContainer>
      <h1>Change to author mode</h1>
      <h2>Please tell a bit more about yourself</h2>

      <InputContainer>
        <Label htmlFor='image'>Image: </Label>
        <input type='file' name='image' onChange={handleImageChange} />
      </InputContainer>

      <InputContainer>
        <Label htmlFor='name'>Name: </Label>
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'lightbg'}>
          <InputText
            lightbg='light'
            type='text'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
          />
        </StyleSheetManager>
      </InputContainer>

      <AreaContainer>
        <Label htmlFor='description'>Description: </Label>
        <TextArea
          name='description'
          value={formData.description}
          onChange={handleInputChange}
          defaultValue='Tell something about yourself'
        />
      </AreaContainer>

      <InputContainer>
        <Label htmlFor='birthDate'>Birth Date: </Label>
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'lightbg'}>
          <InputText
            lightbg='light'
            type='date'
            name='birthDate'
            value={formData.birthDate}
            onChange={handleInputChange}
          />
        </StyleSheetManager>
      </InputContainer>

      <InputContainer>
        <Label htmlFor='gender'>Gender: </Label>
        <Flex>
          <Radio
            label='Male'
            value='Male'
            checked={formData.selectedOption === 'Male'}
            onChange={() => handleOptionChange('Male')}
          />
          <Radio
            label='Female'
            value='Female'
            checked={formData.selectedOption === 'Female'}
            onChange={() => handleOptionChange('Female')}
          />
        </Flex>
      </InputContainer>

      <LinkButton onClick={handleSubmit}>Save</LinkButton>
    </ContentContainer>
  );
};

export default ChangeToAuthor;
