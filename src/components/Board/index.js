import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import Divider from '../Common/Divider';
import BoardChampion from '../BoardChampion';
import { generate } from 'shortid';
import * as SplashArt from '../SplashArt';

export default function Board({ champions }) {
  const hasChampion = champions && !!champions.length;

  return (
    <S.Wrapper>
      {hasChampion && (
        <S.BoardChampions>
          {champions.map(champion => (
            // SplashArt will be used soon
            <BoardChampion
              key={generate()}
              champion={champion}
              background={SplashArt[champion.name]}
            />
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
