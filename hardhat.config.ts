import "@nomicfoundation/hardhat-toolbox";
import "./packages/tasks/src";

import { getHardhatConfigNetworks } from "@zetachain/networks";
import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  networks: {
    ...getHardhatConfigNetworks(),
  },
  solidity: {
    compilers: [
      { version: "0.6.6" /** For uniswap v2 */ },
      { version: "0.8.7" },
      { version: "0.5.10" /** For create2 factory */ },
      { version: "0.5.16" /** For uniswap v2 core*/ },
      { version: "0.4.19" /** For weth*/ },
    ],
  },
};

export default config;
