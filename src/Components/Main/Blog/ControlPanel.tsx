import { ControlButton, PostControlPanel } from '../../../styles/Posts.styles';
import { SlDislike, SlLike } from 'react-icons/sl';

const ControlPanel = () => {
  return (
    <PostControlPanel>
      <ControlButton>
        <SlDislike />
      </ControlButton>
      <ControlButton>
        <SlLike />
      </ControlButton>
    </PostControlPanel>
  );
};

export default ControlPanel;
