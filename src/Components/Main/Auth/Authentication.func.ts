import { signInWithEmailAndPassword } from 'firebase/auth';
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
  } catch (error) {
    console.error('Ошибка при авторизации пользователя:', error);
  }
};
