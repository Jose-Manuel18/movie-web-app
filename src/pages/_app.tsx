import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from "@tanstack/react-query"
export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}
