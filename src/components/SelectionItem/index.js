import React from 'react';
import PropTypes from 'prop-types';
import capitalize from 'lodash/capitalize';
import getItemImage from '../../utils/getItemImage';
import { DragPreviewImage, useDrag } from 'react-dnd';
import * as S from './styled';

export default function SelectionItem({ item }) {
  const [{ isDragging }, drag, preview] = useDrag({
    item: { item, type: 'item' },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  const synergyIcons = {
    youmuusghostblade: 'assassin',
    knightsvow: 'knight',
    frozenmallet: 'glacial',
    yuumi: 'sorcerer',
    bladeoftheruinedking: 'blademaster',
    darkin: 'demon',
    mittens: 'yordle'
  };

  const { key, name, synergy } = item;
  const opacity = isDragging ? 0.4 : 1;

  return (
    <S.Wrapper ref={drag} style={{ opacity }}>
      <DragPreviewImage connect={preview} src={getItemImage(name)} />
      <S.Img src={getItemImage(name)} alt={name} title={name} />
      <S.IconAndDescription>
        <S.SynergyIcon classOrOrigin={synergyIcons[key]} type="default" />
        <S.Description>Wearer is also a {capitalize(synergy)}</S.Description>
      </S.IconAndDescription>
    </S.Wrapper>
  );
}

SelectionItem.propTypes = {
  item: PropTypes.object.isRequired
};
