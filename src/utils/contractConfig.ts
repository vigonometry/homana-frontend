export const DAPP_ADDRESS = "0x0526F717b67B333Ac9f5e71D6fF950700c0403FC";

export const DAPP_ABI = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_docuId",
        "type": "string"
      }
    ],
    "name": "signDocumentClient",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_docuId",
        "type": "string"
      }
    ],
    "name": "rejectDocument",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_docuId",
        "type": "string"
      }
    ],
    "name": "rejectDocumentClient",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_docuId",
        "type": "string"
      }
    ],
    "name": "approveDocument",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_docuId",
        "type": "string"
      }
    ],
    "name": "createDocument",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_claimId",
        "type": "string"
      }
    ],
    "name": "createClaim",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_claimId",
        "type": "string"
      }
    ],
    "name": "rejectClaim",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_claimId",
        "type": "string"
      }
    ],
    "name": "approveClaim",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_docuId",
        "type": "string"
      }
    ],
    "name": "getSignatoriesDocument",
    "outputs": [
      {
        "internalType": "address[3]",
        "name": "",
        "type": "address[3]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_docuId",
        "type": "string"
      }
    ],
    "name": "getStatusDocument",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_claimId",
        "type": "string"
      }
    ],
    "name": "getSignatoriesClaim",
    "outputs": [
      {
        "internalType": "address[2]",
        "name": "",
        "type": "address[2]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_claimId",
        "type": "string"
      }
    ],
    "name": "getStatusClaim",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
]
