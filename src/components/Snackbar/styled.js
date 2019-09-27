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
  visibility: hidden;
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

  &.open {
    /* Show the snackbar */
    visibility: visible;
    /* Add animation: Take 0.5 seconds to fade in and out the snackbar.
    However, delay the fade out process for 2.5 seconds */
    animation: ${fadeIn} 0.5s, ${fadeOut} 0.5s 2.5s;
  }
`;
