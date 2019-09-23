import React from 'react';
import BoardChampion from './index.js';
import { storiesOf } from '@storybook/react';

storiesOf('BoardChampion', module)
  .add('Kassadin', () => (
    <BoardChampion
      champion={{ name: 'Kassadin', cost: 1, synergies: ['void', 'sorcerer'] }}
      background={
        'http://raw.communitydragon.org/latest/game/assets/ux/tft/championsplashes/tft_kassadin.png'
      }
    />
  ))
  .add('Ahri', () => (
    <BoardChampion
      champion={{ name: 'Ahri', cost: 2, synergies: ['wild', 'sorcerer'] }}
      background={
        'http://raw.communitydragon.org/latest/game/assets/ux/tft/championsplashes/tft_ahri.png'
      }
    />
  ))
  .add('Aatrox', () => (
    <BoardChampion
      champion={{ name: 'Aatrox', cost: 3, synergies: ['demon', 'blademaster'] }}
      background={
        'http://raw.communitydragon.org/latest/game/assets/ux/tft/championsplashes/tft_ahri.png'
      }
    />
  ))
  .add('Akali', () => (
    <BoardChampion
      champion={{ name: 'Akali', cost: 4, synergies: ['ninja', 'assassin'] }}
      background={
        'http://raw.communitydragon.org/latest/game/assets/ux/tft/championsplashes/tft_akali.png'
      }
    />
  ))
  .add('Anivia', () => (
    <BoardChampion
      champion={{ name: 'Anivia', cost: 5, synergies: ['glacial', 'elementalist'] }}
      background={
        'http://raw.communitydragon.org/latest/game/assets/ux/tft/championsplashes/tft_anivia.png'
      }
    />
  ));
