import * as React from 'react';
import Head from 'next/head';
import Router from 'next/router'
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../utils/theme';
import createEmotionCache from '../utils/theme/createEmotionCache';
//Redux
import { Provider } from 'react-redux';
import { store } from '../redux/store';
//Route Event
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'


//Binding events
Router.events.on('routeChangeStart', ()=>NProgress.start())
Router.events.on('routeChangeComplete', ()=> NProgress.done())
Router.events.on('routeChangeError',()=>NProgress.done())

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}
