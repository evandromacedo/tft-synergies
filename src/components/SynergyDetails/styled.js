import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 28rem;
  padding: 1.2rem;
  border: 1px solid ${props => props.theme.accentYellow};
  background-color: rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 2;
`;

export const Header = styled.div`
  border-bottom: 1px solid ${props => props.theme.accentYellow};
  padding-bottom: 8px;
  display: grid;
  grid-gap: 0.8rem;
  grid-template-columns: 2rem 1fr;
  align-items: center;
  margin-bottom: 0.8rem;
`;

export const Name = styled.h1`
  transform: translateY(2px);
  ${props => props.theme.bold20px};
`;

export const Description = styled.p`
  ${props => props.theme.sans16px};
  margin-bottom: 0.8rem;
`;

export const SynergyList = styled.ul`
  display: grid;
  grid-gap: 0.4rem;
`;

export const SynergyItem = styled.li`
  ${props => props.theme.sans16px};
  color: rgba(255, 255, 255, 0.3);

  &.active {
    color: white;
  }
`;
