import React, { useState, useEffect } from 'react';
import { getSynergies } from '../../API';
import * as S from './styled';
import Divisor from './BarAssets/Divisor.svg';
import SynergyUnit from '../SynergyUnit';

const data = [
  {
    name: 'demon',
    count: 6,
    ranking: 'gold'
  },
  {
    name: 'demon',
    count: 4,
    ranking: 'silver'
  },
  {
    name: 'demon',
    count: 3,
    ranking: 'bronze'
  },
  {
    name: 'demon',
    count: 2,
    ranking: 'bronze'
  },
  {
    name: 'demon',
    count: 1,
    ranking: 'partial'
  }
];

export default function SynergiesBar({ synergies, bonuses }) {
  /*********************************/
  /* This will be removed soon!!! */
  /*********************************/
  const [synergyBonuses, setSynergies] = useState(null);

  useEffect(() => {
    async function fetchSynergies() {
      const data = await getSynergies();
      setSynergies(data);
    }

    fetchSynergies();
  }, []);
  /*****************************/

  return (
    <S.Edge>
      <S.Bar>
        <S.SynergiesList>
          {synergyBonuses &&
            data.map((teste, index) => (
              <li key={index}>
                <SynergyUnit
                  count={teste.count}
                  details={synergyBonuses[teste.name]}
                  ranking={teste.ranking}
                />
              </li>
            ))}
        </S.SynergiesList>
      </S.Bar>
    </S.Edge>
  );
}
