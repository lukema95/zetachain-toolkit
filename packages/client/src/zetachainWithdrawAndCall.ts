import { ethers } from "ethers";

import GatewayABI from "./abi/GatewayZEVM.sol/GatewayZEVM.json";
import ZRC20ABI from "./abi/ZRC20.sol/ZRC20.json";
import { ZetaChainClient } from "./client";

export const zetachainWithdrawAndCall = async function (
  this: ZetaChainClient,
  args: {
    amount: string;
    callOnRevert: boolean;
    function: string;
    gasLimit: number;
    gasPrice: ethers.BigNumber;
    gatewayZetaChain: string;
    onRevertGasLimit: number;
    receiver: string;
    revertAddress: string;
    revertMessage: string;
    types: string;
    values: any[];
    zrc20: string;
  }
) {
  const signer = this.signer;
  const { utils } = ethers;

  const gateway = new ethers.Contract(
    args.gatewayZetaChain,
    GatewayABI.abi,
    signer
  );

  const revertOptions = {
    abortAddress: "0x0000000000000000000000000000000000000000",
    callOnRevert: args.callOnRevert,
    onRevertGasLimit: args.onRevertGasLimit,
    revertAddress: args.revertAddress,
    revertMessage: utils.hexlify(utils.toUtf8Bytes(args.revertMessage)),
  };

  const txOptions = {
    gasLimit: args.gasLimit,
    gasPrice: args.gasPrice,
  };

  const functionSignature = utils.id(args.function).slice(0, 10);
  const encodedParameters = utils.defaultAbiCoder.encode(
    JSON.parse(args.types),
    args.values
  );

  const message = utils.hexlify(
    utils.concat([functionSignature, encodedParameters])
  );
  const zrc20 = new ethers.Contract(args.zrc20, ZRC20ABI.abi, signer);
  const decimals = await zrc20.decimals();
  const value = utils.parseUnits(args.amount, decimals);
  const [gasZRC20, gasFee] = await zrc20.withdrawGasFeeWithGasLimit(
    args.gasLimit
  );
  if (args.zrc20 === gasZRC20) {
    const approveGasAndWithdraw = await zrc20.approve(
      args.gatewayZetaChain,
      value.add(gasFee),
      txOptions
    );
    await approveGasAndWithdraw.wait();
  } else {
    const gasZRC20Contract = new ethers.Contract(
      gasZRC20,
      ZRC20ABI.abi,
      signer
    );
    const approveGas = await gasZRC20Contract.approve(
      args.gatewayZetaChain,
      gasFee,
      txOptions
    );
    await approveGas.wait();
    const approveWithdraw = await zrc20.approve(
      args.gatewayZetaChain,
      value,
      txOptions
    );
    await approveWithdraw.wait();
  }
  const method =
    "withdrawAndCall(bytes,uint256,address,bytes,uint256,(address,bool,address,bytes,uint256))";
  const tx = await gateway[method](
    utils.hexlify(args.receiver),
    value,
    args.zrc20,
    message,
    args.gasLimit,
    revertOptions,
    txOptions
  );
  return tx;
};
