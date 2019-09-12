import React from 'react';
import orderBy from 'lodash/orderBy';
import * as S from './styled';
import SelectionChampion from '../SelectionChampion';

export default function Selection({ champions }) {
  // Just to test at the moment
  const championsArray = Object.keys(champions).map(key => champions[key]);
  const championsOrdered = orderBy(championsArray, ['cost', 'name']);
  console.log(championsOrdered);

  return (
    <S.Wrapper>
      {championsOrdered.map((champion, index) => (
        <SelectionChampion key={index} champion={champion} />
      ))}
    </S.Wrapper>
  );
}
