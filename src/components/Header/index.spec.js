import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '.';
import { NavList } from './styled';

describe('<Header />', () => {
  const wrapper = mount(
    <Router>
      <Header />
    </Router>
  );

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

  it('renders NavList having 3 items', () => {
    const NavListComponent = wrapper.find(NavList);
    const Ul = NavListComponent.find('ul');
    expect(Ul.children()).toHaveLength(3);
  });
});
