import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import { DragSource } from 'react-dnd';

function SelectionItem({ item, isDragging, connectDragSource }) {
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
    <S.Wrapper ref={connectDragSource}>
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

export default DragSource(
  'box',
  {
    beginDrag: props => ({ name: props.item.name }),
    endDrag(props, monitor) {
      const item = monitor.getItem();
      const dropResult = monitor.getDropResult();
      if (dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`);
      }
    }
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  })
)(SelectionItem);
