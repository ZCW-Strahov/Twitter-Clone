import Head from 'next/head';

export function AppHead(): JSX.Element {
  return (
    <Head>
      <title>Echo</title>
      <meta name="og:title" content="Echo" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" key="site-manifest" />
      <meta name="echo:site" content="@dannycao" />
      <meta name="echo:card" content="summary_large_image" />
    </Head>
  );
}
