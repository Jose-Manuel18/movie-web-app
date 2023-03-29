import "@/styles/globals.css";
import type { AppProps } from "next/app";

import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from "@tanstack/react-query";
import "animate.css/animate.min.css";
import { DescriptionContextProvider } from "@/context/DescriptionContext";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <DescriptionContextProvider>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </DescriptionContextProvider>
    </QueryClientProvider>
  );
}
