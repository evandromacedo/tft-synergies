import { getSynergyRanking, getSynergyIndex, arrangeSynergies } from '.';

const mockDragonDetails = {
  name: 'Dragon',
  bonuses: [
    {
      needed: 2
    }
  ]
};

const mockDemonDetails = {
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

describe('getSynergyRanking()', () => {
  it('returns partial when has no active bonus', () => {
    expect(getSynergyRanking(1, mockDemonDetails.bonuses)).toEqual('partial');
  });

  it('returns bronze when has first active bonus', () => {
    expect(getSynergyRanking(2, mockDemonDetails.bonuses)).toEqual('bronze');
    expect(getSynergyRanking(3, mockDemonDetails.bonuses)).toEqual('bronze');
  });

  it('returns silver when has middle active bonus', () => {
    expect(getSynergyRanking(4, mockDemonDetails.bonuses)).toEqual('silver');
    expect(getSynergyRanking(5, mockDemonDetails.bonuses)).toEqual('silver');
  });

  it('returns gold when has only one or the last active bonus', () => {
    expect(getSynergyRanking(2, mockDragonDetails.bonuses)).toEqual('gold');
    expect(getSynergyRanking(6, mockDemonDetails.bonuses)).toEqual('gold');
  });
});

describe('getSynergyIndex()', () => {
  it('returns null when has no active bonus', () => {
    expect(getSynergyIndex(0, mockDemonDetails.bonuses)).toBeNull();
  });

  it('returns 0 when has only 1 synergy bonus', () => {
    expect(getSynergyIndex(2, mockDragonDetails.bonuses)).toBe(0);
  });

  it('returns 0 when has first active bonus', () => {
    expect(getSynergyIndex(2, mockDemonDetails.bonuses)).toBe(0);
    expect(getSynergyIndex(3, mockDemonDetails.bonuses)).toBe(0);
  });

  it('returns 1 when has middle active bonus', () => {
    expect(getSynergyIndex(4, mockDemonDetails.bonuses)).toBe(1);
    expect(getSynergyIndex(5, mockDemonDetails.bonuses)).toBe(1);
  });

  it('returns 2 when has the last active bonus', () => {
    expect(getSynergyIndex(6, mockDemonDetails.bonuses)).toBe(2);
    expect(getSynergyIndex(7, mockDemonDetails.bonuses)).toBe(2);
  });
});

const synergiesMock = [
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

describe('arrangeSynergies()', () => {
  it('should return an ordered partials array', () => {
    const { partials } = arrangeSynergies(synergiesMock);

    expect(partials).toMatchObject([
      {
        name: 'elementalist',
        count: 2,
        ranking: 'partial'
      },
      {
        name: 'dragon',
        count: 1,
        ranking: 'partial'
      }
    ]);
  });

  it('should return an ordered bronzes array', () => {
    const { bronzes } = arrangeSynergies(synergiesMock);

    expect(bronzes).toMatchObject([
      {
        name: 'glacial',
        count: 3,
        ranking: 'bronze'
      },
      {
        name: 'demon',
        count: 2,
        ranking: 'bronze'
      }
    ]);
  });

  it('should return an ordered silvers array', () => {
    const { silvers } = arrangeSynergies(synergiesMock);

    expect(silvers).toMatchObject([
      {
        name: 'blademaster',
        count: 6,
        ranking: 'silver'
      },
      {
        name: 'brawler',
        count: 4,
        ranking: 'silver'
      }
    ]);
  });

  it('should return an ordered golds array', () => {
    const { golds } = arrangeSynergies(synergiesMock);

    expect(golds).toMatchObject([
      {
        name: 'knight',
        count: 7,
        ranking: 'gold'
      },
      {
        name: 'demon',
        count: 6,
        ranking: 'gold'
      }
    ]);
  });
});
