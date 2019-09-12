import React from 'react';
import SelectionItem from '.';
import { storiesOf } from '@storybook/react';

const item = {
  key: 'bladeoftheruinedking',
  name: 'Blade of the Ruined King',
  type: 'Offensive',
  bonus: 'Wearer is also a Blademaster.',
  tier: 1,
  depth: 2,
  buildsFrom: ['spatula', 'recurvebow'],
  kind: 'advanced',
  champs: ['Ashe', 'Yasuo', 'Zed']
};

storiesOf('Selection Item', module).add('Default', () => <SelectionItem item={item} />);
