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
          <BoardChampion
            champion={{ name: 'Kassadin', cost: 1, synergies: ['void', 'sorcerer'] }}
            background={
              'http://raw.communitydragon.org/latest/game/assets/ux/tft/championsplashes/tft_kassadin.png'
            }
          />
          <BoardChampion
            champion={{ name: 'Ahri', cost: 2, synergies: ['wild', 'sorcerer'] }}
            background={
              'http://raw.communitydragon.org/latest/game/assets/ux/tft/championsplashes/tft_ahri.png'
            }
          />
          <BoardChampion
            champion={{ name: 'Aatrox', cost: 3, synergies: ['demon', 'blademaster'] }}
            background={
              'http://raw.communitydragon.org/latest/game/assets/ux/tft/championsplashes/tft_aatrox.png'
            }
          />
          <BoardChampion
            champion={{ name: 'Akali', cost: 4, synergies: ['ninja', 'assassin'] }}
            background={
              'http://raw.communitydragon.org/latest/game/assets/ux/tft/championsplashes/tft_akali.png'
            }
          />
          <BoardChampion
            champion={{ name: 'Anivia', cost: 5, synergies: ['glacial', 'elementalist'] }}
            background={
              'http://raw.communitydragon.org/latest/game/assets/ux/tft/championsplashes/tft_anivia.png'
            }
          />
        </S.FakeBoard>
        <h1>Champions and items</h1>
      </S.MainWrapper>
    </S.Layout>
  );
}
