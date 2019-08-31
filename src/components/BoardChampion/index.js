import React from 'react';
// import PropTypes from 'prop-types';
import * as S from './styled';
import ClassOrOrigin from '../ClassOrOrigin';
import * as SplashArt from '../SplashArt';

// This will be made again to atempt the API and props.
// Must implement the drag and drop functionality afterwards.
function BoardChampion({ tier, background }) {
  return (
    <S.Wrapper tier="5" background={SplashArt.Aatrox}>
      <S.Synergies>
        <ClassOrOrigin type="Demon" />
        <ClassOrOrigin type="Dragon" />
        <ClassOrOrigin type="Demon" />
      </S.Synergies>
      <S.Items>
        <S.Item />
        <S.Item />
        <S.Item />
        <S.Name>Aurelion Sol</S.Name>
      </S.Items>
    </S.Wrapper>
  );
}

BoardChampion.propTypes = {};

export default BoardChampion;
