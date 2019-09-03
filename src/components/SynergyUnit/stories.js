import React from 'react';
import SynergiesUnit from '.';
import { storiesOf } from '@storybook/react';

const detailsGuardian = {
  key: 'guardian',
  name: 'Guardian',
  description: null,
  accentChampionImage: 'https://cdn.blitz.gg/blitz/centered/Braum_Splash_Centered_0.jpg',
  bonuses: [
    {
      needed: 2,
      effect:
        'At the start of combat, all adjacent allies receive +35 armor. Stacks any number of times.'
    }
  ]
};

const detailsDemon = {
  key: 'demon',
  name: 'Demon',
  description:
    'Demons basic attacks have a 40% chance to burn 20 mana from their target and return mana to the attacker.',
  accentChampionImage: 'https://cdn.blitz.gg/blitz/centered/Aatrox_Splash_Centered_0.jpg',
  bonuses: [
    {
      needed: 2,
      effect: 'Return 15 mana back to attacker'
    },
    {
      needed: 4,
      effect: 'Return 30 mana back to attacker'
    },
    {
      needed: 6,
      effect: 'Return 45 mana back to attacker'
    }
  ]
};

storiesOf('SynergiesUnit', module)
  .add('Default', () => <SynergiesUnit details={{}} />)
  .add('2 Guardian', () => <SynergiesUnit count={2} details={detailsGuardian} />)
  .add('1 Demon', () => <SynergiesUnit count={1} details={detailsDemon} />)
  .add('2 Demon', () => <SynergiesUnit count={2} details={detailsDemon} />)
  .add('3 Demon', () => <SynergiesUnit count={3} details={detailsDemon} />)
  .add('4 Demon', () => <SynergiesUnit count={4} details={detailsDemon} />)
  .add('5 Demon', () => <SynergiesUnit count={5} details={detailsDemon} />)
  .add('6 Demon', () => <SynergiesUnit count={6} details={detailsDemon} />)
  .add('7 Demon', () => <SynergiesUnit count={7} details={detailsDemon} />);
