import { FC, PropsWithChildren } from 'react';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { keyAlchemyGoerli, keyAlchemyMumbai } from 'config/env';
import { APP_NAME } from 'config/constants';

const { chains, provider } = configureChains(
  [chain.goerli, chain.polygonMumbai],
  [alchemyProvider({ apiKey: keyAlchemyGoerli }), alchemyProvider({ apiKey: keyAlchemyMumbai })],
);

const { connectors } = getDefaultWallets({
  appName: APP_NAME,
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const WalletProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
    </WagmiConfig>
  );
};

export default WalletProvider;
