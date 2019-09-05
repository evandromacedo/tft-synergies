import React, { useState, useEffect } from 'react';
import { getSynergies } from '../../API';
import { synergiesMock } from './mocks';
import * as S from './styled';
import Divisor from './BarAssets/Divisor.svg';
import SynergyUnit from '../SynergyUnit';

// export default function SynergiesBar({ synergies, bonuses }) {
export default function SynergiesBar() {
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

  // synergiesMock
  // console.log(synergiesMock);

  return (
    <S.Edge>
      <S.Bar>
        <S.SynergiesList>
          {synergyBonuses &&
            synergiesMock.map((teste, index) => (
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
