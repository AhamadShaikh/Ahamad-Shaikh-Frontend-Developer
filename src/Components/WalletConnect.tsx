import React from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { arbitrum, mainnet } from "wagmi/chains";

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const projectId = "9cdbe4deba9e27558791812dc260a6d9";

const chains = [mainnet, arbitrum] as const;
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  enableWalletConnect: true,
  enableInjected: true,
  enableEIP6963: true,
  enableCoinbase: true,
});

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true,
});

export const WallectConnect = () => {
  const { open } = useWeb3Modal();
  return (
    <button
      className="text-white text-center font-semibold poppins text-[0.6rem] lg:text-[0.75rem] leading-[0.8rem] lg:leading-[1.125rem] tracking-normal p-2 bg-main-red rounded-md"
      onClick={() => open()}
    >
      Connect Wallet
    </button>
  );
};