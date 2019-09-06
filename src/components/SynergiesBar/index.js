import React from 'react';
import PropTypes from 'prop-types';
import { arrangeSynergies } from '../../utils';
import * as S from './styled';
import SynergyUnit from '../SynergyUnit';

// synergies - array of synergies from selected champions on reducer
// bonusesDetails - object containing details of the synergies from API
export default function SynergiesBar({ synergies, bonusesDetails }) {
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
        <S.SynergiesList>
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
  synergies: PropTypes.array,
  bonusesDetails: PropTypes.object.isRequired
};
