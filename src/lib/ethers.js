import { ethers } from 'ethers';
import { contract, deployer } from './details.json';
import { abi } from './artifacts/contracts/Cert.sol/Cert.json';

const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
let signer = provider.getSigner();
export const contractInstance = new ethers.Contract(contract, abi, signer);
