import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import SynergyIcon from '../SynergyIcon';

export default function SelectionChampion({ champion }) {
  function getImgSrc(key) {
    return `https://rerollcdn.com/characters/${key}.png`;
  }

  return (
    <S.Wrapper>
      <S.Title>{champion.name}</S.Title>
      <S.Champion cost={champion.cost}>
        <S.ImageAndCost background={getImgSrc(champion.key)}>
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
      </S.Champion>
    </S.Wrapper>
  );
}

SelectionChampion.propTypes = {
  champion: PropTypes.object.isRequired
};
