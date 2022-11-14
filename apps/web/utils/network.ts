import { defaultChainId, blockExplorers } from 'config/network';

export const getBlockExplorerUrl = (
  data: string,
  type: string = 'tx',
  chainId: number = defaultChainId,
) => {
  return `${blockExplorers[chainId]}/${type}/${data}`;
};
