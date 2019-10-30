import React from 'react';
import * as S from './styled';

export default function Home() {
  return (
    <S.Wrapper>
      <S.Title>About TFT Synergies</S.Title>
      <S.Text>
        TFT Synergies isn’t endorsed by Riot Games and doesn’t reflect the views or
        opinions of Riot Games or anyone officially involved in producing or managing
        League of Legends. League of Legends and Riot Games are trademarks or registered
        trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.
      </S.Text>
      <S.Text>
        This is an open-source project{' '}
        <a
          target="blank"
          href="https://github.com/evandromacedo/tft-synergies/blob/master/LICENSE.md"
        >
          licensed as MIT
        </a>
        . You can check out the source code on the{' '}
        <a target="blank" href="https://github.com/evandromacedo/tft-synergies">
          GitHub repository
        </a>
        . If you want to contribute with this project in some way, check the{' '}
        <a
          target="blank"
          href="https://github.com/evandromacedo/tft-synergies/blob/master/CONTRIBUTING.md"
        >
          CONTRIBUTING
        </a>{' '}
        on how to get started.
      </S.Text>
      <S.Text>
        It makes use of public JSON API's to pull initial data from{' '}
        <a
          target="blank"
          href="https://solomid-resources.s3.amazonaws.com/blitz/tft/data/champions.json"
        >
          champions
        </a>
        ,{' '}
        <a
          target="blank"
          href="https://solomid-resources.s3.amazonaws.com/blitz/tft/data/items.json"
        >
          items
        </a>
        ,{' '}
        <a
          target="blank"
          href="https://solomid-resources.s3.amazonaws.com/blitz/tft/data/classes.json"
        >
          classes
        </a>{' '}
        and{' '}
        <a
          target="blank"
          href="https://solomid-resources.s3.amazonaws.com/blitz/tft/data/origins.json"
        >
          origins
        </a>
        .
      </S.Text>
      <S.Title>Google Analytics usage</S.Title>
      <S.Text>
        Google Analytics is a web analytics service offered by Google that tracks and
        reports website traffic. Google uses the data collected to track and monitor the
        use of our Service. This data is shared with other Google services. Google may use
        the collected data to contextualize and personalize the ads of its own advertising
        network.
      </S.Text>
      <S.Text>
        You can opt-out of having made your activity on the Service available to Google
        Analytics by installing the Google Analytics opt-out browser add-on. The add-on
        prevents the Google Analytics JavaScript (ga.js, analytics.js, and dc.js) from
        sharing information with Google Analytics about visits activity.
      </S.Text>
      <S.Text>
        For more information on the privacy practices of Google, please visit the Google
        Privacy & Terms web page:{' '}
        <a target="blank" href="https://policies.google.com/privacy?hl=en">
          https://policies.google.com/privacy?hl=en
        </a>
      </S.Text>
    </S.Wrapper>
  );
}
