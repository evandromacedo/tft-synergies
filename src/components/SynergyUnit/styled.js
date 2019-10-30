import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 4rem;
  position: relative;
  /* Makes the block div to be width: auto */
  float: left;
  clear: left;

  /* Just to do the translate transition */
  background-image: linear-gradient(to right, #192128 2rem, transparent 0);
  background-repeat: no-repeat;
`;

export const Icon = styled.div`
  display: grid;
  position: relative;
  z-index: 1;

  @media (hover: hover) {
    ${Wrapper}:hover & {
      filter: brightness(130%);
    }
  }
`;

export const Count = styled.div`
  cursor: default;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0.8rem;
  align-items: center;
  height: 4rem;
  padding: 0.6rem 0.8rem 0.6rem 2.4rem;
  background-color: #313131;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;

  /* Transition to show or hide based on screen size */
  transform: translateX(2rem) translateY(-4rem);
  transition: transform 0.4s ease;

  &.hide {
    transform: translateX(calc(-100% - 0.5rem)) translateY(-4rem);
  }

  @media (max-width: ${props => props.theme.medium}) {
    /* border: 1px solid dimgray; */
    filter: drop-shadow(0 0 2px white);
    background-color: rgba(0, 0, 0, 0.85);
  }
`;

export const Quantity = styled.span`
  ${props => props.theme.bold16px}
  border-radius: 5px;
  padding: 0.6rem 0.5rem 0.4rem 0.5rem;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const NoSynergies = styled.p`
  ${props => props.theme.sans16pxItalic}
`;

export const Name = styled.p`
  ${props => props.theme.bold16px}
`;

export const Progress = styled.p`
  ${props => props.theme.bold12px}
  transform: translateY(1px);
`;

export const Unable = styled.span`
  color: rgba(255, 255, 255, 0.3);
`;
