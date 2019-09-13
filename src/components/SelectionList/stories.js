import React from 'react';
import SelectionList from '.';
import { storiesOf } from '@storybook/react';
import { champions } from '../Selection/mock';
import orderBy from 'lodash/orderBy';

const championsArray = Object.keys(champions).map(key => champions[key]);
const championsOrdered = orderBy(championsArray, ['cost', 'name']);

storiesOf('SelectionList', module)
  .add('Without champions', () => (
    <SelectionList active="champions" champions={[]} searchTerm="some random text" />
  ))
  .add('With champions', () => (
    <SelectionList
      active="champions"
      champions={championsOrdered}
      searchTerm="some random text"
    />
  ))
  .add('Without items', () => (
    <SelectionList active="items" items={[]} searchTerm="some random text" />
  ))
  .add('With items', () => (
    <SelectionList active="items" items={[]} searchTerm="some random text" />
  ));
