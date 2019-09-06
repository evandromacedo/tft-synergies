// Return the index of the active bonus
// * without synergy bonus - null
// * has only 1 synergy bonus - 0
// * has 2 or more synergy bonus - activeBonusIndex
export default function getSynergyIndex(count, bonuses) {
  const hasSynergy = count >= bonuses[0].needed;

  // Without active bonus
  if (!hasSynergy) {
    return null;
  }

  // Has only 1 synergy bonus
  if (bonuses.length === 1) {
    return 0;
  }

  // Get the index of active bonus on bonuses array
  let activeBonusIndex = 0;

  bonuses.some((bonus, index, array) => {
    const isLastBonus = !(index + 1 < array.length);
    const isActiveBonus =
      count >= bonus.needed && (isLastBonus || count < array[index + 1].needed);

    if (isActiveBonus) {
      activeBonusIndex = index;
      return true;
    }

    return false;
  });

  return activeBonusIndex;
}
