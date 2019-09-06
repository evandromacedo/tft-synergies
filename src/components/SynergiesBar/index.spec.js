import React from 'react';
import { shallow } from 'enzyme';
import { generateBonusesMock, generateSynergiesMock } from './stories';
import * as S from './styled';
import { SynergiesBar } from '.';
import SynergyUnit from '../SynergyUnit';

describe('<SynergiesBar />', () => {
  it('renders properly', () => {
    shallow(<SynergiesBar />);
  });

  it('renders just a "No synergies yet" SynergyUnit when no synergies are passed on props', () => {
    const wrapper = shallow(<SynergiesBar />);
    const SynergyUnitComponent = wrapper.find(SynergyUnit);
    const SynergiesUl = wrapper.find('[data-test="synergies-ul"]');
    expect(SynergiesUl.children().length).toEqual(1);
    expect(SynergyUnitComponent.exists()).toBeTruthy();
    expect(SynergyUnitComponent.props()).toEqual({ showDetails: true });
  });

  it('renders the synergies in decrescent order', () => {
    const wrapper = shallow(
      <SynergiesBar
        synergies={generateSynergiesMock()}
        bonusesDetails={generateBonusesMock()}
      />
    );
    const SynergyUnitComponents = wrapper.find(SynergyUnit);
    const SynergyList = wrapper.find('[data-test="synergies-ul"]').children();
    expect(SynergyList.length).toBe(10);

    // First two are gold, then divisor
    expect(SynergyUnitComponents.get(0).props.count).toEqual(7);
    expect(SynergyUnitComponents.get(0).props.ranking).toEqual('gold');
    expect(SynergyUnitComponents.get(1).props.count).toEqual(6);
    expect(SynergyUnitComponents.get(1).props.ranking).toEqual('gold');
    expect(SynergyList.at(2).equals(<S.Divisor />)).toBeTruthy();

    // Two silvers, two bronzes, then divisor
    expect(SynergyUnitComponents.get(2).props.count).toEqual(6);
    expect(SynergyUnitComponents.get(2).props.ranking).toEqual('silver');
    expect(SynergyUnitComponents.get(3).props.count).toEqual(4);
    expect(SynergyUnitComponents.get(3).props.ranking).toEqual('silver');
    expect(SynergyUnitComponents.get(4).props.count).toEqual(3);
    expect(SynergyUnitComponents.get(4).props.ranking).toEqual('bronze');
    expect(SynergyUnitComponents.get(5).props.count).toEqual(2);
    expect(SynergyUnitComponents.get(5).props.ranking).toEqual('bronze');
    expect(SynergyList.at(7).equals(<S.Divisor />)).toBeTruthy();

    // Two partials
    expect(SynergyUnitComponents.get(6).props.count).toEqual(2);
    expect(SynergyUnitComponents.get(6).props.ranking).toEqual('partial');
    expect(SynergyUnitComponents.get(7).props.count).toEqual(1);
    expect(SynergyUnitComponents.get(7).props.ranking).toEqual('partial');
  });

  it('renders ToggleArrow when isMobile={true}', () => {
    const wrapper = shallow(<SynergiesBar isMobile={true} />);
    const ToggleArrow = wrapper.find(S.ToggleArrow);
    expect(ToggleArrow.exists()).toBeTruthy();
  });
});
