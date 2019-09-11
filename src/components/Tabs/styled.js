import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 4.8rem;
  justify-content: start;
`;

export const Tab = styled.button`
  ${props => props.theme.bold20px}
  color: inherit;
  padding: 0;
  position: relative;

  /* Hover and active animation */
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

  &:hover::before,
  &.active::before {
    width: 100%;
  }

  /* Tabs Separator */
  &:not(:last-child):after {
    pointer-events: none;
    height: 100%;
    content: '';
    position: absolute;
    top: 0;
    left: calc(100% + 2.4rem);
    border-left: 1px solid ${props => props.theme.accentYellow};
  }
`;
