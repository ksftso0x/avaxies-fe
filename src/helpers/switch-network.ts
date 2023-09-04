const switchRequest = () => {
    return window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0xa869" }],
    });
};

const addChainRequest = () => {
    return window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
            {
                chainId: "0xa86a",
                chainName: "Avalanche Mainnet",
                rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
                blockExplorerUrls: ["https://cchain.explorer.avax.network/"],
                nativeCurrency: {
                    name: "AVAX",
                    symbol: "AVAX",
                    decimals: 18,
                },
            },
            {
                chainId: "0xa869",
                chainName: "Avalanche Testnet",
                rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
                blockExplorerUrls: ["https://testnet.snowtrace.io/"],
                nativeCurrency: {
                    name: "AVAX",
                    symbol: "AVAX",
                    decimals: 18,
                },
            },
        ],
    });
};

export const switchNetwork = async () => {
    if (window.ethereum) {
        try {
            await switchRequest();
        } catch (error: any) {
            if (error.code === 4902) {
                try {
                    await addChainRequest();
                    await switchRequest();
                } catch (addError) {
                    console.log(error);
                }
            }
            console.log(error);
        }
    }
};
