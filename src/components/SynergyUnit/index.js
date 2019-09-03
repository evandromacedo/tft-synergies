import React from 'react';
import * as S from './styled';
import { NoSynergy } from '../SynergyIcon';

export default function SynergiesBar() {
  return (
    <S.Wrapper>
      <S.Icon>
        <NoSynergy />
      </S.Icon>

      <S.Count>
        <S.Quantity>2</S.Quantity>
        <div>
          <S.Name>Shapeshifter</S.Name>
          <S.Progress>
            <S.Unable>3 / </S.Unable>6<S.Unable> / 9</S.Unable>
          </S.Progress>
        </div>
      </S.Count>
    </S.Wrapper>
  );
}
