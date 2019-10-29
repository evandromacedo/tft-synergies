import PropTypes from 'prop-types';
import React from 'react';
import withSizes from 'react-sizes';
import * as S from './styled';
import SynergyIcon from '../SynergyIcon';
import theme from '../App/theme';
import { getSynergyIndex } from '../../utils';
import ReactHover from 'react-hover';
import SynergyDetails from '../SynergyDetails';

// details - object with synergy details from the API
// count - the current synergy count
// ranking - synergy ranking: PARTIAL, BRONZE, SILVER, GOLD
// None of them is required because it may have no champion selected at all
function SynergyUnit({
  count = 0,
  details = {},
  ranking = 'partial',
  showDetails = true,
  isMobile = false
}) {
  const { bonuses } = details;

  // Has at least one synergy active
  const hasSynergy = bonuses && count >= bonuses[0].needed;
  // Has at least one champion selected on the board
  const hasChampionSelected = count > 0;

  // Settings for the hover on synergy
  const reactHoverSettings = {
    followCursor: true,
    shiftX: 15,
    shiftY: 10
  };

  // Show or hide details based on props
  const hideClass = showDetails ? '' : 'hide';

  return (
    <ReactHover options={reactHoverSettings}>
      <ReactHover.Trigger type="trigger">
        <S.Wrapper>
          {/* Show the synergy icon or no synergy */}
          <S.Icon>
            {!hasChampionSelected && <SynergyIcon />}
            {hasChampionSelected && (
              <SynergyIcon classOrOrigin={details.key} type={ranking} />
            )}
          </S.Icon>

          {/* Show the synergy count and progress, or no synergies text */}
          <S.Count className={hideClass}>
            {!hasChampionSelected && (
              <S.NoSynergies>{isMobile ? 'None' : 'No synergies yet'}</S.NoSynergies>
            )}
            {hasChampionSelected && (
              <>
                <S.Quantity>{count}</S.Quantity>
                <div>
                  <S.Name>{details.name}</S.Name>
                  <S.Progress>
                    {printSynergyProgress(hasSynergy, count, bonuses)}
                  </S.Progress>
                </div>
              </>
            )}
          </S.Count>
        </S.Wrapper>
      </ReactHover.Trigger>
      <ReactHover.Hover type="hover">
        {hasChampionSelected ? (
          <SynergyDetails
            synergyIndex={getSynergyIndex(count, bonuses)}
            details={details}
          />
        ) : null}
      </ReactHover.Hover>
    </ReactHover>
  );
}

SynergyUnit.propTypes = {
  count: PropTypes.number,
  details: PropTypes.object,
  ranking: PropTypes.string
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

// This is the "small" breakpoint on theme.js
const mapSizesToProps = ({ width }) => ({
  isMobile: width <= parseInt(theme.small)
});

// Named export for testing, and default for using
export default withSizes(mapSizesToProps)(SynergyUnit);
