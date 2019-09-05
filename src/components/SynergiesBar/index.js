import React from 'react';
import { arrangeSynergies } from '../../utils';
import * as S from './styled';
import SynergyUnit from '../SynergyUnit';

export default function SynergiesBar({ synergies, bonuses }) {
  const splittedSynergies = arrangeSynergies(synergies);
  const { golds, silvers, bronzes, partials } = splittedSynergies;

  function renderSynergies(synergyArray, renderDivisor) {
    let synergies = synergyArray.map((synergyItem, index) => (
      <li key={index}>
        <SynergyUnit
          count={synergyItem.count}
          details={bonuses[synergyItem.name]}
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
          {bonuses && (
            <>
              {golds && renderSynergies(golds, true)}
              {silvers && renderSynergies(silvers)}
              {bronzes && renderSynergies(bronzes, true)}
              {partials && renderSynergies(partials)}
            </>
          )}
        </S.SynergiesList>
      </S.Bar>
    </S.Edge>
  );
}
