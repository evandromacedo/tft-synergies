import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as SynergyIcon from '../SynergyIcon';

const Grid = styled.div`
  display: grid;
  grid-gap: 0.6rem;
  grid-template-columns: 2rem auto;
  align-items: center;
`;

const Title = styled.p`
  ${props => props.theme.bold12px}

  /* Necessary to align the text on the center due to font issues. */
  padding-top: 2px;
`;

function ClassOrOrigin({ type }) {
  return (
    <Grid>
      {SynergyIcon[type](SynergyIcon.DEFAULT_SMALL)}
      <Title>{type}</Title>
    </Grid>
  );
}

ClassOrOrigin.propTypes = {
  type: PropTypes.oneOf([
    'Demon',
    'Dragon',
    'Exile',
    'Glacial',
    'Imperial',
    'Noble',
    'Ninja',
    'Pirate',
    'Phantom',
    'Robot',
    'Void',
    'Wild',
    'Yordle',
    'Assassin',
    'Blademaster',
    'Brawler',
    'Elementalist',
    'Guardian',
    'Gunslinger',
    'Knight',
    'Ranger',
    'Shapeshifter',
    'Sorcerer',
    'Hextech'
  ]).isRequired
};

export default ClassOrOrigin;
