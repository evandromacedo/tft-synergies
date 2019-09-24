import React from 'react';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';
import * as S from './styled';
import ClassOrOrigin from '../ClassOrOrigin';
import ItemSlot from '../ItemSlot';

// This will be made again to atempt the API and props.
// Must implement the drag and drop functionality afterwards.
export default function BoardChampion({ champion, onClick }) {
  // Drag and drop configs
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'item',
    drop: item => {
      console.log(`You dropped ${item.item.name} into ${champion.name}!`);
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });

  // Classname based on drag and drop
  const className = getClassName(canDrop, isOver);

  return (
    <S.Wrapper
      ref={drop}
      onClick={onClick}
      className={className}
      cost={champion.cost}
      position={getBackgroundPosition(champion.key)}
    >
      <S.Synergies>
        {champion.synergies.map((synergy, index) => (
          <ClassOrOrigin key={index} type={synergy.toLowerCase()} />
        ))}
      </S.Synergies>
      <S.ItemsAndName>
        <ItemSlot />
        <ItemSlot />
        <ItemSlot />
        <S.Name>{champion.name}</S.Name>
      </S.ItemsAndName>
    </S.Wrapper>
  );
}

BoardChampion.propTypes = {
  champion: PropTypes.shape({
    name: PropTypes.string,
    cost: PropTypes.number,
    key: PropTypes.string,
    synergies: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};

function getClassName(canDrop, isOver) {
  const isActive = canDrop && isOver;
  if (isActive) {
    return 'active';
  }

  if (canDrop) {
    return 'canDrop';
  }

  return '';
}

function getBackgroundPosition(championKey) {
  const positions = {
    Aatrox: '-0px',
    Ahri: '-128px',
    Akali: '-256px',
    Anivia: '-384px',
    Ashe: '-512px',
    AurelionSol: '-640px',
    Blitzcrank: '-768px',
    Brand: '-896px',
    Braum: '-1024px',
    Camille: '-1152px',
    Chogath: '-1280px',
    Darius: '-1408px',
    Draven: '-1536px',
    Elise: '-1664px',
    Evelynn: '-1792px',
    Fiora: '-1920px',
    Gangplank: '-2048px',
    Garen: '-2176px',
    Gnar: '-2304px',
    Graves: '-2432px',
    Jayce: '-2560px',
    Jinx: '-2688px',
    Kaisa: '-2816px',
    Karthus: '-2944px',
    Kassadin: '-3072px',
    Katarina: '-3200px',
    Kayle: '-3328px',
    Kennen: '-3456px',
    Khazix: '-3584px',
    Kindred: '-3712px',
    Leona: '-3840px',
    Lissandra: '-3968px',
    Lucian: '-4096px',
    Lulu: '-4224px',
    MissFortune: '-4352px',
    Mordekaiser: '-4480px',
    Morgana: '-4608px',
    Nidalee: '-4736px',
    Pantheon: '-4864px',
    Poppy: '-4992px',
    Pyke: '-5120px',
    RekSai: '-5248px',
    Rengar: '-5376px',
    Sejuani: '-5504px',
    Shen: '-5632px',
    Shyvana: '-5760px',
    Swain: '-5888px',
    Tristana: '-6016px',
    TwistedFate: '-6144px',
    Varus: '-6272px',
    Vayne: '-6400px',
    Veigar: '-6528px',
    Vi: '-6656px',
    Volibear: '-6784px',
    Warwick: '-6912px',
    Yasuo: '-7040px',
    Zed: '-7168px'
  };

  return positions[championKey];
}
