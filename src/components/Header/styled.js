import styled from 'styled-components';
import HeaderBackground from '../../static/img/HeaderBackground.jpg';

export const HeaderWrapper = styled.header`
  background-image: url(${HeaderBackground});
  background-position: center center;
  background-size: cover;
`;

export const MenuWrapper = styled.div`
  padding: 2.4rem 0;
  display: grid;
  grid-gap: 2.4rem;
  justify-items: center;
`;

export const Nav = styled.nav`
  width: 100%;
  max-width: 28rem;
`;

export const NavList = styled.ul`
  display: grid;
  grid-gap: 0.8rem;
  grid-auto-flow: column;
  justify-content: space-between;

  li > a {
    ${props => props.theme.bold20px}
    position: relative;

    &::before {
      content: ' ';
      position: absolute;
      bottom: -6px;
      height: 2px;
      width: 0;
      border-radius: 2px;
      background-color: ${props => props.theme.accentYellow};
      transition: width 0.1s linear;
    }

    &:hover::before {
      width: 100%;
    }
  }

  li > a.active {
    &::before {
      content: ' ';
      position: absolute;
      bottom: -6px;
      height: 2px;
      width: 100%;
      border-radius: 2px;
      background-color: ${props => props.theme.accentYellow};
      transition: width 0.1s linear;
    }
  }
`;
