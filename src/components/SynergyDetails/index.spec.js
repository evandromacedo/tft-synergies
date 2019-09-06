import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import * as S from './styled';
import SynergyDetails from '.';

const demonDetailsMock = {
  key: 'demon',
  name: 'Demon',
  description:
    'Demons basic attacks have a 40% chance to burn 20 mana from their target and return mana to the attacker.',
  accentChampionImage: 'https://cdn.blitz.gg/blitz/centered/Aatrox_Splash_Centered_0.jpg',
  bonuses: [
    { needed: 2, effect: 'Return 15 mana back to attacker' },
    { needed: 4, effect: 'Return 30 mana back to attacker' },
    { needed: 6, effect: 'Return 45 mana back to attacker' }
  ]
};

describe('<SynergyDetails />', () => {
  it('renders properly', () => {
    shallow(<SynergyDetails details={demonDetailsMock} />);
  });

  it('renders name properly', () => {
    const wrapper = shallow(<SynergyDetails details={demonDetailsMock} />);
    const Name = wrapper.find(S.Name);
    expect(Name.text()).toEqual('Demon');
  });

  it('renders description of details', () => {
    const wrapper = shallow(<SynergyDetails details={demonDetailsMock} />);
    const DescriptionDemon = wrapper.find(S.Description);
    expect(DescriptionDemon.text()).toEqual(demonDetailsMock.description);
  });

  it('renders "no description provided" when description is null', () => {
    const wrapper = shallow(
      <SynergyDetails details={{ ...demonDetailsMock, description: null }} />
    );
    const DescriptionNull = wrapper.find(S.Description);
    expect(DescriptionNull.text()).toEqual('No description provided at the moment.');
  });

  it('render SynergyList with bonuses', () => {
    const wrapper = shallow(
      <SynergyDetails synergyIndex={1} details={demonDetailsMock} />
    );
    const SynergyList = wrapper.find(S.SynergyList);
    expect(toJSON(SynergyList)).toMatchSnapshot();
  });
});
