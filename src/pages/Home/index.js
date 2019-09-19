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
  },
  {
    name: 'Anivia',
    key: 'Anivia',
    cost: 1,
    synergies: ['blademaster', 'blademaster', 'blademaster']
  },
  {
    name: 'Ashe',
    key: 'Ashe',
    cost: 1,
    synergies: ['blademaster', 'blademaster', 'blademaster']
  },
  {
    name: 'AurelionSol',
    key: 'AurelionSol',
    cost: 1,
    synergies: ['blademaster', 'blademaster']
  },
  {
    name: 'Blitzcrank',
    key: 'Blitzcrank',
    cost: 1,
    synergies: ['blademaster', 'blademaster']
  },
  { name: 'Brand', key: 'Brand', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Braum', key: 'Braum', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Camille', key: 'Camille', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Chogath', key: 'Chogath', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Darius', key: 'Darius', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Draven', key: 'Draven', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Elise', key: 'Elise', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Evelynn', key: 'Evelynn', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Fiora', key: 'Fiora', cost: 1, synergies: ['blademaster', 'blademaster'] },
  {
    name: 'Gangplank',
    key: 'Gangplank',
    cost: 1,
    synergies: ['blademaster', 'blademaster']
  },
  { name: 'Garen', key: 'Garen', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Gnar', key: 'Gnar', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Graves', key: 'Graves', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Jayce', key: 'Jayce', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Jinx', key: 'Jinx', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Karthus', key: 'Karthus', cost: 1, synergies: ['blademaster', 'blademaster'] },
  {
    name: 'Kassadin',
    key: 'Kassadin',
    cost: 1,
    synergies: ['blademaster', 'blademaster']
  },
  {
    name: 'Katarina',
    key: 'Katarina',
    cost: 1,
    synergies: ['blademaster', 'blademaster']
  },
  { name: 'Kayle', key: 'Kayle', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Kennen', key: 'Kennen', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Khazix', key: 'Khazix', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Kindred', key: 'Kindred', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Leona', key: 'Leona', cost: 1, synergies: ['blademaster', 'blademaster'] },
  {
    name: 'Lissandra',
    key: 'Lissandra',
    cost: 1,
    synergies: ['blademaster', 'blademaster']
  },
  { name: 'Lucian', key: 'Lucian', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Lulu', key: 'Lulu', cost: 1, synergies: ['blademaster', 'blademaster'] },
  {
    name: 'MissFortune',
    key: 'MissFortune',
    cost: 1,
    synergies: ['blademaster', 'blademaster']
  },
  {
    name: 'Mordekaiser',
    key: 'Mordekaiser',
    cost: 1,
    synergies: ['blademaster', 'blademaster']
  },
  { name: 'Morgana', key: 'Morgana', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Nidalee', key: 'Nidalee', cost: 1, synergies: ['blademaster', 'blademaster'] },
  {
    name: 'Pantheon',
    key: 'Pantheon',
    cost: 1,
    synergies: ['blademaster', 'blademaster']
  },
  { name: 'Poppy', key: 'Poppy', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Pyke', key: 'Pyke', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'RekSai', key: 'RekSai', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Rengar', key: 'Rengar', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Sejuani', key: 'Sejuani', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Shen', key: 'Shen', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Shyvana', key: 'Shyvana', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Swain', key: 'Swain', cost: 1, synergies: ['blademaster', 'blademaster'] },
  {
    name: 'Tristana',
    key: 'Tristana',
    cost: 1,
    synergies: ['blademaster', 'blademaster']
  },
  {
    name: 'TwistedFate',
    key: 'TwistedFate',
    cost: 1,
    synergies: ['blademaster', 'blademaster']
  },
  { name: 'Varus', key: 'Varus', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Vayne', key: 'Vayne', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Veigar', key: 'Veigar', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Vi', key: 'Vi', cost: 1, synergies: ['blademaster', 'blademaster'] },
  {
    name: 'Volibear',
    key: 'Volibear',
    cost: 1,
    synergies: ['blademaster', 'blademaster']
  },
  { name: 'Warwick', key: 'Warwick', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Yasuo', key: 'Yasuo', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Zed', key: 'Zed', cost: 1, synergies: ['blademaster', 'blademaster'] }
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
