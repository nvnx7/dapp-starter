export const chains = {
  GOERLI: 5,
  POLYGON_MUMBAI: 80001,
};

export const defaultChainId = chains.GOERLI;

export const blockExplorers = {
  [chains.GOERLI]: 'https://goerli.etherscan.io',
  [chains.POLYGON_MUMBAI]: 'https://mumbai.polygonscan.com',
};
