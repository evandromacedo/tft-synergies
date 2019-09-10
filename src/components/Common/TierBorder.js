import styled from 'styled-components';

const TierBorder = styled.div`
  /* Border gradient based on tier passed from props */
  border-top: 1px solid ${props => props.theme[`borderCost${props.cost}`].top};
  border-bottom: 1px solid ${props => props.theme[`borderCost${props.cost}`].bottom};
  background-image: linear-gradient(
      to bottom,
      ${props => props.theme[`borderCost${props.cost}`].top},
      ${props => props.theme[`borderCost${props.cost}`].bottom}
    ),
    linear-gradient(
      ${props => props.theme[`borderCost${props.cost}`].top},
      ${props => props.theme[`borderCost${props.cost}`].bottom}
    );
  background-size: 1px 100%;
  background-position: 0 0, 100% 0;
  background-repeat: no-repeat;
`;

export default TierBorder;
