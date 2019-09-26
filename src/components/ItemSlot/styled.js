import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  background-color: ${props => props.theme.background3};
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8), -1px -1px 4px rgba(0, 0, 0, 0.8);

  &.active {
    background-image: url(${props => props.image});
    background-size: cover;
    box-shadow: 1px 1px 4px rgba(255, 255, 255, 0.3),
      -1px -1px 4px rgba(255, 255, 255, 0.3);

    &:hover:before {
      content: '×';
      display: block;
      text-align: right;
      font-family: sans-serif;
      font-size: 1.6rem;
      line-height: 1rem;
      padding: 0.2rem 0.2rem 0 0;
      text-shadow: 0 0 4px black;
    }
  }
`;
