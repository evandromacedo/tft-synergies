import React from 'react';
import { Helmet } from 'react-helmet';

/* This will be filled properly later */
export default function Meta() {
  return (
    <Helmet>
      <meta charset="utf-8" />
      <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="Web site created using create-react-app" />
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      <title>TFT Synergies</title>
    </Helmet>
  );
}
