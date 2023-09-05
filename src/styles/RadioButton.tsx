import styled from 'styled-components';

interface RadioInterface {
  label: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}

const RadioInput = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  margin-right: 10px;
`;

const RadioDot = styled.span<{ checked: boolean }>`
  position: relative;
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.colors.articleTextColor};
  margin-right: 8px;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.articleTextColor};
    opacity: ${(props) => (props.checked ? 1 : 0)};
    transition: opacity 0.2s ease-in-out;
  }
`;

const RadioLabel = styled.span`
  font-size: 22px;
  color: ${(props) => props.theme.colors.summaryTextColor};
`;

const Radio = ({ label, value, checked, onChange }: RadioInterface) => {
  return (
    <RadioInput onClick={() => onChange(value)}>
      <RadioDot checked={checked} />
      <RadioLabel>{label}</RadioLabel>
    </RadioInput>
  );
};

export default Radio;
