import "@/css/tailwind.css";
import "@/css/extra.css";
import "katex/dist/katex.css";
import "@fontsource/inter";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import siteMetadata from "@/data/siteMetadata";
import LayoutWrapper from "@/components/LayoutWrapper";
import ProgressBar from "react-scroll-progress-bar";
import ScrollTop from "@/components/ScrollTop";

const isDevelopment = process.env.NODE_ENV === "development";
const isSocket = process.env.SOCKET;

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = () => {
  // console.log('onRouteChangeStart triggered');
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  // console.log('onRouteChangeComplete triggered');
  NProgress.done();
};

Router.onRouteChangeError = () => {
  // console.log('onRouteChangeError triggered');
  NProgress.done();
};

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <ProgressBar bgcolor="#007fa4" />
      <ScrollTop />
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket}
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  );
}
