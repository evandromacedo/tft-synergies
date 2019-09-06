import React from 'react';
import { shallow } from 'enzyme';
import * as S from './styled';
import SynergyDetails from '.';

describe('<SynergyDetails />', () => {
  it('renders properly', () => {
    shallow(<SynergyDetails />);
  });
});
