import { ethers } from "ethers";
import { DAPP_ABI, DAPP_ADDRESS } from "./contractConfig";

declare const window: any;

const web3 = new ethers.providers.Web3Provider(window.ethereum);
web3.send("eth_requestAccounts", [])
const signer = web3.getSigner();
const MyContract = new ethers.Contract(DAPP_ADDRESS, DAPP_ABI, signer);

//signer address
export const getSignerAddress = async () => await signer.getAddress()

//document functions
export const createDocumentBC = async () => await MyContract.createDocument();
export const signDocumentClient = async (id: any) =>
  await MyContract.signDocumentClient(id);
export const approveDocumentBC = async (id: any) => await MyContract.approveDocument(id);
export const rejectDocumentBC = async (id: any) => await MyContract.rejectDocument(id);
export const getDocumentSignatories = async (id: any) =>
  await MyContract.getSignatoriesDocument(id);
export const getDocumentStatus = async (id: any) =>
  await MyContract.getStatusDocument(id);

//claim functions
export const createClaimBC = async () => await MyContract.createClaim();
export const approveClaimBC = async (id: any) => await MyContract.approveClaim(id);
export const rejectClaimBC = async (id: any) => await MyContract.rejectClaim(id);
export const getClaimSignatories = async (id: any) =>
  await MyContract.getSignatoriesClaim(id);
export const getClaimStatus = async (id: any) => await MyContract.getStatusClaim(id);


