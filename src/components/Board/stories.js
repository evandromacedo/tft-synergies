import React from 'react';
import Board from '.';
import { storiesOf } from '@storybook/react';

const champions = [
  { name: 'Kassadin', cost: 1, synergies: ['void', 'sorcerer'] },
  { name: 'Ahri', cost: 2, synergies: ['wild', 'sorcerer'] },
  { name: 'Aatrox', cost: 3, synergies: ['demon', 'blademaster'] },
  { name: 'Akali', cost: 4, synergies: ['ninja', 'assassin'] },
  { name: 'Anivia', cost: 5, synergies: ['glacial', 'elementalist'] }
];

storiesOf('Board', module).add('Default', () => <Board champions={champions} />);
