/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  Revertable,
  RevertableInterface,
} from "../../../contracts/Revert.sol/Revertable";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "amount",
            type: "uint64",
          },
          {
            internalType: "bytes",
            name: "revertMessage",
            type: "bytes",
          },
        ],
        internalType: "struct RevertContext",
        name: "revertContext",
        type: "tuple",
      },
    ],
    name: "onRevert",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class Revertable__factory {
  static readonly abi = _abi;
  static createInterface(): RevertableInterface {
    return new utils.Interface(_abi) as RevertableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Revertable {
    return new Contract(address, _abi, signerOrProvider) as Revertable;
  }
}