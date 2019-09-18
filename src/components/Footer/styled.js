import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Wrapper = styled.footer`
  max-width: ${props => props.theme.large};
  margin: 0 auto;
  padding: 2rem 2.4rem;
  display: grid;
  grid-gap: 2.4rem;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
`;

export const Link = styled(RouterLink)`
  ${props => props.theme.bold20px}
  position: relative;

  @media (hover: hover) {
    &::before {
      content: ' ';
      position: absolute;
      bottom: -6px;
      height: 2px;
      width: 0;
      border-radius: 2px;
      background-color: ${props => props.theme.accentYellow};
      transition: width 0.2s;
    }

    &:hover::before {
      width: 100%;
    }
  }
`;

export const Contribute = styled(Link)`
  ${props => props.theme.bold20px}
  display: grid;
  grid-gap: 0.8rem;
  align-items: center;
  grid-template-columns: auto 2.4rem;

  span {
    transform: translateY(2px);
  }

  @media (max-width: ${props => props.theme.small}) {
    span {
      display: none;
    }

    grid-template-columns: 2.4rem;
  }
`;
