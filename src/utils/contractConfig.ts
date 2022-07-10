export const DAPP_ADDRESS = "0x4e70243E24F987EfF16951b451e955BdbfAFa146";

export const DAPP_ABI = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_docuId",
        type: "uint256",
      },
    ],
    name: "signDocumentClient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_docuId",
        type: "uint256",
      },
    ],
    name: "rejectDocument",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_docuId",
        type: "uint256",
      },
    ],
    name: "approveDocument",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "createDocument",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "createClaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_claimId",
        type: "uint256",
      },
    ],
    name: "rejectClaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_claimId",
        type: "uint256",
      },
    ],
    name: "approveClaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_docuId",
        type: "uint256",
      },
    ],
    name: "getSignatoriesDocument",
    outputs: [
      {
        internalType: "address[3]",
        name: "",
        type: "address[3]",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_docuId",
        type: "uint256",
      },
    ],
    name: "getStatusDocument",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_claimId",
        type: "uint256",
      },
    ],
    name: "getSignatoriesClaim",
    outputs: [
      {
        internalType: "address[2]",
        name: "",
        type: "address[2]",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_claimId",
        type: "uint256",
      },
    ],
    name: "getStatusClaim",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
];
