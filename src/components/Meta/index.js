import React from 'react';
import { Helmet } from 'react-helmet';
import Favicon from '../../static/img/Favicon.ico';

/* This will be filled properly later */
export default function Meta() {
  return (
    <Helmet>
      <meta charset="utf-8" />
      <link rel="shortcut icon" href={Favicon} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="Web site created using create-react-app" />
      <link rel="manifest" href="manifest.json" />
      <title>TFT Synergies</title>
    </Helmet>
  );
}
