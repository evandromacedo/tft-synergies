import React from 'react';
import * as S from './styled';
import { NoSynergy } from '../SynergyIcon';

export default function SynergiesBar() {
  return (
    <S.Edge>
      <S.Bar>
        <S.Synergies>
          <NoSynergy />
        </S.Synergies>
      </S.Bar>
    </S.Edge>
  );
}
