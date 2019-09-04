import { getSynergyRanking, arrangeSynergies } from '.';

const mockDragonDetails = {
  name: 'Dragon',
  bonuses: [
    {
      needed: 2
    }
  ]
};

const mockDemonDetails = {
  name: 'Demon',
  bonuses: [
    {
      needed: 2
    },
    {
      needed: 4
    },
    {
      needed: 6
    }
  ]
};

describe('getSynergyRanking()', () => {
  it('returns partial when has no active bonus', () => {
    expect(getSynergyRanking(1, mockDemonDetails)).toEqual('partial');
  });

  it('returns bronze when has first active bonus', () => {
    expect(getSynergyRanking(2, mockDemonDetails)).toEqual('bronze');
    expect(getSynergyRanking(3, mockDemonDetails)).toEqual('bronze');
  });

  it('returns silver when has middle active bonus', () => {
    expect(getSynergyRanking(4, mockDemonDetails)).toEqual('silver');
    expect(getSynergyRanking(5, mockDemonDetails)).toEqual('silver');
  });

  it('returns gold when has only one or the last active bonus', () => {
    expect(getSynergyRanking(2, mockDragonDetails)).toEqual('gold');
    expect(getSynergyRanking(6, mockDemonDetails)).toEqual('gold');
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
