import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import withSizes from 'react-sizes';
import theme from '../App/theme';
import { arrangeSynergies } from '../../utils';
import { useStore } from '../Context';
import * as S from './styled';
import SynergyUnit from '../SynergyUnit';

// synergies - array of synergies from selected champions on reducer
// bonusesDetails - object containing details of the synergies from API
function SynergiesBar({ isMobile = false }) {
  // Get synergies and bonuses from store
  const { synergies, bonuses: bonusesDetails } = useStore();

  // Show details based on screen size
  const [showDetails, setDetails] = useState(true);
  function toggleDetails() {
    setDetails(!showDetails);
  }

  useEffect(() => {
    setDetails(!isMobile);
  }, [isMobile]);

  // Split synergies in arrays of golds, silvers, bronzes and partials
  const splittedSynergies = arrangeSynergies(synergies);
  const { golds, silvers, bronzes, partials } = splittedSynergies;

  // Render SynergyUnits and Divisor into list items
  function renderSynergiesUnities(synergyArray, renderDivisor) {
    let synergies = synergyArray.map((synergyItem, index) => (
      <li key={index}>
        <SynergyUnit
          count={synergyItem.count}
          details={bonusesDetails[synergyItem.name]}
          ranking={synergyItem.ranking}
          showDetails={showDetails}
        />
      </li>
    ));

    if (renderDivisor) {
      synergies = [...synergies, <S.Divisor key="divisor" />];
    }

    return synergies;
  }

  return (
    <S.Edge>
      <S.Bar>
        <S.SynergiesList data-test="synergies-ul">
          {/* Show Toggle Arrow button if it's mobile */}
          {isMobile && (
            <S.ToggleArrow rightArrow={!showDetails} onClick={toggleDetails} />
          )}

          {/* Default SynergyUnit shows "No synergies yet" */}
          {!synergies.length && (
            <li>
              <SynergyUnit showDetails={showDetails} />
            </li>
          )}

          {/* Ordered synergies and divisors  */}
          {bonusesDetails && (
            <>
              {golds && renderSynergiesUnities(golds, true)}
              {silvers && renderSynergiesUnities(silvers, !bronzes && !!partials && true)}
              {bronzes && renderSynergiesUnities(bronzes, !!partials && true)}
              {partials && renderSynergiesUnities(partials)}
            </>
          )}
        </S.SynergiesList>
      </S.Bar>
    </S.Edge>
  );
}

SynergiesBar.propTypes = {
  isMobile: PropTypes.bool
};

// This is the "small" breakpoint on theme.js
const mapSizesToProps = ({ width }) => ({
  isMobile: width <= parseInt(theme.small)
});

// Named export for testing, and default for using
export { SynergiesBar };
export default withSizes(mapSizesToProps)(SynergiesBar);
