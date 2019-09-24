import React from 'react';
import * as S from './styled';
import SynergiesBar from '../../components/SynergiesBar';
import BoardHeader from '../../components/BoardHeader';
import Board from '../../components/Board';
import Selection from '../../components/Selection';

export default function Home() {
  return (
    <S.Layout>
      <S.Sidebar>
        <SynergiesBar />
      </S.Sidebar>
      <S.MainWrapper>
        <BoardHeader />
        <Board />
        <Selection />
      </S.MainWrapper>
    </S.Layout>
  );
}
