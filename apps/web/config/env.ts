export const env = process.env.NODE_ENV as string;
export const isDev = env === 'development';

export const rpcUrlGoerli = process.env.NEXT_PUBLIC_RPC_URL_GOERLI as string;
export const rpcUrlPolygonMumbai = process.env.NEXT_PUBLIC_RPC_POLYGON_MUMBAI as string;

export const keyAlchemyGoerli = rpcUrlGoerli.split('/').pop() as string;
export const keyAlchemyMumbai = rpcUrlPolygonMumbai.split('/').pop() as string;
