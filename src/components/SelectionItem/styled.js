import styled from 'styled-components';
import SynergyIconComponent from '../SynergyIcon';

export const Wrapper = styled.div`
  max-width: 22.4rem;
  display: grid;
  grid-template-columns: 6.2rem 1fr;
  align-items: center;
  grid-gap: 0.6rem;
  border: 1px dashed ${props => props.theme.background4};
  cursor: move;
`;

export const IconAndDescription = styled.div`
  display: inline-grid;
  grid-auto-flow: column;
  grid-gap: 0.6rem;
  align-items: center;
  justify-content: start;
  padding-right: 0.8rem;
`;

export const Img = styled.img`
  width: 6.2rem;
`;

export const SynergyIcon = styled(SynergyIconComponent)`
  font-size: 3.2rem;
`;

export const Description = styled.p`
  ${props => props.theme.sans14pxItalic}
  line-height: 1.8rem;
`;
