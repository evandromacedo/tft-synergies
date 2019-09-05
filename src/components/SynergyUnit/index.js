import PropTypes from 'prop-types';
import React from 'react';
import * as S from './styled';
import * as SynergyIcon from '../SynergyIcon';

// details - object with synergy details from the API
// count - the current synergy count
// ranking - synergy ranking: PARTIAL, BRONZE, SILVER, GOLD
// It isn't required because it may have no champion selected at all
export default function SynergyUnit({ count = 0, details = {}, ranking = 'PARTIAL' }) {
  const { bonuses } = details;
  const Icon = SynergyIcon[details.name] || SynergyIcon.NoSynergy;
  // Has at least one synergy active
  const hasSynergy = bonuses && count >= bonuses[0].needed;
  // Has at least one champion selected on the board
  const hasChampionSelected = count > 0;

  return (
    <S.Wrapper>
      {/* Show the synergy icon or no synergy */}
      <S.Icon>
        {!hasChampionSelected && <SynergyIcon.NoSynergy />}
        {hasChampionSelected && <Icon synergy={SynergyIcon[ranking.toUpperCase()]} />}
      </S.Icon>

      {/* Show the synergy count and progress, or no synergies text */}
      <S.Count>
        {!hasChampionSelected && <S.NoSynergies>No synergies yet</S.NoSynergies>}
        {hasChampionSelected && (
          <>
            <S.Quantity>{count}</S.Quantity>
            <div>
              <S.Name>{details.name}</S.Name>
              <S.Progress>{printSynergyProgress(hasSynergy, count, bonuses)}</S.Progress>
            </div>
          </>
        )}
      </S.Count>
    </S.Wrapper>
  );
}

SynergyUnit.propTypes = {
  details: PropTypes.object,
  count: PropTypes.number
};

// Print the synergy progress with active synergy
// * without active bonus - 1 / 2
// * has only 1 synergy bonus - 2
// * has 2 or more synergy bonus progress - 2 > 4 > 6
function printSynergyProgress(hasSynergy, count, bonuses) {
  // Without active bonus
  if (!hasSynergy) {
    return (
      <span>
        {count} / {bonuses[0].needed}
      </span>
    );
  }

  // Has only 1 synergy bonus
  if (bonuses.length === 1) {
    return count;
  }

  // Has 2 or more synergy bonus progress
  return bonuses.map((bonus, index, array) => {
    const isLastBonus = !(index + 1 < array.length);
    const isActiveBonus =
      count >= bonus.needed && (isLastBonus || count < array[index + 1].needed);

    // Return unable styled text on no active bonus
    if (!isActiveBonus) {
      return (
        <S.Unable key={index}>
          {bonus.needed}
          {!isLastBonus && ' › '}
        </S.Unable>
      );
    }

    // Return normal text on active bonus
    return (
      <span key={index}>
        {bonus.needed}
        {!isLastBonus && <S.Unable> › </S.Unable>}
      </span>
    );
  });
}
