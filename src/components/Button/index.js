import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function Button({ onClick, children }) {
  return <S.Button onClick={onClick}>{children}</S.Button>;
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired
};
