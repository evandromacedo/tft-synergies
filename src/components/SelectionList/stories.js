import React from 'react';
import SelectionList from '.';
import { storiesOf } from '@storybook/react';
import { champions, items } from '../Selection/mock';

storiesOf('SelectionList', module)
  .add('Without champions', () => (
    <SelectionList active="champions" champions={[]} searchTerm="some random text" />
  ))
  .add('With champions', () => (
    <SelectionList
      active="champions"
      champions={champions}
      searchTerm="some random text"
    />
  ))
  .add('Without items', () => (
    <SelectionList active="items" items={[]} searchTerm="some random text" />
  ))
  .add('With items', () => (
    <SelectionList active="items" items={items} searchTerm="some random text" />
  ));
