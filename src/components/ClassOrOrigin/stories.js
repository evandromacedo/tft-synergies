import React from 'react';
import ClassOrOrigin from './';
import { storiesOf } from '@storybook/react';

storiesOf('ClassOrOrigin', module)
  .add('Demon', () => <ClassOrOrigin type="Demon" />)
  .add('Dragon', () => <ClassOrOrigin type="Dragon" />);
