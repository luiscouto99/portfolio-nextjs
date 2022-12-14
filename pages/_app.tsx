import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import PageLoader from '../components/PageLoader/PageLoader';
import { useState } from 'react';
import GoogleAnalytics from '../components/GoogleAnalytics';

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [layoutLoading, setLayoutLoading] = useState(true);

  const loader = () => setIsLoading(false);
  const layout = () => setLayoutLoading(false);

  return (
    <>
      {isLoading && <PageLoader loader={loader} layout={layout} />}
      <Layout isLoading={layoutLoading}>
        <GoogleAnalytics />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
