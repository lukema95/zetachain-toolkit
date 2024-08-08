/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  SwapHelperLib,
  SwapHelperLibInterface,
} from "../../contracts/SwapHelperLib";

const _abi = [
  {
    inputs: [],
    name: "AdditionsOverflow",
    type: "error",
  },
  {
    inputs: [],
    name: "CantBeIdenticalAddresses",
    type: "error",
  },
  {
    inputs: [],
    name: "CantBeZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "IdenticalAddresses",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientInputAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientLiquidity",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidPath",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidPathLength",
    type: "error",
  },
  {
    inputs: [],
    name: "MultiplicationsOverflow",
    type: "error",
  },
  {
    inputs: [],
    name: "NotEnoughToPayGasFee",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongGasContract",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddress",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "contract SystemContract",
        name: "systemContract",
        type: "SystemContract",
      },
      {
        internalType: "address",
        name: "zrc20",
        type: "address",
      },
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    name: "getMinOutAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "minOutAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
    ],
    name: "uniswapv2PairFor",
    outputs: [
      {
        internalType: "address",
        name: "pair",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6113cb610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c8063b864987914610045578063c63585cc14610075575b600080fd5b61005f600480360381019061005a9190610e1b565b6100a5565b60405161006c9190611028565b60405180910390f35b61008f600480360381019061008a9190610dc8565b610519565b60405161009c9190610fe4565b60405180910390f35b60006060600267ffffffffffffffff8111156100c4576100c361128f565b5b6040519080825280602002602001820160405280156100f25781602001602082028036833780820191505090505b509050848160008151811061010a57610109611260565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050838160018151811061015957610158611260565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050600061021d8773ffffffffffffffffffffffffffffffffffffffff1663d936a0126040518163ffffffff1660e01b815260040160206040518083038186803b1580156101de57600080fd5b505afa1580156101f2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102169190610d9b565b858461058b565b9050600367ffffffffffffffff81111561023a5761023961128f565b5b6040519080825280602002602001820160405280156102685781602001602082028036833780820191505090505b50915085826000815181106102805761027f611260565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508673ffffffffffffffffffffffffffffffffffffffff1663569541b96040518163ffffffff1660e01b815260040160206040518083038186803b15801561030057600080fd5b505afa158015610314573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103389190610d9b565b8260018151811061034c5761034b611260565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050848260028151811061039b5761039a611260565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050600061045f8873ffffffffffffffffffffffffffffffffffffffff1663d936a0126040518163ffffffff1660e01b815260040160206040518083038186803b15801561042057600080fd5b505afa158015610434573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104589190610d9b565b868561058b565b9050806001825161047091906110d5565b8151811061048157610480611260565b5b6020026020010151826001845161049891906110d5565b815181106104a9576104a8611260565b5b6020026020010151116104e35780600182516104c591906110d5565b815181106104d6576104d5611260565b5b602002602001015161050c565b81600183516104f291906110d5565b8151811061050357610502611260565b5b60200260200101515b9350505050949350505050565b6000806000610528858561070d565b91509150858282604051602001610540929190610f76565b60405160208183030381529060405280519060200120604051602001610567929190610fa2565b6040516020818303038152906040528051906020012060001c925050509392505050565b60606002825110156105c9576040517f20db826700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b815167ffffffffffffffff8111156105e4576105e361128f565b5b6040519080825280602002602001820160405280156106125781602001602082028036833780820191505090505b509050828160008151811061062a57610629611260565b5b60200260200101818152505060005b6001835161064791906110d5565b8110156107055760008061069c8786858151811061066857610667611260565b5b60200260200101518760018761067e919061104e565b8151811061068f5761068e611260565b5b6020026020010151610829565b915091506106c58484815181106106b6576106b5611260565b5b6020026020010151838361093b565b846001856106d3919061104e565b815181106106e4576106e3611260565b5b602002602001018181525050505080806106fd9061118b565b915050610639565b509392505050565b6000808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610776576040517fcb1e7cfe00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16106107b05782846107b3565b83835b8092508193505050600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610822576040517f78b507da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b9250929050565b60008060006108388585610a30565b509050600080610849888888610b4c565b73ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801561088e57600080fd5b505afa1580156108a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108c69190610e82565b506dffffffffffffffffffffffffffff1691506dffffffffffffffffffffffffffff1691508273ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff1614610925578082610928565b81815b8095508196505050505050935093915050565b600080841415610977576040517f098fb56100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008314806109865750600082145b156109bd576040517fbb55fd2700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006109d46103e586610be290919063ffffffff16565b905060006109eb8483610be290919063ffffffff16565b90506000610a1683610a086103e889610be290919063ffffffff16565b610c3e90919063ffffffff16565b90508082610a2491906110a4565b93505050509392505050565b6000808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610a99576040517fbd969eb000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1610610ad3578284610ad6565b83835b8092508193505050600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b45576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b9250929050565b60008373ffffffffffffffffffffffffffffffffffffffff1663e6a4390584846040518363ffffffff1660e01b8152600401610b89929190610fff565b60206040518083038186803b158015610ba157600080fd5b505afa158015610bb5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd99190610d9b565b90509392505050565b600080610bf88385610c9a90919063ffffffff16565b809350819250505080610c37576040517f5797276a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5092915050565b600080610c548385610cee90919063ffffffff16565b809350819250505080610c93576040517fa259879500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5092915050565b6000806000841415610cb3576001600091509150610ce7565b6000838502905083858281610ccb57610cca611231565b5b0414610cde576000809250925050610ce7565b60018192509250505b9250929050565b6000806000838501905084811015610d0d576000809250925050610d16565b60018192509250505b9250929050565b600081359050610d2c81611322565b92915050565b600081519050610d4181611322565b92915050565b600081359050610d5681611339565b92915050565b600081519050610d6b81611350565b92915050565b600081359050610d8081611367565b92915050565b600081519050610d958161137e565b92915050565b600060208284031215610db157610db06112be565b5b6000610dbf84828501610d32565b91505092915050565b600080600060608486031215610de157610de06112be565b5b6000610def86828701610d1d565b9350506020610e0086828701610d1d565b9250506040610e1186828701610d1d565b9150509250925092565b60008060008060808587031215610e3557610e346112be565b5b6000610e4387828801610d47565b9450506020610e5487828801610d1d565b9350506040610e6587828801610d1d565b9250506060610e7687828801610d71565b91505092959194509250565b600080600060608486031215610e9b57610e9a6112be565b5b6000610ea986828701610d5c565b9350506020610eba86828701610d5c565b9250506040610ecb86828701610d86565b9150509250925092565b610ede81611109565b82525050565b610eed81611109565b82525050565b610f04610eff82611109565b6111d4565b82525050565b610f1b610f168261111b565b6111e6565b82525050565b6000610f2e602083611043565b9150610f39826112d0565b602082019050919050565b6000610f51600183611043565b9150610f5c826112f9565b600182019050919050565b610f7081611171565b82525050565b6000610f828285610ef3565b601482019150610f928284610ef3565b6014820191508190509392505050565b6000610fad82610f44565b9150610fb98285610ef3565b601482019150610fc98284610f0a565b602082019150610fd882610f21565b91508190509392505050565b6000602082019050610ff96000830184610ee4565b92915050565b60006040820190506110146000830185610ed5565b6110216020830184610ed5565b9392505050565b600060208201905061103d6000830184610f67565b92915050565b600081905092915050565b600061105982611171565b915061106483611171565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561109957611098611202565b5b828201905092915050565b60006110af82611171565b91506110ba83611171565b9250826110ca576110c9611231565b5b828204905092915050565b60006110e082611171565b91506110eb83611171565b9250828210156110fe576110fd611202565b5b828203905092915050565b600061111482611151565b9050919050565b6000819050919050565b600061113082611109565b9050919050565b60006dffffffffffffffffffffffffffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600063ffffffff82169050919050565b600061119682611171565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156111c9576111c8611202565b5b600182019050919050565b60006111df826111f0565b9050919050565b6000819050919050565b60006111fb826112c3565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b60008160601b9050919050565b7f96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f600082015250565b7fff00000000000000000000000000000000000000000000000000000000000000600082015250565b61132b81611109565b811461133657600080fd5b50565b61134281611125565b811461134d57600080fd5b50565b61135981611137565b811461136457600080fd5b50565b61137081611171565b811461137b57600080fd5b50565b6113878161117b565b811461139257600080fd5b5056fea26469706673582212200cfb8bfcd1e1ce90ae3341161db50ec139df6b1f755b577055e02710b74062a864736f6c63430008070033";

type SwapHelperLibConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SwapHelperLibConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SwapHelperLib__factory extends ContractFactory {
  constructor(...args: SwapHelperLibConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SwapHelperLib> {
    return super.deploy(overrides || {}) as Promise<SwapHelperLib>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SwapHelperLib {
    return super.attach(address) as SwapHelperLib;
  }
  override connect(signer: Signer): SwapHelperLib__factory {
    return super.connect(signer) as SwapHelperLib__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SwapHelperLibInterface {
    return new utils.Interface(_abi) as SwapHelperLibInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SwapHelperLib {
    return new Contract(address, _abi, signerOrProvider) as SwapHelperLib;
  }
}
