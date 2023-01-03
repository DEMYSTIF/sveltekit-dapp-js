import { ethers } from 'ethers';
import { contract } from './details.json';
import { abi } from './artifacts/contracts/Cert.sol/Cert.json';

const provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545');
let signer = provider.getSigner();
export const contractInstance = new ethers.Contract(contract, abi, signer);
