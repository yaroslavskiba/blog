import { useAppSelector } from '../../../app/hooks';
import { ControlButton, PostControlPanel } from '../../../styles/Posts.styles';
import { SlDislike, SlLike } from 'react-icons/sl';

const ControlPanel = () => {
  const status = useAppSelector((state) => state.user.status);

  return (
    <>
      {status === 'Author' && (
        <>
          <PostControlPanel>
            <ControlButton>
              <SlDislike />
            </ControlButton>
            <ControlButton>
              <SlLike />
            </ControlButton>
          </PostControlPanel>
        </>
      )}
    </>
  );
};

export default ControlPanel;
