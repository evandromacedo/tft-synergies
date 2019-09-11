import React from 'react';
import * as S from './styled';
import TierBorder from '../Common/TierBorder';
import SynergyIcon from '../SynergyIcon';

export default function SelectionChampion() {
  const getImgSrc = function(name) {
    return `https://rerollcdn.com/characters/${name}.png`;
  };

  return (
    <S.Wrapper>
      <S.Title>Mordekaiser</S.Title>
      <TierBorder cost={5}>
        <S.ImageAndCost background={getImgSrc('Kayle')}>
          <S.Cost>5</S.Cost>
        </S.ImageAndCost>
        <div>
          <SynergyIcon classOrOrigin="Demon" type="hover" />
        </div>
      </TierBorder>
    </S.Wrapper>
  );
}
