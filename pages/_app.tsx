import React from 'react';
import '../styles/globals.css';
import store from 'store/redux-toolkit/configure';
import { AppProps } from 'next/app';
import { wrapper } from '../store/sagaStore';
import { Provider } from 'react-redux';

const WrappedApp: React.FC<AppProps> = ({ Component, pageProps }: any) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default wrapper.withRedux(WrappedApp);
