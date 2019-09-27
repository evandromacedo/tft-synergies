import React, { useState, useEffect } from 'react';
import * as S from './styled';

export default function Snackbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 3000);
    setOpen(true);
  }, []);

  return <S.Wrapper className={open ? 'open' : ''}>Snackbar</S.Wrapper>;
}
