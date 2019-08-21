import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Header from '.';
import { NavList } from './styled';

describe('<Header />', () => {
  const wrapper = mount(<Header />);

  it('renders properly', () => {
    shallow(<Header />);
  });

  it('renders a header and nav tags', () => {
    expect(wrapper.exists('header')).toBe(true);
    expect(wrapper.exists('nav')).toBe(true);
  });

  it('renders the logo within a link to home', () => {
    const linkTag = wrapper.find('a[data-test="logo"]');
    expect(toJSON(linkTag)).toMatchSnapshot();
  });

  it('renders NavList having 2 items', () => {
    const NavListComponent = wrapper.find(NavList);
    const Ul = NavListComponent.find('ul');
    expect(Ul.children()).toHaveLength(2);
  });
});
