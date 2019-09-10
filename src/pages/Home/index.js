import React from 'react';
import * as S from './styled';
import {
  generateSynergiesMock,
  generateBonusesMock
} from '../../components/SynergiesBar/stories';
import CurrentLevel from '../../components/CurrentLevel';
import Button from '../../components/Button';
import SynergiesBar from '../../components/SynergiesBar';
import Board from '../../components/Board';

const champions = [
  { name: 'Kassadin', cost: 1, synergies: ['void', 'sorcerer'] },
  { name: 'Ahri', cost: 2, synergies: ['wild', 'sorcerer'] },
  { name: 'Aatrox', cost: 3, synergies: ['demon', 'blademaster'] },
  { name: 'Akali', cost: 4, synergies: ['ninja', 'assassin'] },
  { name: 'Anivia', cost: 5, synergies: ['glacial', 'elementalist'] }
];

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
        <Board champions={champions} />
        <h1>Champions and items</h1>
      </S.MainWrapper>
    </S.Layout>
  );
}
