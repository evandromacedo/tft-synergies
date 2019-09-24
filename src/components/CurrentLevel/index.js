import React from 'react';
import * as S from './styled';
import Plus from '../../static/icons/Plus12px.svg';
import Minus from '../../static/icons/Minus12px.svg';
import { useStore, useDispatch } from '../Context';

export default function CurrentLevel() {
  const { level } = useStore();
  const { levelUp, levelDown } = useDispatch();

  return (
    <S.Wrapper>
      <S.Text>Current Level:</S.Text>
      <S.Button onClick={levelDown}>
        <img src={Minus} alt="Level Down" />
      </S.Button>
      <S.Text>{level}</S.Text>
      <S.Button onClick={levelUp}>
        <img src={Plus} alt="Level Up" />
      </S.Button>
    </S.Wrapper>
  );
}
