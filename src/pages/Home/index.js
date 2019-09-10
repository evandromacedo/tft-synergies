import React from 'react';
import * as S from './styled';
import {
  generateSynergiesMock,
  generateBonusesMock
} from '../../components/SynergiesBar/stories';
import CurrentLevel from '../../components/CurrentLevel';
import Button from '../../components/Button';
import SynergiesBar from '../../components/SynergiesBar';
import BoardChampion from '../../components/BoardChampion';

export default function Home() {
  return (
    <S.Layout>
      <S.Sidebar>
        <SynergiesBar
          synergies={generateSynergiesMock()}
          bonusesDetails={generateBonusesMock()}
        />
      </S.Sidebar>
      <S.MainWrapper>
        <S.BoardTop>
          <CurrentLevel />
          <Button>Clear</Button>
        </S.BoardTop>
        <S.FakeBoard>
          <BoardChampion />
          <BoardChampion />
          <BoardChampion />
          <BoardChampion />
        </S.FakeBoard>
        <h1>Champions and items</h1>
      </S.MainWrapper>
    </S.Layout>
  );
}
