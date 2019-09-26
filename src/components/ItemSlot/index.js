import React from 'react';
import getItemImage from '../../utils/getItemImage';
import * as S from './styled.js';

export default function ItemSlot({ item }) {
  const image = item ? getItemImage(item.name) : null;

  return (
    <S.Wrapper
      onClick={e => {
        e.stopPropagation();
      }}
      className={image ? 'active' : ''}
      image={image}
    />
  );
}
