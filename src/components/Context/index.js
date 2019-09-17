import React, { useContext, useMemo, createContext } from 'react';
import useSynergies from '../../store';

const DispatchContext = createContext(null);
const StoreContext = createContext(null);

export default function Context({ children }) {
  const { state, ...dispatch } = useSynergies();
  const stateValue = useMemo(() => state, [state]);

  return (
    <DispatchContext.Provider value={{ ...dispatch }}>
      <StoreContext.Provider value={stateValue}>{children}</StoreContext.Provider>
    </DispatchContext.Provider>
  );
}

export const useDispatch = () => useContext(DispatchContext);
export const useState = () => useContext(StoreContext);
