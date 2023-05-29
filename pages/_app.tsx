import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import  AOSWrapper  from "../components/AOS"

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    // Higher order component
    <SessionProvider session={session}>
      <Provider store={store}>
        <Toaster />
        < AOSWrapper>
          <Component {...pageProps} />
        </ AOSWrapper>
      </Provider>
    </SessionProvider>
    
  );
  
}

export default MyApp;