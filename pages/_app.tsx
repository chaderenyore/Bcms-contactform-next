import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { BCMSImageConfig } from 'next-plugin-bcms/components';

BCMSImageConfig.localeImageProcessing = true;
BCMSImageConfig.cmsOrigin = process.env.NEXT_PUBLIC_BCMS_ORIGIN || '';
BCMSImageConfig.publicApiKeyId =
  process.env.NEXT_PUBLIC_BCMS_PUBLIC_KEY_ID || '';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
