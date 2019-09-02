import React from 'react';
import * as S from './styled';
import { Link } from 'react-router-dom';
import Logo from '../../static/img/Logo.svg';
import Divider from '../Common/Divider';

function Header() {
  return (
    <S.HeaderWrapper>
      <S.MenuWrapper>
        <a href="/" title="TFT Synergies Logo" data-test="logo">
          <img src={Logo} alt="Logo" />
        </a>
        <S.Nav>
          <S.NavList>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a
                href="https://github.com/evandromacedo/tft-synergies"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contribute
              </a>
            </li>
          </S.NavList>
        </S.Nav>
      </S.MenuWrapper>
      <Divider />
    </S.HeaderWrapper>
  );
}

export default Header;
