import React from 'react';
import * as S from './styled';
import SelectionChampion from '../SelectionChampion';
import SelectionItem from '../SelectionItem';

export default function SelectionList({ active, champions, items, searchTerm }) {
  // Renders champions or "No champions found"
  function renderChampions() {
    const hasChampions = !!champions.length;

    if (hasChampions) {
      return champions.map((champion, index) => (
        <SelectionChampion key={index} champion={champion} />
      ));
    }

    return <S.Text>No champions or synergies found for "{searchTerm}"</S.Text>;
  }

  // Renders items or "No items found"
  function renderItems() {
    const hasItems = !!items.length;

    if (hasItems) {
      return items.map((item, index) => <SelectionItem key={index} item={item} />);
    }

    return <S.Text>No items or synergies found for "{searchTerm}"</S.Text>;
  }

  const championsActive = active === 'champions';
  const itemsActive = active === 'items';

  return (
    <S.Wrapper>
      {championsActive && renderChampions()}
      {itemsActive && renderItems()}
    </S.Wrapper>
  );
}
