import React from 'react';
import {
  MarkedButton,
  MarkedPanelButtons,
} from '../../../../styles/CreatePost.styles';
import { ImBold, ImItalic, ImListNumbered, ImList } from 'react-icons/im';
import { HiLink } from 'react-icons/hi';
import { GrBlockQuote } from 'react-icons/gr';

interface MarkedInterface {
  setPostText: React.Dispatch<React.SetStateAction<string>>;
}

const MarkedPanel = ({ setPostText }: MarkedInterface) => {
  const insertTextAtCursorPosition = (text: string) => {
    setPostText((prevText) => {
      const input = prevText;
      const startPos = input.length;
      const endPos = input.length;

      const textBeforeCursor = input.slice(0, startPos);
      const textAfterCursor = input.slice(endPos);
      return textBeforeCursor + text + textAfterCursor;
    });
  };

  const bold = () => {
    insertTextAtCursorPosition('**');
  };

  const italic = () => {
    insertTextAtCursorPosition('*');
  };

  const title = () => {
    insertTextAtCursorPosition('# ');
  };

  const subTitle = () => {
    insertTextAtCursorPosition('## ');
  };

  const subSubTitle = () => {
    insertTextAtCursorPosition('### ');
  };

  const numberList = () => {
    insertTextAtCursorPosition('1. ');
  };

  const list = () => {
    insertTextAtCursorPosition('- ');
  };

  const link = () => {
    insertTextAtCursorPosition('<>');
  };

  const blockQuote = () => {
    insertTextAtCursorPosition('> ');
  };

  return (
    <MarkedPanelButtons>
      <MarkedButton onClick={bold}>
        <ImBold />
      </MarkedButton>
      <MarkedButton onClick={italic}>
        <ImItalic />
      </MarkedButton>
      <MarkedButton onClick={title}>h1</MarkedButton>
      <MarkedButton onClick={subTitle}>h2</MarkedButton>
      <MarkedButton onClick={subSubTitle}>h3</MarkedButton>
      <MarkedButton onClick={numberList}>
        <ImListNumbered />
      </MarkedButton>
      <MarkedButton onClick={list}>
        <ImList />
      </MarkedButton>
      <MarkedButton onClick={link}>
        <HiLink />
      </MarkedButton>
      <MarkedButton onClick={blockQuote}>
        <GrBlockQuote />
      </MarkedButton>
    </MarkedPanelButtons>
  );
};

export default MarkedPanel;
