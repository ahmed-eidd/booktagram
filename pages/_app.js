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
    // apiKey: 'AIzaSyA6dFWd86WNPcx7YDqAkldnFxDsg6BKEyk',
    // authDomain: 'booktagram-f29df.firebaseapp.com',
    // projectId: 'booktagram-f29df',
    // storageBucket: 'booktagram-f29df.appspot.com',
    // messagingSenderId: '1041639497306',
    // appId: '1:1041639497306:web:504683d81bae6df8f10263',
    // measurementId: 'G-FN3XP1DL6W',

    apiKey: process.env.NEXT_PUBLIC_apiKey,
    authDomain:process.env.NEXT_PUBLIC_authDomain,
    projectId: process.env.NEXT_PUBLIC_projectId,
    storageBucket: process.env.NEXT_PUBLIC_storageBucket,
    messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
    appId:process.env.NEXT_PUBLIC_appId,
    measurementId: process.env.NEXT_PUBLIC_measurementId,
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

  const theme = extendTheme({
    styles: {
      global: {
        body: {
          color: '#21545F',
        },
      },
    },
  });

  const router = useRouter();
  const { locale, defaultLocale, pathname } = router;

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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossorigin="anonymous"
        />
      </Head>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <ChakraProvider theme={theme}>
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
