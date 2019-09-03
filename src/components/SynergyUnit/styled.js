import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 4rem;
  position: relative;
  overflow: hidden;
`;

export const Icon = styled.div`
  display: inline-grid;

  /* Just to do the translate transition */
  background-image: linear-gradient(to right, #192128 50%, transparent 0);
  background-repeat: no-repeat;
`;

export const Count = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0.8rem;
  align-items: center;
  height: 4rem;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 2rem;
  padding: 0.6rem 0.8rem 0.6rem 2.4rem;
  background-color: rgba(255, 255, 255, 0.1);
  /* background-color: rgba(255, 255, 255, 0.5); */
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;

  /* TODO: make the transition to show/hide  */
  transform: translateX(0);
  transition: transform 0.4s ease;

  &.off {
    transform: translateX(-100%);
  }
`;

export const Quantity = styled.span`
  ${props => props.theme.bold16px}
  border-radius: 5px;
  padding: 0.6rem 0.5rem 0.4rem 0.5rem;
  background-color: rgba(255, 255, 255, 0.2);
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
