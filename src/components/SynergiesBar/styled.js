import styled from 'styled-components';
import TopBar from './BarAssets/TopBar.png';
import MidBar from './BarAssets/MidBar.png';
import BottomBar from './BarAssets/BottomBar.png';
import DivisorIcon from './BarAssets/Divisor.svg';
import RightArrowIcon from './BarAssets/RightArrow.svg';
import LeftArrowIcon from './BarAssets/LeftArrow.svg';

export const Edge = styled.div`
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

export const SynergiesList = styled.ul`
  margin-left: 0.4rem;
  display: grid;
  grid-gap: 0.6rem;

  li {
    overflow: hidden;
  }
`;

export const Divisor = styled.li`
  height: 1.6rem;
  background: url(${DivisorIcon}) no-repeat;
  transform: translateX(-2px);
`;

export const ToggleArrow = styled.li`
  height: 2rem;
  width: 3.4rem;
  transform: translateX(-2px);
  cursor: pointer;
  background: url(${props => (props.showDetails ? LeftArrowIcon : RightArrowIcon)})
    no-repeat;
`;
