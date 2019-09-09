import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import SynergyUnit from '.';
import SynergyIcon from '../SynergyIcon';
import * as S from './styled';

const mockDragonDetails = {
  key: 'dragon',
  name: 'Dragon',
  description: null,
  accentChampionImage:
    'https://cdn.blitz.gg/blitz/centered/AurelionSol_Splash_Centered_0.jpg',
  bonuses: [
    {
      needed: 2,
      effect: 'Dragons are immune to 83% Magic damage'
    }
  ]
};

const mockDemonDetails = {
  key: 'demon',
  name: 'Demon',
  description:
    'Demons basic attacks have a 40% chance to burn 20 mana from their target and return mana to the attacker.',
  accentChampionImage: 'https://cdn.blitz.gg/blitz/centered/Aatrox_Splash_Centered_0.jpg',
  bonuses: [
    {
      needed: 2,
      effect: 'Return 15 mana back to attacker'
    },
    {
      needed: 4,
      effect: 'Return 30 mana back to attacker'
    },
    {
      needed: 6,
      effect: 'Return 45 mana back to attacker'
    }
  ]
};

describe('<SynergyUnit />', () => {
  it('renders properly', () => {
    shallow(<SynergyUnit />);
  });

  it('renders "no synergies yet" icon and text when there\'s no champion selected', () => {
    const wrapper = shallow(<SynergyUnit />);
    const NoSynergyIcon = wrapper.find(SynergyIcon);
    expect(NoSynergyIcon.exists()).toBe(true);

    const NoSynergyText = wrapper.find(S.NoSynergies);
    expect(NoSynergyText.text()).toMatch('No synergies yet');
  });

  it('renders the Quantity and Name properly', () => {
    const wrapper = shallow(<SynergyUnit count={5} details={mockDemonDetails} />);

    const QuantityText = wrapper.find(S.Quantity);
    expect(QuantityText.text()).toMatch('5');

    const NameText = wrapper.find(S.Name);
    expect(NameText.text()).toMatch(mockDemonDetails.name);
  });

  it("renders a PARTIAL Icon and inactive progress when there's no bonus yet", () => {
    const wrapper = shallow(
      <SynergyUnit count={1} details={mockDemonDetails} ranking="partial" />
    );
    const PartialIcon = wrapper.find(SynergyIcon);
    expect(PartialIcon.exists()).toBe(true);
    expect(PartialIcon.props().classOrOrigin).toEqual(mockDemonDetails.key);
    expect(PartialIcon.props().type).toEqual('partial');

    const ProgressText = wrapper.find(S.Progress);
    expect(ProgressText.text()).toMatch('1 / 2');
  });

  it('renders a BRONZE Icon and active progress when enables first bonus with exact quantity', () => {
    const wrapper = shallow(
      <SynergyUnit count={2} details={mockDemonDetails} ranking="bronze" />
    );
    const BronzeIcon = wrapper.find(SynergyIcon);
    expect(BronzeIcon.exists()).toBe(true);
    expect(BronzeIcon.props().classOrOrigin).toEqual(mockDemonDetails.key);
    expect(BronzeIcon.props().type).toEqual('bronze');

    const ProgressText = wrapper.find(S.Progress);
    expect(toJSON(ProgressText)).toMatchSnapshot();
  });

  it('renders a BRONZE Icon and active progress when enables first bonus with one more quantity', () => {
    const wrapper = shallow(
      <SynergyUnit count={3} details={mockDemonDetails} ranking="bronze" />
    );
    const BronzeIcon = wrapper.find(SynergyIcon);
    expect(BronzeIcon.exists()).toBe(true);
    expect(BronzeIcon.props().classOrOrigin).toEqual(mockDemonDetails.key);
    expect(BronzeIcon.props().type).toEqual('bronze');

    const ProgressText = wrapper.find(S.Progress);
    expect(toJSON(ProgressText)).toMatchSnapshot();
  });

  it('renders a SILVER Icon and active progress when enables middle bonus', () => {
    const wrapper = shallow(
      <SynergyUnit count={4} details={mockDemonDetails} ranking="silver" />
    );
    const SilverIcon = wrapper.find(SynergyIcon);
    expect(SilverIcon.exists()).toBe(true);
    expect(SilverIcon.props().classOrOrigin).toEqual(mockDemonDetails.key);
    expect(SilverIcon.props().type).toEqual('silver');

    const ProgressText = wrapper.find(S.Progress);
    expect(toJSON(ProgressText)).toMatchSnapshot();
  });

  it('renders a GOLD Icon and active number when enables solo bonus', () => {
    const wrapper = shallow(
      <SynergyUnit count={2} details={mockDragonDetails} ranking="gold" />
    );
    const GoldIcon = wrapper.find(SynergyIcon);
    expect(GoldIcon.exists()).toBe(true);
    expect(GoldIcon.props().classOrOrigin).toEqual(mockDragonDetails.key);
    expect(GoldIcon.props().type).toEqual('gold');

    const ProgressText = wrapper.find(S.Progress);
    expect(ProgressText.text()).toMatch('2');
  });

  it('renders a GOLD Icon and active progress when enables last bonus', () => {
    const wrapper = shallow(
      <SynergyUnit count={6} details={mockDemonDetails} ranking="gold" />
    );
    const GoldIcon = wrapper.find(SynergyIcon);
    expect(GoldIcon.exists()).toBe(true);
    expect(GoldIcon.props().classOrOrigin).toEqual(mockDemonDetails.key);
    expect(GoldIcon.props().type).toEqual('gold');

    const ProgressText = wrapper.find(S.Progress);
    expect(toJSON(ProgressText)).toMatchSnapshot();
  });
});
