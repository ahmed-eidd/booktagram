import '../styles/globals.scss';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';
import * as locales from '../content/locale';
import Head from 'next/head';
import store from '../service/configureStore';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { locale, defaultLocale, pathname } = router;
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Provider store={store}>
        <IntlProvider
          locale={locale}
          defaultLocale={defaultLocale}
          messages={locales[locale]}
        >
          <Component {...pageProps} />
        </IntlProvider>
      </Provider>
    </>
  );
}

export default MyApp;
