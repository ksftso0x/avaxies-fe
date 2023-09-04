import { Networks } from "./blockchain";

const AVAX_MAINNET = {
    AVAXY_ADDRESS: "0xF2641206c78e26db3d6361beF73Ff1898eA13967",
};

const AVAX_TESTNET = {
    AVAXY_ADDRESS: "0xF2641206c78e26db3d6361beF73Ff1898eA13967",
};

export const getAddresses = (networkID: number) => {
    if (networkID === Networks.AVAX) return AVAX_MAINNET;
    if (networkID === Networks.FUJI) return AVAX_TESTNET;

    throw Error("Network don't support");
};
