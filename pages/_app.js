import '../styles/globals.scss';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import * as locales from '../content/locale';
import Head from 'next/head';
import store from '../service/configureStore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import firebase from 'firebase/app';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

function MyApp({ Component, pageProps }) {
  const fbconfing = {
    apiKey: 'AIzaSyA6dFWd86WNPcx7YDqAkldnFxDsg6BKEyk',
    authDomain: 'booktagram-f29df.firebaseapp.com',
    projectId: 'booktagram-f29df',
    storageBucket: 'booktagram-f29df.appspot.com',
    messagingSenderId: '1041639497306',
    appId: '1:1041639497306:web:504683d81bae6df8f10263',
    measurementId: 'G-FN3XP1DL6W',
  };

  const rrfConfing = {
    userProfie: 'users',
  };

  // firebase.initializeApp(fbconfing);
  if (!firebase.apps.length) {
    firebase.initializeApp(fbconfing);
  } else {
    firebase.app(); // if already initialized, use that one
  }
  const rrfProps = {
    firebase,
    config: rrfConfing,
    dispatch: store.dispatch,
  };

  // const theme = extendTheme({
  //   styles: {
  //     global: {
  //       'html': {
  //         fontSize: '62.5%',
  //       },
  //     },
  //   },
  // });

  const router = useRouter();
  const { locale, defaultLocale, pathname } = router;
  console.log(locale, defaultLocale);
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <ChakraProvider>
            <IntlProvider
              locale={locale}
              defaultLocale={defaultLocale}
              messages={locales[locale]}
            >
              <Component {...pageProps} />
              <ToastContainer />
            </IntlProvider>
          </ChakraProvider>
        </ReactReduxFirebaseProvider>
      </Provider>
    </>
  );
}

export default MyApp;
