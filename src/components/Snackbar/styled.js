import styled from 'styled-components';

export const Wrapper = styled.div`
  visibility: visible;
  min-width: 250px;
  margin-left: -125px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;
  font-size: 1rem;
  transition: opacity 500ms, bottom 500ms;

  &.snackbar-enter {
    bottom: 0;
    opacity: 0;
  }
  &.snackbar-enter-active {
    bottom: 30px;
    opacity: 1;
  }
  &.snackbar-exit-active {
    bottom: 0;
    opacity: 0;
  }
`;

// z-index: 8;
// margin: 8px;
// display: none;
// position: fixed;
// right: 0;
// bottom: 0;
// left: 0;
// align-items: center;
// justify-content: center;
// box-sizing: border-box;
// pointer-events: none;
