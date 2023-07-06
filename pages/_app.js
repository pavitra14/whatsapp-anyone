import '../styles/global.css';
import 'react-intl-tel-input/dist/main.css';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return <>
  <Component {...pageProps} />
  <Analytics />
  </>
}