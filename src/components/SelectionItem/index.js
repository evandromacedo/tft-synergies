import React from 'react';
import PropTypes from 'prop-types';
import { DragPreviewImage, useDrag } from 'react-dnd';
import * as S from './styled';

export default function SelectionItem({ item }) {
  function getImgSrc(name) {
    return `https://rerollcdn.com/items/${name.replace(/ |'/g, '')}.png`;
  }

  const [{ isDragging }, drag, preview] = useDrag({
    item: { item, type: 'item' },
    end: (dragItem, monitor) => {
      const dropResult = monitor.getDropResult();
      if (dragItem && dropResult) {
        alert(`You dropped ${dragItem.item.name} into ${dropResult.name}!`);
      }
    },
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
    darkin: 'demon'
  };

  const { key, name, bonus } = item;
  const opacity = isDragging ? 0.4 : 1;

  return (
    <S.Wrapper ref={drag} style={{ opacity }}>
      <DragPreviewImage connect={preview} src={getImgSrc(name)} />
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
