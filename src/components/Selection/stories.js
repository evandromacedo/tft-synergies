import React from 'react';
import Selection from '.';
import { storiesOf } from '@storybook/react';
import { champions } from './mock';

storiesOf('Selection', module).add('Default', () => <Selection champions={champions} />);
