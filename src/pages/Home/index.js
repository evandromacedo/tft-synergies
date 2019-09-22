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
import Selection from '../../components/Selection';

const champions = [
  {
    name: 'Aatrox',
    key: 'Aatrox',
    cost: 1,
    synergies: ['blademaster', 'blademaster', 'blademaster']
  },
  {
    name: 'Ahri',
    key: 'Ahri',
    cost: 1,
    synergies: ['blademaster', 'blademaster', 'blademaster']
  },
  {
    name: 'Akali',
    key: 'Akali',
    cost: 1,
    synergies: ['blademaster', 'blademaster', 'blademaster']
  }
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
        <Selection />
      </S.MainWrapper>
    </S.Layout>
  );
}
