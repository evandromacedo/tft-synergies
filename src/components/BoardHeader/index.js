import React from 'react';
import { useDispatch } from '../Context';
import * as S from './styled';
import CurrentLevel from '../CurrentLevel';
import Button from '../Button';

export default function BoardHeader() {
  const { clearBoard } = useDispatch();

  return (
    <S.Wrapper>
      <CurrentLevel />
      <Button onClick={clearBoard}>Clear</Button>
    </S.Wrapper>
  );
}
