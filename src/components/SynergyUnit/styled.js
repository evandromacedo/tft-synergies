import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 4rem;
  position: relative;
  float: left;
  clear: left;
`;

export const Icon = styled.div`
  display: grid;
  position: relative;
  z-index: 1;

  /* Just to do the translate transition */
  background-image: linear-gradient(to right, #192128 2rem, transparent 0);
  background-repeat: no-repeat;
`;

export const Count = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0.8rem;
  align-items: center;
  height: 4rem;
  padding: 0.6rem 0.8rem 0.6rem 2.4rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;

  /* TODO: make the transition to show/hide  */
  transform: translateX(2rem) translateY(-4rem);
  transition: transform 0.4s ease;

  &.off {
    transform: translateX(-100%) translateY(-4rem);
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
