import React from 'react';
import SnackbarProvider, { useSnackbar } from '.';
import { storiesOf } from '@storybook/react';

function SnackbarStory() {
  const [open, close] = useSnackbar();

  return (
    <>
      <button
        style={{ color: 'white', fontSize: '5rem' }}
        onClick={() => open(<p>Junior bassssssss</p>)}
      >
        Trigger
      </button>
      <button style={{ color: 'white', fontSize: '5rem' }} onClick={close}>
        Close
      </button>
    </>
  );
}

storiesOf('Snackbar', module).add('Snackbar', () => (
  <SnackbarProvider timeout={4000} className="teste">
    <SnackbarStory />
  </SnackbarProvider>
));
