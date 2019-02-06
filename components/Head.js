import * as React from 'react';
import NextHead from 'next/head';

const GA_TRACKING_ID =
  process.env.NODE_ENV === 'development' ? '' : 'UA-134090905-1';

export default function Head() {
  return (
    <NextHead>
      <title>The Culture — Creative Collective</title>
      <meta
        name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@theculturecc" />
      <meta name="twitter:title" content="The Culture — Creative Collective" />
      <meta name="twitter:description" content="Welcome to The Culture" />
      <meta
        name="twitter:image"
        content="https://theculture.cc/static/the-culture-creative-collective.png"
      />
      <meta name="twitter:creator" content="@theculturecc" />

      <meta
        property="og:image"
        content="https://theculture.cc/static/the-culture-creative-collective.png"
      />
      <meta property="og:title" content="The Culture — Creative Collective" />
      <meta property="og:url" content="https://theculture.cc" />
      <meta
        property="og:site_name"
        content="The Culture — Creative Collective"
      />
      <meta property="og:description" content="Welcome to The Culture" />

      <meta name="description" content="Welcome to The Culture" />

      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `,
        }}
      />
    </NextHead>
  );
}
