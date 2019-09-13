import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function SelectionItem({ item }) {
  function getImgSrc(name) {
    return `https://rerollcdn.com/items/${name.replace(/ |'/g, '')}.png`;
  }

  const { key, name, bonus } = item;

  const synergyIcons = {
    youmuusghostblade: 'assassin',
    knightsvow: 'knight',
    frozenmallet: 'glacial',
    yuumi: 'sorcerer',
    bladeoftheruinedking: 'blademaster',
    darkin: 'demon'
  };

  return (
    <S.Wrapper>
      <S.Img src={getImgSrc(name)} alt={name} title={name} />
      <S.IconAndDescription>
        <S.SynergyIcon classOrOrigin={synergyIcons[key]} type="default" />
        <S.Description>{bonus}</S.Description>
      </S.IconAndDescription>
    </S.Wrapper>
  );
}

SelectionItem.propTypes = {
  item: PropTypes.object.isRequired
};
