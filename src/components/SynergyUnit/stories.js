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

const detailsBlademaster = {
  key: 'blademaster',
  name: 'Blademaster',
  description: 'Blademasters have a 35% chance to strike additional times each attack.',
  accentChampionImage: 'https://cdn.blitz.gg/blitz/centered/Fiora_Splash_Centered_0.jpg',
  bonuses: [
    {
      needed: 3,
      effect: '1 additional strike'
    },
    {
      needed: 6,
      effect: '2 additional strikes'
    },
    {
      needed: 9,
      effect: '4 additional strikes'
    }
  ]
};

storiesOf('SynergiesUnit', module)
  .add('Default', () => <SynergiesUnit details={{}} />)
  .add('2 Guardian', () => <SynergiesUnit count={2} details={detailsGuardian} />)
  .add('2 Blademaster', () => <SynergiesUnit count={2} details={detailsBlademaster} />)
  .add('3 Blademaster', () => <SynergiesUnit count={3} details={detailsBlademaster} />)
  .add('6 Blademaster', () => <SynergiesUnit count={6} details={detailsBlademaster} />)
  .add('9 Blademaster', () => <SynergiesUnit count={9} details={detailsBlademaster} />);
