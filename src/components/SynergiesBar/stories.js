import React from 'react';
import SynergiesBar from '.';
import { storiesOf } from '@storybook/react';

storiesOf('SynergiesBar', module).add('Default', () => (
  <SynergiesBar synergies={generateSynergiesMock()} bonuses={generateBonusesMock()} />
));

function generateBonusesMock() {
  return {
    assassin: {
      key: 'assassin',
      name: 'Assassin',
      description:
        'Assassins leap to the farthest enemy at the start of combat and deal additional Critical Strike Damage.',
      accentChampionImage:
        'https://cdn.blitz.gg/blitz/centered/Katarina_Splash_Centered_0.jpg',
      bonuses: [
        { needed: 3, effect: '+75% Crit Damage & +10% Crit Chance' },
        { needed: 6, effect: '+150% Crit Damage & +25% Crit Chance' }
      ]
    },
    blademaster: {
      key: 'blademaster',
      name: 'Blademaster',
      description:
        'Blademasters have a 35% chance to strike additional times each attack.',
      accentChampionImage:
        'https://cdn.blitz.gg/blitz/centered/Fiora_Splash_Centered_0.jpg',
      bonuses: [
        { needed: 3, effect: '1 additional strike' },
        { needed: 6, effect: '2 additional strikes' },
        { needed: 9, effect: '4 additional strikes' }
      ]
    },
    brawler: {
      key: 'brawler',
      name: 'Brawler',
      description: 'Brawlers receive bonus maximum health.',
      accentChampionImage:
        'https://cdn.blitz.gg/blitz/centered/Warwick_Splash_Centered_0.jpg',
      bonuses: [
        { needed: 2, effect: '+250 Bonus health' },
        { needed: 4, effect: '+500 Bonus health' },
        { needed: 6, effect: '+900 Bonus health' }
      ]
    },
    elementalist: {
      key: 'elementalist',
      name: 'Elementalist',
      description: 'Elementalists gain double mana from attacks.',
      accentChampionImage:
        'https://cdn.blitz.gg/blitz/centered/Brand_Splash_Centered_0.jpg',
      bonuses: [
        {
          needed: 3,
          effect:
            'At the start of combat, summon an Elemental. Elemental has 2200 health and 100 Attack Damage.'
        }
      ]
    },
    guardian: {
      key: 'guardian',
      name: 'Guardian',
      description: null,
      accentChampionImage:
        'https://cdn.blitz.gg/blitz/centered/Braum_Splash_Centered_0.jpg',
      bonuses: [
        {
          needed: 2,
          effect:
            'At the start of combat, all adjacent allies receive +35 armor. Stacks any number of times.'
        }
      ]
    },
    gunslinger: {
      key: 'gunslinger',
      name: 'Gunslinger',
      description:
        'After attacking, Gunslingers have a 50% chance to fire additional attacks.',
      accentChampionImage:
        'https://cdn.blitz.gg/blitz/centered/MissFortune_Splash_Centered_0.jpg',
      bonuses: [
        { needed: 2, effect: 'Attack 1 additional random enemy.' },
        { needed: 4, effect: 'Attack 2 additional random enemies in range.' },
        { needed: 6, effect: 'Attack 3 additional random enemies in range.' }
      ]
    },
    knight: {
      key: 'knight',
      name: 'Knight',
      description: 'Your team ignores damage from all sources.',
      accentChampionImage:
        'https://cdn.blitz.gg/blitz/centered/Kayle_Splash_Centered_0.jpg',
      bonuses: [
        { needed: 2, effect: '15 damage' },
        { needed: 4, effect: '30 damage' },
        { needed: 6, effect: '55 damage' }
      ]
    },
    ranger: {
      key: 'ranger',
      name: 'Ranger',
      description: 'Rangers have a chance to double their attack speed for the next 3s.',
      accentChampionImage:
        'https://cdn.blitz.gg/blitz/centered/Kindred_Splash_Centered_0.jpg',
      bonuses: [{ needed: 2, effect: '30% chance' }, { needed: 4, effect: '70% chance' }]
    },
    shapeshifter: {
      key: 'shapeshifter',
      name: 'Shapeshifter',
      description: 'Shapeshifters gain bonus maximum Health when they transform.',
      accentChampionImage:
        'https://cdn.blitz.gg/blitz/centered/Elise_Splash_Centered_0.jpg',
      bonuses: [
        { needed: 3, effect: '+60% bonus max health' },
        { needed: 6, effect: '+120% bonus max health' }
      ]
    },
    sorcerer: {
      key: 'sorcerer',
      name: 'Sorcerer',
      description:
        'Sorcerers gain double mana from attacking and allies have increased spell damage.',
      accentChampionImage:
        'https://cdn.blitz.gg/blitz/centered/Karthus_Splash_Centered_0.jpg',
      bonuses: [
        { needed: 3, effect: '+40% Spell Damage' },
        { needed: 6, effect: '+100% Spell Damage' }
      ]
    },
    demon: {
      key: 'demon',
      name: 'Demon',
      description:
        'Demons basic attacks have a 40% chance to burn 20 mana from their target and return mana to the attacker.',
      accentChampionImage:
        'https://cdn.blitz.gg/blitz/centered/Aatrox_Splash_Centered_0.jpg',
      bonuses: [
        { needed: 2, effect: 'Return 15 mana back to attacker' },
        { needed: 4, effect: 'Return 30 mana back to attacker' },
        { needed: 6, effect: 'Return 45 mana back to attacker' }
      ]
    },
    dragon: {
      key: 'dragon',
      name: 'Dragon',
      description: null,
      accentChampionImage:
        'https://cdn.blitz.gg/blitz/centered/AurelionSol_Splash_Centered_0.jpg',
      bonuses: [{ needed: 2, effect: 'Dragons are immune to 83% Magic damage' }]
    },
    exile: {
      key: 'exile',
      name: 'Exile',
      description: null,
      accentChampionImage:
        'https://cdn.blitz.gg/blitz/centered/Yasuo_Splash_Centered_0.jpg',
      bonuses: [
        {
          needed: 1,
          effect:
            'If an Exile has no adjacent allies at the start of combat, they gain a shield equal to a 100% max health.'
        }
      ]
    },
    glacial: {
      key: 'glacial',
      name: 'Glacial',
      description: 'On hit, Glacials have a chance to stun for 2s.',
      accentChampionImage:
        'https://cdn.blitz.gg/blitz/centered/Anivia_Splash_Centered_0.jpg',
      bonuses: [
        { needed: 2, effect: '20% chance' },
        { needed: 4, effect: '30% chance' },
        { needed: 6, effect: '45% chance' }
      ]
    },
    hextech: {
      key: 'hextech',
      name: 'Hextech',
      description:
        'When combat begins, the ally team launches and detonates a pulse bomb, temporarily disabling nearby enemy items for 7 seconds',
      accentChampionImage: null,
      bonuses: [
        { needed: 2, effect: 'Within 1 hex' },
        { needed: 4, effect: 'Within 2 hexes' }
      ]
    },
    imperial: {
      key: 'imperial',
      name: 'Imperial',
      description: 'Imperials deal Double Damage.',
      accentChampionImage:
        'https://cdn.blitz.gg/blitz/centered/Swain_Splash_Centered_0.jpg',
      bonuses: [
        { needed: 2, effect: '1 random Imperial' },
        { needed: 4, effect: 'All Imperials' }
      ]
    },
    noble: {
      key: 'noble',
      name: 'Noble',
      description: 'Nobles grant +50 Armor and Magic Resist and heal for 25 on hit',
      accentChampionImage:
        'https://cdn.blitz.gg/blitz/centered/Garen_Splash_Centered_0.jpg',
      bonuses: [
        { needed: 3, effect: '1 random ally' },
        { needed: 6, effect: 'All allies' }
      ]
    },
    ninja: {
      key: 'ninja',
      name: 'Ninja',
      description: 'Ninjas gain a percentage of Attack Damage.',
      accentChampionImage:
        'https://cdn.blitz.gg/blitz/centered/Akali_Splash_Centered_0.jpg',
      bonuses: [
        {
          needed: 1,
          effect: '1 Ninja only: Ninja gains +50 Attack Damage & Ability Power'
        },
        {
          needed: 4,
          effect: '4 Ninjas: All Ninjas gain +70 Attack Damage & Ability Power'
        }
      ]
    },
    pirate: {
      key: 'pirate',
      name: 'Pirate',
      description: null,
      accentChampionImage:
        'https://cdn.blitz.gg/blitz/centered/Gangplank_Splash_Centered_0.jpg',
      bonuses: [
        {
          needed: 3,
          effect: 'Earn up to 4 additional gold after combat against another player.'
        }
      ]
    },
    phantom: {
      key: 'phantom',
      name: 'Phantom',
      description: null,
      accentChampionImage:
        'https://cdn.blitz.gg/blitz/centered/Mordekaiser_Splash_Centered_0.jpg',
      bonuses: [
        {
          needed: 2,
          effect: 'Curse a random enemy at the start of combat, setting their HP to 100.'
        }
      ]
    },
    robot: {
      key: 'robot',
      name: 'Robot',
      description: null,
      accentChampionImage:
        'https://cdn.blitz.gg/blitz/centered/Blitzcrank_Splash_Centered_0.jpg',
      bonuses: [{ needed: 1, effect: 'Robots start combat at full mana' }]
    },
    void: {
      key: 'void',
      name: 'Void',
      description: null,
      accentChampionImage:
        'https://cdn.blitz.gg/blitz/centered/RekSai_Splash_Centered_0.jpg',
      bonuses: [{ needed: 3, effect: 'Void units deal True Damage.' }]
    },
    wild: {
      key: 'wild',
      name: 'Wild',
      description:
        'Attacks generate stacks of Fury (up to 5). Each stack of Fury grants 12% Attack Speed.',
      accentChampionImage:
        'https://cdn.blitz.gg/blitz/centered/Rengar_Splash_Centered_0.jpg',
      bonuses: [
        { needed: 2, effect: 'Wild allies only' },
        { needed: 4, effect: 'All allies' }
      ]
    },
    yordle: {
      key: 'yordle',
      name: 'Yordle',
      description: 'Attacks against ally Yordles have a chance to miss.',
      accentChampionImage:
        'https://cdn.blitz.gg/blitz/centered/Poppy_Splash_Centered_0.jpg',
      bonuses: [
        { needed: 3, effect: '35% chance to miss' },
        { needed: 6, effect: '60% chance to miss' }
      ]
    }
  };
}

function generateSynergiesMock() {
  return [
    {
      name: 'dragon',
      count: 1,
      ranking: 'partial'
    },
    {
      name: 'elementalist',
      count: 2,
      ranking: 'partial'
    },
    {
      name: 'demon',
      count: 2,
      ranking: 'bronze'
    },
    {
      name: 'glacial',
      count: 3,
      ranking: 'bronze'
    },
    {
      name: 'brawler',
      count: 4,
      ranking: 'silver'
    },
    {
      name: 'blademaster',
      count: 6,
      ranking: 'silver'
    },
    {
      name: 'demon',
      count: 6,
      ranking: 'gold'
    },
    {
      name: 'knight',
      count: 7,
      ranking: 'gold'
    }
  ];
}
