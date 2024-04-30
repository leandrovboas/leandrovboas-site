import type { AppProps } from "next/app";
import StyledComponentsRegistry from "@/Lib/registry";
import NextNProgress from "nextjs-progressbar";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import GlobalStyles from "@/styles/globals";
import useScrollPosition from "@/hooks/useScrollPosition";
import ProgressBarReader from "@/components/ProgressBarReader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  const scrollPosition = useScrollPosition();

  return (
    <StyledComponentsRegistry>
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
    </StyledComponentsRegistry>
  );
}
