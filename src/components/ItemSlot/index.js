import React from 'react';
import getItemImage from '../../utils/getItemImage';
import * as S from './styled.js';

export default function ItemSlot({ item, onClick }) {
  const image = item ? getItemImage(item.name) : null;

  return (
    <S.Wrapper
      onClick={e => {
        if (item) {
          e.stopPropagation();
          onClick();
        }
      }}
      className={image ? 'active' : ''}
      image={image}
    />
  );
}
