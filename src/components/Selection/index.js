import React from 'react';
import orderBy from 'lodash/orderBy';
import * as S from './styled';
import SelectionList from '../SelectionList';
import Divider from '../Common/Divider';
// import Tabs from '../Tabs';

export default function Selection({ champions }) {
  // Just to test at the moment
  const championsArray = Object.keys(champions).map(key => champions[key]);
  const championsOrdered = orderBy(championsArray, ['cost', 'name']);
  // const championsOrdered = [];

  return (
    <S.Wrapper>
      <SelectionList active="champions" champions={championsOrdered} />
      <Divider />
    </S.Wrapper>
  );
}
