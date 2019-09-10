import styled from 'styled-components';
import TierBorder from '../Common/TierBorder';

export const Wrapper = styled(TierBorder)`
  position: relative;
  height: 12.8rem;
  padding: 0.8rem;
  max-width: 25.6rem;
  display: grid;
  grid-gap: 0.8rem;

  @media (max-width: 397px) {
    width: 25.6rem;
  }

  /* Background image for Splash Art */
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: url(${props => props.background});
    background-position: center right;
    background-size: cover;
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

export const Item = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  background-color: ${props => props.theme.background3};
`;

export const Name = styled.p`
  ${props => props.theme.bold20px}
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
