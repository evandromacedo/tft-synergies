import React from 'react';
import * as S from './styled';
import SelectionList from '../SelectionList';
import Divider from '../Common/Divider';
import Tabs from '../Tabs';

export default function Selection({ champions }) {
  return (
    <S.Wrapper>
      <SelectionList active="champions" champions={champions} />
      <Divider />
    </S.Wrapper>
  );
}
