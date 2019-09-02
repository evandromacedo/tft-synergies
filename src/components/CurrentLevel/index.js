import React from 'react';
import * as S from './styled';
import Plus from '../../static/icons/Plus12px.svg';
import Minus from '../../static/icons/Minus12px.svg';

function CurrentLevel({ level = 9, onLevelUp, onLevelDown }) {
  return (
    <S.Wrapper>
      <S.Text>Current Level:</S.Text>
      <S.Button onClick={onLevelDown}>
        <img src={Minus} alt="Level Down" />
      </S.Button>
      <S.Text>{level}</S.Text>
      <S.Button onClick={onLevelUp}>
        <img src={Plus} alt="Level Up" />
      </S.Button>
    </S.Wrapper>
  );
}

export default CurrentLevel;
