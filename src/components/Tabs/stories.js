import React from 'react';
import Tabs from '.';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

storiesOf('Tabs', module).add('Default', () => (
  <Tabs
    tabItems={[
      {
        title: 'Champions',
        onClick: action('On Click Champions'),
        active: true
      },
      {
        title: 'Synergy Items',
        onClick: action('On Click Synergy Items')
      },
      {
        title: 'Lol',
        onClick: action('On Click Lol')
      }
    ]}
  />
));
