import styled from 'styled-components';
import TierBorder from '../Common/TierBorder';
import ChampionsSprite from '../../static/img/ChampionsSprite.png';

export const Wrapper = styled(TierBorder)`
  position: relative;
  height: 12.8rem;
  padding: 0.8rem;
  max-width: 25.6rem;
  display: grid;
  grid-gap: 0.8rem;

  @media (max-width: ${props => props.theme.extraSmall}) {
    width: 25.6rem;
  }

  /* Background image for Splash Art */
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: linear-gradient(to right, black 0, transparent 60%),
      url(${ChampionsSprite});
    background-position: left center, right ${props => props.position};
    box-shadow: inset -4px -4px 8px 2px black, inset 4px 4px 8px 2px black;
  }

  /* Transition when item is dragging */
  transition: box-shadow 0.2s linear;

  &.active {
    box-shadow: 1px 1px 4px ${props => props.theme.accentYellow},
      -1px -1px 4px ${props => props.theme.accentYellow};
  }

  &.canDrop {
    box-shadow: 1px 1px 4px ${props => props.theme.background4},
      -1px -1px 4px ${props => props.theme.background4};
  }
`;

export const Synergies = styled.div`
  display: grid;
  grid-gap: 0.8rem;
  grid-template-rows: repeat(3, 2rem);
`;

export const Items = styled.div`
  display: grid;
  grid-gap: 0.8rem;
  grid-template-columns: 2.8rem 2.8rem 2.8rem 1fr;
  align-items: center;
`;

export const Name = styled.p`
  ${props => props.theme.bold20px}
  text-align: center;
  text-overflow: ellipsis;
  text-shadow: 1px 1px 3px black, -1px -1px 3px black;
  white-space: nowrap;
  overflow: hidden;
`;
