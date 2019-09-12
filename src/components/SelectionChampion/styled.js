import styled from 'styled-components';
import Gold from './Gold.png';

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 0.8rem;
  width: 12rem;
`;

export const Title = styled.h1`
  ${props => props.theme.bold20px}
  text-align: center;
`;

export const ImageAndCost = styled.div`
  height: 12rem;
  width: calc(100% - 2px);
  margin: 0 auto;
  background-image: url(${props => props.background});
  background-color: white;
  background-size: cover;
  box-shadow: inset -2px -2px 8px black, inset 2px 2px 8px black;
`;

export const Cost = styled.p`
  ${props => props.theme.bold20px}
  text-align: right;
  text-shadow: 0 0 6px black;
  padding: 0.8rem;
  position: relative;

  /* Gold Icon */
  &:before {
    content: '';
    position: absolute;
    top: 0.5rem;
    right: 2rem;
    width: 2.7rem;
    height: 2.3rem;
    background-image: url(${Gold});
    background-size: cover;
  }
`;

export const SynergiesList = styled.ul`
  width: calc(100% - 2px);
  background-color: black;
  display: grid;
  grid-auto-flow: column;
  margin: -1px auto 0 auto;
  padding: 0rem 0.4rem 0.6rem 0.4rem;
  justify-items: center;
  justify-content: space-evenly;
`;

export const SynergyItem = styled.li`
  font-size: 3.2rem;
  height: 3.2rem;
`;
