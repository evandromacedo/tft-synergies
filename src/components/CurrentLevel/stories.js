import React from 'react';
import CurrentLevel from '.';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

storiesOf('Current Level', module).add('Default', () => (
  <CurrentLevel
    level={5}
    onLevelDown={action('onLevelDown')}
    onLevelUp={action('onLevelUp')}
  />
));
