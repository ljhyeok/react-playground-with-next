import React from 'react';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import { wrapper } from '../store/sagaStore';

const WrappedApp: React.FC<AppProps> = ({ Component, pageProps }: any) => (
  <Component {...pageProps} />
);

export default wrapper.withRedux(WrappedApp);
