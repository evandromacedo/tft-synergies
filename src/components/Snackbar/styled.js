import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
`;

const fadeOut = keyframes`
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
`;

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

  &.my-node-enter {
    /* visibility: visible; */
    bottom: 0;
    opacity: 0;
  }
  &.my-node-enter-active {
    /* visibility: visible; */
    bottom: 30px;
    opacity: 1;
  }
  &.my-node-enter-done {
    /* visibility: visible; */
  }
  &.my-node-exit {
    /* visibility: visible;
    bottom: 30px;
    opacity: 1; */
  }
  &.my-node-exit-active {
    /* visibility: visible; */
    bottom: 0;
    opacity: 0;
  }
  &.my-node-exit-done {
    /* visibility: hidden; */
  }

  /* &.open {
    visibility: visible;
    animation: ${fadeIn} 0.5s, ${fadeOut} 0.5s 2.5s;
  } */

  /* &.close {
    animation: ${fadeOut} 0.5s;
  } */
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
