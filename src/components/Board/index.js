import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import Divider from '../Common/Divider';
import BoardChampion from '../BoardChampion';
import { generate } from 'shortid';
import { useStore } from '../Context';

export default function Board() {
  const { board: champions } = useStore();
  const hasChampion = champions && !!champions.length;

  return (
    <S.Wrapper>
      {hasChampion && (
        <S.BoardChampions>
          {champions.map(champion => (
            <BoardChampion key={generate()} champion={champion} />
          ))}
        </S.BoardChampions>
      )}
      {!hasChampion && <S.Text>No champion selected yet...</S.Text>}
      <Divider />
    </S.Wrapper>
  );
}

Board.propTypes = {
  champions: PropTypes.array
};
