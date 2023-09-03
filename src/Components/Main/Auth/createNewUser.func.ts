import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../App';

export const createNewUser = async (email: string, password: string) => {
  try {
    const userCreate = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCreate.user;
    console.log('Пользователь успешно создан:', user.uid);
  } catch (error) {
    console.error('Ошибка при создании пользователя:', error);
  }
};
