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
  const bold = () => {
    setPostText((prev) => prev + '**');
  };

  const italic = () => {
    setPostText((prev) => prev + '*');
  };

  const title = () => {
    setPostText((prev) => prev + '# ');
  };

  const subTitle = () => {
    setPostText((prev) => prev + '## ');
  };

  const subSubTitle = () => {
    setPostText((prev) => prev + '### ');
  };

  const numberList = () => {
    setPostText((prev) => prev + '1. ');
  };

  const list = () => {
    setPostText((prev) => prev + '- ');
  };

  const link = () => {
    setPostText((prev) => prev + '<>');
  };

  const blockQuote = () => {
    setPostText((prev) => prev + '> ');
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
