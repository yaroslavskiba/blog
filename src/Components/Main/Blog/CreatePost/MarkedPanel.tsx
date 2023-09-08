import React from 'react';
import {
  MarkedButton,
  MarkedPanelButtons,
} from '../../../../styles/CreatePost.styles';
import { ImBold, ImItalic, ImListNumbered, ImList } from 'react-icons/im';
import { HiLink } from 'react-icons/hi';
import { GrBlockQuote } from 'react-icons/gr';
import { BsCodeSlash } from 'react-icons/bs';

interface MarkedInterface {
  setPostText: React.Dispatch<React.SetStateAction<string>>;
}

const MarkedPanel = ({ setPostText }: MarkedInterface) => {
  const bold = () => {
    setPostText((prev) => prev + '**/Text here/**');
  };

  const italic = () => {
    setPostText((prev) => prev + '*/Text here/*');
  };

  const title = () => {
    setPostText((prev) => prev + '# /Title here/\n<hr>\n/Text here/');
  };

  const subTitle = () => {
    setPostText((prev) => prev + '## /SubTitle here/\n/Text here/');
  };

  const subSubTitle = () => {
    setPostText((prev) => prev + '### /SubSubTitle here/\n/Text here/');
  };

  const numberList = () => {
    setPostText((prev) => prev + '\n1. ');
  };

  const list = () => {
    setPostText((prev) => prev + '\n- ');
  };

  const link = () => {
    setPostText((prev) => prev + '</Link here/>');
  };

  const blockQuote = () => {
    setPostText((prev) => prev + '\n> /Quote ends after double new lines/');
  };

  const code = () => {
    setPostText(
      (prev) => prev + '\n```/Programing lang here/\n/Code here/\n```'
    );
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
      <MarkedButton onClick={code}>
        <BsCodeSlash />
      </MarkedButton>
    </MarkedPanelButtons>
  );
};

export default MarkedPanel;
