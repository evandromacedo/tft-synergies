import React, { useState, useEffect } from 'react';
import { getChampions, getItems } from '../../API';
import * as S from './styled';
import SelectionList from '../SelectionList';
import Divider from '../Common/Divider';
import Tabs from '../Tabs';
import InputSearch from '../InputSearch';

export default function Selection() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('champions');
  const [champions, setChampions] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchChampionsAndItems() {
      const champions = await getChampions();
      setChampions(champions);
      const items = await getItems();
      setItems(items);
      setLoading(false);
    }

    fetchChampionsAndItems();
  }, []);

  const tabItems = [
    {
      title: 'Champions',
      onClick: () => setActiveTab('champions'),
      active: activeTab === 'champions'
    },
    {
      title: 'Synergy Items',
      onClick: () => setActiveTab('items'),
      active: activeTab === 'items'
    }
  ];

  return (
    <S.Wrapper>
      <Tabs tabItems={tabItems} />

      <S.SearchAndHelpText>
        <InputSearch />
        {activeTab === 'champions' && (
          <S.HelpText>Click on a champion to select it to the board.</S.HelpText>
        )}
        {activeTab === 'items' && (
          <S.HelpText>Drag and drop items to champions on board.</S.HelpText>
        )}
      </S.SearchAndHelpText>

      {loading && 'Loading...'}
      {!loading && (
        <SelectionList active={activeTab} champions={champions} items={items} />
      )}
      <Divider />
    </S.Wrapper>
  );
}
