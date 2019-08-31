import styled from 'styled-components';

export const BoardChampionWrapper = styled.div`
  position: relative;
  height: 12.8rem;
  padding: 0.8rem;
  max-width: 25.6rem;
  display: grid;
  grid-gap: 0.8rem;

  /* Border gradient based on tier */
  border-top: 1px solid ${props => props.theme[`borderTier${props.tier}`].top};
  border-bottom: 1px solid ${props => props.theme[`borderTier${props.tier}`].bottom};
  background-image: linear-gradient(
      to bottom,
      ${props => props.theme[`borderTier${props.tier}`].top},
      ${props => props.theme[`borderTier${props.tier}`].bottom}
    ),
    linear-gradient(
      ${props => props.theme[`borderTier${props.tier}`].top},
      ${props => props.theme[`borderTier${props.tier}`].bottom}
    );
  background-size: 1px 100%;
  background-position: 0 0, 100% 0;
  background-repeat: no-repeat;

  /* Background image for Splash Art */
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: url(${props => props.background});
    background-position: center right;
    background-size: cover;
  }
`;

export const BoardChampionSynergies = styled.div`
  display: grid;
  grid-gap: 0.8rem;
  grid-template-rows: repeat(3, 2rem);
`;

export const BoardChampionItems = styled.div`
  display: grid;
  grid-gap: 0.8rem;
  grid-template-columns: 2.8rem 2.8rem 2.8rem 1fr;
  align-items: center;
`;

export const BoardChampionItem = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  background-color: ${props => props.theme.background3};
`;

export const BoardChampionName = styled.p`
  ${props => props.theme.bold20px}
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
