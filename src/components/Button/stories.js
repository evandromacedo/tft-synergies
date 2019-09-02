import React from 'react';
import Button from '.';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

storiesOf('Button', module).add('Default', () => (
  <Button onClick={action('Click!')}>Clear</Button>
));
