import React from 'react';
import * as S from './styled';

export default function Button({ onClick, children }) {
  return <S.Button onClick={onClick}>{children}</S.Button>;
}
