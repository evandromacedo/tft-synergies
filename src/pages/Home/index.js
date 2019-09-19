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
  { name: 'Aatrox', cost: 1, synergies: ['blademaster', 'blademaster', 'blademaster'] },
  { name: 'Ahri', cost: 1, synergies: ['blademaster', 'blademaster', 'blademaster'] },
  { name: 'Akali', cost: 1, synergies: ['blademaster', 'blademaster', 'blademaster'] },
  { name: 'Anivia', cost: 1, synergies: ['blademaster', 'blademaster', 'blademaster'] },
  { name: 'Ashe', cost: 1, synergies: ['blademaster', 'blademaster', 'blademaster'] },
  { name: 'AurelionSol', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Blitzcrank', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Brand', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Braum', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Camille', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Chogath', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Darius', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Draven', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Elise', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Evelynn', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Fiora', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Gangplank', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Garen', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Gnar', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Graves', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Jayce', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Jinx', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Karthus', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Kassadin', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Katarina', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Kayle', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Kennen', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Khazix', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Kindred', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Leona', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Lissandra', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Lucian', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Lulu', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'MissFortune', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Mordekaiser', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Morgana', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Nidalee', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Pantheon', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Poppy', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Pyke', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'RekSai', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Rengar', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Sejuani', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Shen', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Shyvana', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Swain', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Tristana', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'TwistedFate', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Varus', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Vayne', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Veigar', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Vi', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Volibear', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Warwick', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Yasuo', cost: 1, synergies: ['blademaster', 'blademaster'] },
  { name: 'Zed', cost: 1, synergies: ['blademaster', 'blademaster'] }
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
