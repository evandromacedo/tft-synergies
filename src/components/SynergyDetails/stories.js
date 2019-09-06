import React from 'react';
import SynergyDetails from '.';
import { storiesOf } from '@storybook/react';

storiesOf('SynergyDetails', module).add('Default', () => (
  <SynergyDetails synergyIndex={1} details={demonDetailsMock} />
));

const demonDetailsMock = {
  key: 'demon',
  name: 'Demon',
  description:
    'Demons basic attacks have a 40% chance to burn 20 mana from their target and return mana to the attacker.',
  accentChampionImage: 'https://cdn.blitz.gg/blitz/centered/Aatrox_Splash_Centered_0.jpg',
  bonuses: [
    { needed: 2, effect: 'Return 15 mana back to attacker' },
    { needed: 4, effect: 'Return 30 mana back to attacker' },
    { needed: 6, effect: 'Return 45 mana back to attacker' }
  ]
};
