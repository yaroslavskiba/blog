import { styled } from 'styled-components';

export const MdImg = styled.img`
  margin: 0 auto 15px auto;
  width: 170px;
  height: 170px;
`;

export const MdContainer = styled.div`
  height: 100%;
  width: inherit;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

export const Label = styled.label<{ errorinput?: string }>`
  font-size: 22px;
  font-weight: 500;
  padding-left: 25px;
  color: ${(props) =>
    props.errorinput === 'true'
      ? props.theme.colors.danger
      : props.theme.colors.articleTextColor};
`;

export const InputText = styled.input<{
  errorinput?: string;
  lightbg?: string;
}>`
  width: 100%;
  height: 75px;
  background-color: ${(props) =>
    props.lightbg === 'light'
      ? props.theme.colors.articleBackgroundColor
      : props.theme.colors.backgroundColor};
  border: 3px solid
    ${(props) =>
      props.errorinput === 'true'
        ? props.theme.colors.danger
        : props.theme.colors.summaryTextColor};
  color: ${(props) => props.theme.colors.articleTextColor};
  padding: 5px 10px;
  font-size: 22px;
`;

export const TextArea = styled.textarea`
  resize: none;
  max-width: 450px;
  min-width: 300px;
  width: 100%;
  height: 250px;
  border: 3px solid ${(props) => props.theme.colors.summaryTextColor};
  background-color: ${(props) => props.theme.colors.articleBackgroundColor};
  font-size: 22px;
  padding: 5px 10px;
  color: ${(props) => props.theme.colors.articleTextColor};
`;

export const LinkButton = styled.button`
  color: ${(props) => props.theme.colors.linkColor};
  font-size: 20px;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

export const WrapperContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const FlexDisplayColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
`;
