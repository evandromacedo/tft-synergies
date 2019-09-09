import React from 'react';
import * as S from './styled';

export default function Home() {
  return (
    <S.Layout>
      <h1>Sidebar</h1>
      <S.MainWrapper>
        <S.BoardTop>
          <h1>Current level</h1>
          <h1>Clear</h1>
        </S.BoardTop>
        <h1>Board</h1>
        <h1>Champions and items</h1>
      </S.MainWrapper>
    </S.Layout>
  );
}
