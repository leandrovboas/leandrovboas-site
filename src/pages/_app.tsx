import { ThemeProvider } from 'styled-components';
import { NextIntlProvider } from 'next-intl';
import NextApp, { AppContext, AppProps as NextAppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

import { useEffect, useState } from 'react';
import GlobalStyles from '../styles/global';
import theme from '../styles/theme';
import ProgressBarReader from '../components/ProgressBarReader';
import Footer from '../components/Footer';
import useScrollPosition from '../hooks/useScrollPosition';
import Header from '../components/Header';

type AppProps = NextAppProps & {
  messages: Record<string, unknown>;
  locale: string;
};

function MyApp({ Component, pageProps, messages, locale }: AppProps) {
  const scrollPosition = useScrollPosition();
  const [disabledFeatures, setDisabledFeatures] = useState<string[]>([]);

  const processFeatures = async () => {
    setDisabledFeatures(process.env.NEXT_PUBLIC_FEATURE_DISABLED.split(','));
  };

  useEffect(() => {
    processFeatures();
  }, []);

  return (
    <NextIntlProvider
      locale={locale}
      messages={{ ...messages, ...pageProps.messages }}
    >
      <ThemeProvider theme={theme}>
        <NextNProgress
          color={theme.primary}
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow
        />
        <ProgressBarReader />
        <Header />
        <Component {...pageProps} />
        <Footer scrollPosition={scrollPosition} />
        <GlobalStyles />
      </ThemeProvider>
    </NextIntlProvider>
  );
}

MyApp.getInitialProps = async function getInitialProps(context: AppContext) {
  const { router } = context;
  const locale = router.locale || router.defaultLocale || 'pt-BR';
  return {
    ...(await NextApp.getInitialProps(context)),
    messages: (await import(`../../i18n/${locale}.json`)).default,
    locale
  };
};

export default MyApp;
