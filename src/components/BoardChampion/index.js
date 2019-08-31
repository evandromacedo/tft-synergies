import React from 'react';
// import PropTypes from 'prop-types';
import * as S from './styled';
import ClassOrOrigin from '../ClassOrOrigin';
import * as SplashArt from '../SplashArt';

// This will be made again to atempt the API and props.
// Must implement the drag and drop functionality afterwards.
function BoardChampion({ tier, background }) {
  return (
    <S.BoardChampionWrapper tier="5" background={SplashArt.Aatrox}>
      <S.BoardChampionSynergies>
        <ClassOrOrigin type="Demon" />
        <ClassOrOrigin type="Dragon" />
        <ClassOrOrigin type="Demon" />
      </S.BoardChampionSynergies>
      <S.BoardChampionItems>
        <S.BoardChampionItem />
        <S.BoardChampionItem />
        <S.BoardChampionItem />
        <S.BoardChampionName>Aurelion Sol</S.BoardChampionName>
      </S.BoardChampionItems>
    </S.BoardChampionWrapper>
  );
}

BoardChampion.propTypes = {};

export default BoardChampion;
