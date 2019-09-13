import React from 'react';
import * as S from './styled';

export default function InputSearch({ onChange }) {
  return (
    <S.Wrapper>
      <S.Input
        type="search"
        placeholder="Search by name or synergy..."
        onChange={onChange}
      />
    </S.Wrapper>
  );
}
