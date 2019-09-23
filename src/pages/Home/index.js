import React from 'react';
import * as S from './styled';
import CurrentLevel from '../../components/CurrentLevel';
import Button from '../../components/Button';
import SynergiesBar from '../../components/SynergiesBar';
import Board from '../../components/Board';
import Selection from '../../components/Selection';

export default function Home() {
  return (
    <S.Layout>
      <S.Sidebar>
        <SynergiesBar />
      </S.Sidebar>
      <S.MainWrapper>
        <S.BoardTop>
          <CurrentLevel />
          <Button>Clear</Button>
        </S.BoardTop>
        <Board />
        <Selection />
      </S.MainWrapper>
    </S.Layout>
  );
}
