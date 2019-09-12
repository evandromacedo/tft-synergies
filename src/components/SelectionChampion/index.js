import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import TierBorder from '../Common/TierBorder';
import SynergyIcon from '../SynergyIcon';

export default function SelectionChampion({ champion }) {
  function getImgSrc(name) {
    return `https://rerollcdn.com/characters/${name}.png`;
  }

  return (
    <S.Wrapper>
      <S.Title>{champion.name}</S.Title>
      <TierBorder cost={champion.cost}>
        <S.ImageAndCost background={getImgSrc(champion.name)}>
          <S.Cost>{champion.cost}</S.Cost>
        </S.ImageAndCost>
        <S.SynergiesList>
          {champion.origin.map((championOrigin, index) => (
            <S.SynergyItem key={index} title={championOrigin}>
              <SynergyIcon classOrOrigin={championOrigin.toLowerCase()} type="default" />
            </S.SynergyItem>
          ))}
          {champion.class.map((championClass, index) => (
            <S.SynergyItem key={index} title={championClass}>
              <SynergyIcon classOrOrigin={championClass.toLowerCase()} type="default" />
            </S.SynergyItem>
          ))}
        </S.SynergiesList>
      </TierBorder>
    </S.Wrapper>
  );
}

SelectionChampion.propTypes = {
  champion: PropTypes.object.isRequired
};
