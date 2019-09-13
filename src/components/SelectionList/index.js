import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import SelectionChampion from '../SelectionChampion';
import SelectionItem from '../SelectionItem';

export default function SelectionList({ active, champions, items, searchTerm }) {
  // Renders champions or "No champions found"
  function renderChampions() {
    const hasChampions = !!champions.length;

    if (hasChampions) {
      return (
        <S.SelectionChampions>
          {champions.map((champion, index) => (
            <SelectionChampion key={index} champion={champion} />
          ))}
        </S.SelectionChampions>
      );
    }

    return <S.Text>No champions or synergies found for "{searchTerm}"</S.Text>;
  }

  // Renders items or "No items found"
  function renderItems() {
    const hasItems = !!items.length;

    if (hasItems) {
      return (
        <S.SelectionItems>
          {items.map((item, index) => (
            <SelectionItem key={index} item={item} />
          ))}
        </S.SelectionItems>
      );
    }

    return <S.Text>No items or synergies found for "{searchTerm}"</S.Text>;
  }

  const championsActive = active === 'champions';
  const itemsActive = active === 'items';

  return (
    <>
      {championsActive && renderChampions()}
      {itemsActive && renderItems()}
    </>
  );
}

SelectionList.propTypes = {
  active: PropTypes.oneOf(['champions', 'items']),
  champions: PropTypes.array,
  items: PropTypes.array,
  searchTerm: PropTypes.string
};

SelectionList.defaultProps = {
  champions: [],
  items: [],
  searchTerm: ''
};
