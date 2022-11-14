import '@rainbow-me/rainbowkit/styles.css';
import '@fontsource/anonymous-pro/400.css';

import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppContext from 'contexts';
import theme from 'theme';
import { ManagedModal } from 'components/common';

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  const [pageLoaded, setPageLoaded] = useState(false);

  // @todo Fix temp solution
  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <AppContext>
          {pageLoaded && <Component {...pageProps} />}
          <ManagedModal />
        </AppContext>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
