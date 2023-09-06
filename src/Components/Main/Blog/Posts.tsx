import { useAppSelector } from '../../../app/hooks';

const Posts = () => {
  const posts = useAppSelector((state) => state.posts);
  console.log(posts);
  return <></>;
};

export default Posts;
