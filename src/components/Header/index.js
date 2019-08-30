import React from 'react';
import { HeaderWrapper, MenuWrapper, NavList } from './styled';
import Logo from '../../static/img/Logo.svg';
import Divider from '../Common/Divider';

function Header() {
  return (
    <HeaderWrapper>
      <MenuWrapper>
        <a href="/" title="TFT Synergies Logo" data-test="logo">
          <img src={Logo} alt="Logo" />
        </a>
        <nav>
          <NavList>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="/">Contribute</a>
            </li>
          </NavList>
        </nav>
      </MenuWrapper>
      <Divider />
    </HeaderWrapper>
  );
}

export default Header;
