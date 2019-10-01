import React, { createContext, useState, useEffect } from 'react';
import wait from 'waait';
import { CSSTransition } from 'react-transition-group';
import * as S from './styled';

const SnackbarContext = createContext(null);

export default function Snackbar({ children }) {
  const [open, setOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setOpen(false);
  //   }, 3000);
  //   setOpen(true);
  // }, []);

  // const timeout
  const setNewTimeout = async () => {
    clearTimeout(timeoutId);
    setTimeoutId(
      setTimeout(() => {
        setOpen(false);
      }, 3000)
    );
  };

  const trigger = async () => {
    if (open === true) {
      setOpen(false);
      await wait(250);
      setOpen(true);
      setNewTimeout();
    } else {
      setOpen(true);
      setNewTimeout();
    }

    console.log(timeoutId);
  };

  const close = () => {
    setOpen(false);
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
        timeout={500}
        mountOnEnter
        unmountOnExit
        classNames="my-node"
        // onEnter={() => setOpen(false)}
        // onExited={() => setOpen(false)}
      >
        <S.Wrapper>Snackbar</S.Wrapper>
      </CSSTransition>
    </SnackbarContext.Provider>
  );
}
