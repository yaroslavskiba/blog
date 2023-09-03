import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../../App';

export const loginUser = async (email: string, password: string) => {
  try {
    const userAuthentication = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userAuthentication.user;
    console.log('Пользователь успешно авторизован:', user.uid);
    return true;
  } catch (error) {
    console.error('Ошибка при авторизации пользователя:', error);
    return false;
  }
};

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
