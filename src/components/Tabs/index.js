import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function Tabs({ tabItems }) {
  return (
    <S.Wrapper>
      {tabItems.map((item, index) => (
        <S.Tab key={index} onClick={item.onClick} className={item.active ? 'active' : ''}>
          {item.title}
        </S.Tab>
      ))}
    </S.Wrapper>
  );
}

Tabs.propTypes = {
  tabItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
      active: PropTypes.bool
    })
  ).isRequired
};
