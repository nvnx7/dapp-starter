import { FC, ReactNode } from 'react';
import { UIProvider } from './ui';
import WalletProvider from './wallet';

const AppContext: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <WalletProvider>
      <UIProvider>{children}</UIProvider>
    </WalletProvider>
  );
};

export default AppContext;
