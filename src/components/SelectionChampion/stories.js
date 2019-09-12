import React from 'react';
import SelectionChampion from '.';
import { storiesOf } from '@storybook/react';

storiesOf('SelectionChampion', module)
  .add('Camille', () => <SelectionChampion champion={camille} />)
  .add('Blitzcrank', () => <SelectionChampion champion={blitzcrank} />)
  .add('Kennen', () => <SelectionChampion champion={kennen} />)
  .add('Gnar', () => <SelectionChampion champion={gnar} />)
  .add('Kayle', () => <SelectionChampion champion={kayle} />);

const camille = {
  id: '164',
  key: 'Camille',
  name: 'Camille',
  origin: ['Hextech'],
  class: ['Blademaster'],
  cost: 1,
  ability: {
    name: 'The Hextech Ultimatum',
    description:
      "Camille singles out an enemy, dealing magic damage and rooting them for few seconds. Camille's allies in range will prioritize attacking that enemy.",
    type: 'Active',
    manaCost: 150,
    manaStart: 0,
    stats: [
      {
        type: 'Damage',
        value: '200 / 325 / 450'
      },
      {
        type: 'Root Duration',
        value: '4s / 5s / 6s'
      }
    ]
  },
  stats: {
    offense: {
      damage: 55,
      attackSpeed: 0.6,
      dps: 30,
      range: 1
    },
    defense: {
      health: 550,
      armor: 25,
      magicResist: 20
    }
  },
  items: ['spearofshojin', 'titanichydra', 'guardianangel']
};

const blitzcrank = {
  id: '53',
  key: 'Blitzcrank',
  name: 'Blitzcrank',
  origin: ['Robot'],
  class: ['Brawler'],
  cost: 2,
  ability: {
    name: 'Rocket Grab',
    description: 'Blitzcrank pulls the furthest enemy to him.',
    type: 'Active',
    manaCost: 125,
    manaStart: 0,
    stats: [
      {
        type: 'Damage',
        value: '100 / 350 / 800'
      },
      {
        type: 'Stun Duration',
        value: '2.5s'
      }
    ]
  },
  stats: {
    offense: {
      damage: 50,
      attackSpeed: 0.5,
      dps: 25,
      range: 1
    },
    defense: {
      health: 600,
      armor: 35,
      magicResist: 20
    }
  },
  items: ['thornmail', 'warmogsarmor', 'dragonsclaw']
};

const kennen = {
  id: '85',
  key: 'Kennen',
  name: 'Kennen',
  origin: ['Ninja', 'Yordle'],
  class: ['Elementalist'],
  cost: 3,
  ability: {
    name: 'Slicing Maelstrom',
    description:
      'Kennen summons a storm around him, dealing damage and stunning enemies inside of it.',
    type: 'Active',
    manaCost: 150,
    manaStart: 50,
    stats: [
      {
        type: 'Damage',
        value: '225 / 450 / 675'
      },
      {
        type: 'Stun Duration',
        value: '1.5s'
      }
    ]
  },
  stats: {
    offense: {
      damage: 65,
      attackSpeed: 0.65,
      dps: 36,
      range: 2
    },
    defense: {
      health: 550,
      armor: 20,
      magicResist: 20
    }
  },
  items: ['morellonomicon', 'guardianangel', 'hextechgunblade']
};

const gnar = {
  id: '150',
  key: 'Gnar',
  name: 'Gnar',
  origin: ['Wild', 'Yordle'],
  class: ['Shapeshifter'],
  cost: 4,
  ability: {
    name: 'GNAR!',
    description:
      'Gnar transforms and jumps behind the furthest enemy, damaging and shoving enemies backwards.',
    type: 'Active',
    manaCost: 100,
    manaStart: 0,
    stats: [
      {
        type: 'Damage',
        value: '200 / 300 / 400'
      },
      {
        type: 'CC Duration',
        value: '2s'
      },
      {
        type: 'Knockback Distance',
        value: '2 hexes'
      },
      {
        type: 'Transform Duration',
        value: '60s'
      },
      {
        type: 'Transform Bonus HP',
        value: '300 / 600 / 900'
      },
      {
        type: 'Transform Bonus Attack Damage',
        value: '50 / 100 / 150'
      }
    ]
  },
  stats: {
    offense: {
      damage: 50,
      attackSpeed: 0.7,
      dps: 31,
      range: 2
    },
    defense: {
      health: 750,
      armor: 30,
      magicResist: 20
    }
  },
  items: ['guardianangel', 'warmogsarmor', 'dragonsclaw']
};

const kayle = {
  id: '10',
  key: 'Kayle',
  name: 'Kayle',
  origin: ['Noble'],
  class: ['Knight'],
  cost: 5,
  ability: {
    name: 'Divine Judgement',
    description: 'Kayle shields an ally, making them immune to damage.',
    type: 'Active',
    manaCost: 125,
    manaStart: 0,
    stats: [
      {
        type: 'Shield Duration',
        value: '2s / 2.5s / 3s'
      },
      {
        type: 'Extra Targets',
        value: '0 / 1 / 2'
      }
    ]
  },
  stats: {
    offense: {
      damage: 60,
      attackSpeed: 1,
      dps: 66,
      range: 3
    },
    defense: {
      health: 750,
      armor: 40,
      magicResist: 20
    }
  },
  items: ['bladeoftheruinedking', 'guinsoosrageblade', 'spearofshojin']
};
