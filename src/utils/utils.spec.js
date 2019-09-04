import { getSynergyRanking } from '.';

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
