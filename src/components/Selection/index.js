import React, { useState, useRef, useEffect } from 'react';
import { getChampions, getItems } from '../../API';
import * as S from './styled';
import debounce from 'lodash/debounce';
import SelectionList from '../SelectionList';
import Divider from '../Common/Divider';
import Tabs from '../Tabs';
import InputSearch from '../InputSearch';

export default function Selection() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('champions');
  const [allChampions, setAllChampions] = useState([]);
  const [activeChampions, setActiveChampions] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [activeItems, setActiveItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchChampionsAndItems() {
      const champions = await getChampions();
      setAllChampions(champions);
      setActiveChampions(champions);
      const items = await getItems();
      setAllItems(items);
      setActiveItems(items);
      setLoading(false);
    }

    fetchChampionsAndItems();
  }, []);

  const inputRef = useRef(null);

  const onChangeInputSearch = debounce(() => {
    const searchLowerCased = inputRef.current.value.toLowerCase();
    if (activeTab === 'champions') {
      const championsFiltered = allChampions.filter(
        champion =>
          champion.name.toLowerCase().includes(searchLowerCased) ||
          champion.class
            .map(classItem => classItem.toLowerCase())
            .some(classItem => classItem.includes(searchLowerCased)) ||
          champion.origin
            .map(originItem => originItem.toLowerCase())
            .some(originItem => originItem.includes(searchLowerCased))
      );

      if (!championsFiltered.length) {
        setSearchTerm(inputRef.current.value);
      }

      setActiveChampions(championsFiltered);
    } else {
      const itemsFiltered = allItems.filter(
        item =>
          item.name.toLowerCase().includes(searchLowerCased) ||
          item.synergy.includes(searchLowerCased)
      );

      if (!itemsFiltered.length) {
        setSearchTerm(inputRef.current.value);
      }

      setActiveItems(itemsFiltered);
    }
  }, 200);

  function changeActiveTab(tab) {
    inputRef.current.value = '';
    setActiveChampions(allChampions);
    setActiveItems(allItems);
    setActiveTab(tab);
  }

  const tabItems = [
    {
      title: 'Champions',
      onClick: () => changeActiveTab('champions'),
      active: activeTab === 'champions'
    },
    {
      title: 'Synergy Items',
      onClick: () => changeActiveTab('items'),
      active: activeTab === 'items'
    }
  ];

  return (
    <S.Wrapper>
      <Tabs tabItems={tabItems} />

      <S.SearchAndHelpText>
        <InputSearch inputRef={inputRef} onChange={onChangeInputSearch} />
        {activeTab === 'champions' && (
          <S.HelpText>Click on a champion to select it to the board.</S.HelpText>
        )}
        {activeTab === 'items' && (
          <S.HelpText>Drag and drop items to champions on board.</S.HelpText>
        )}
      </S.SearchAndHelpText>

      {loading && 'Loading...'}
      {!loading && (
        <SelectionList
          active={activeTab}
          champions={activeChampions}
          items={activeItems}
          searchTerm={searchTerm}
        />
      )}
      <Divider />
    </S.Wrapper>
  );
}
