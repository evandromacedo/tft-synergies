import React, { createContext, useState, useEffect } from 'react';
import * as S from './styled';

const SnackbarContext = createContext(null);

export default function Snackbar({ children }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 3000);
    setOpen(true);
  }, []);
  return (
    <SnackbarContext.Provider>
      {children}
      <S.Wrapper className={open ? 'open' : ''}>Snackbar</S.Wrapper>
    </SnackbarContext.Provider>
  );
}
