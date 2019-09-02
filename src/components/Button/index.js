import React from 'react';
import * as S from './styled';

function Button({ onClick, children }) {
  return <S.Button onClick={onClick}>{children}</S.Button>;
}

export default Button;
