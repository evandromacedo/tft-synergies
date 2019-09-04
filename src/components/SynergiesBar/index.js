import React, { useState, useEffect } from 'react';
import { getSynergies } from '../../API';
import * as S from './styled';
import Divisor from './BarAssets/Divisor.svg';
import SynergyUnit from '../SynergyUnit';

export default function SynergiesBar() {
  const [synergies, setSynergies] = useState(null);

  useEffect(() => {
    async function fetchSynergies() {
      const data = await getSynergies();
      setSynergies(data);
    }

    fetchSynergies();
  }, []);

  // console.log(JSON.stringify(synergies, null, 2));
  // if (synergies) {
  //   console.log(synergies.demon);
  // }
  const data = [
    {
      name: 'demon',
      quantity: 6
    },
    {
      name: 'dragon',
      quantity: 2
    },
    {
      name: 'demon',
      quantity: 4
    },
    {
      name: 'demon',
      quantity: 2
    }
    // {
    //   name: 'demon',
    //   quantity: 1
    // },
  ];

  return (
    <S.Edge>
      <S.Bar>
        <S.SynergiesList>
          {synergies &&
            data.map((teste, index) => (
              <li key={index}>
                <SynergyUnit count={teste.quantity} details={synergies[teste.name]} />
              </li>
            ))}
        </S.SynergiesList>
      </S.Bar>
    </S.Edge>
  );
}
