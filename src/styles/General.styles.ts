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

export const Label = styled.label<{ errorInput?: boolean }>`
  font-size: 22px;
  font-weight: 500;
  color: ${(props) =>
    props.errorInput
      ? props.theme.colors.danger
      : props.theme.colors.articleTextColor};
`;

export const InputText = styled.input<{ errorInput?: boolean }>`
  width: 100%;
  height: 75px;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  border: 3px solid
    ${(props) =>
      props.errorInput
        ? props.theme.colors.danger
        : props.theme.colors.articleBackgroundColor};
  color: ${(props) => props.theme.colors.articleTextColor};
  padding: 5px 10px;
  font-size: 22px;
`;

export const LinkButton = styled.button`
  color: ${(props) => props.theme.colors.linkColor};
  font-size: 20px;
  text-align: left;

  &:hover {
    text-decoration: underline;
  }
`;
