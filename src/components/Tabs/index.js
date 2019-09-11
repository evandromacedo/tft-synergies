import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function Tabs({ items }) {
  return (
    <S.Wrapper>
      {items.map((item, index) => (
        <S.Tab key={index} onClick={item.onClick}>
          {item.title}
        </S.Tab>
      ))}
    </S.Wrapper>
  );
}

Tabs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired
    })
  ).isRequired
};
