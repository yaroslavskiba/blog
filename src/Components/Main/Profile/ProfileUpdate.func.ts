import { doc, collection, updateDoc } from 'firebase/firestore';
import { auth, db } from '../../../App';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

interface AuthorData {
  name: string;
  description: string;
  birthDate: string;
  selectedOption: string;
  image: string;
}

export const changeToAuthorMode = async (data: AuthorData) => {
  const { name, description, birthDate, selectedOption, image } = data;

  const dateForSend = {
    name,
    description,
    birthDate,
    gender: selectedOption,
    status: 'Author',
    image,
  };

  const user = auth.currentUser;

  if (user) {
    const docRef = doc(collection(db, 'users'), user.uid);
    await updateDoc(docRef, dateForSend);
  }
};

export const uploadImageToFirebase = async (
  image: Blob | ArrayBuffer | null
) => {
  if (!image) {
    throw new Error('Image file is null or undefined');
  }

  const storage = getStorage();
  const storageRef = ref(storage, `usersImages/${image}`);

  await uploadBytes(storageRef, image);
  const imageURL = await getDownloadURL(storageRef);

  return imageURL;
};
