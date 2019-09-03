import styled from 'styled-components';
import TopBar from './TopBar.png';
import MidBar from './MidBar.png';
import BottomBar from './BottomBar.png';

export const Edge = styled.div`
  width: 3.2rem;

  &:before,
  &:after {
    content: '';
    display: block;
    height: 2.4rem;
    width: 3.2rem;
  }

  &:before {
    background-image: url(${TopBar});
  }

  &:after {
    background-image: url(${BottomBar});
  }
`;

export const Bar = styled.div`
  background-image: url(${MidBar});
  background-repeat: repeat-y;
`;

export const Synergies = styled.div`
  margin-left: 0.4rem;
`;
