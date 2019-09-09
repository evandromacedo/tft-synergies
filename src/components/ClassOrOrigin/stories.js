import React from 'react';
import ClassOrOrigin from './';
import { storiesOf } from '@storybook/react';

storiesOf('ClassOrOrigin', module)
  .add('Assassin', () => <ClassOrOrigin type="assassin" />)
  .add('Shapeshifter', () => <ClassOrOrigin type="shapeshifter" />)
  .add('Elementalist', () => <ClassOrOrigin type="elementalist" />)
  .add('Blademaster', () => <ClassOrOrigin type="blademaster" />)
  .add('Demon', () => <ClassOrOrigin type="demon" />)
  .add('Dragon', () => <ClassOrOrigin type="dragon" />);
