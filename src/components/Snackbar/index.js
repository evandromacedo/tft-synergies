import React, { createContext, useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import * as S from './styled';

const SnackbarContext = createContext(null);

export default function Snackbar({ children }) {
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setOpen(false);
  //   }, 3000);
  //   setOpen(true);
  // }, []);

  const trigger = () => {
    if (open === true) {
      setOpen(false);
      setTimeout(() => {
        setOpen(true);
      }, 10);
    } else {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    }

    // className = 'open';
    // setOpen(true);
  };

  const close = () => {
    setOpen(false);
    // className = 'close';
  };

  return (
    <SnackbarContext.Provider>
      {children}
      <button style={{ color: 'white', fontSize: '10rem' }} onClick={trigger}>
        Trigger
      </button>
      <button style={{ color: 'white', fontSize: '10rem' }} onClick={close}>
        Close
      </button>
      <CSSTransition
        in={open}
        timeout={3000}
        // mountOnEnter
        // unmountOnExit
        classNames="my-node"
        // onEnter={() => setOpen(false)}
        // onExited={() => setOpen(false)}
      >
        <S.Wrapper>Snackbar</S.Wrapper>
      </CSSTransition>
    </SnackbarContext.Provider>
  );
}
