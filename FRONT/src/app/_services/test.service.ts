import { Injectable} from '@angular/core';
import Web3 from 'web3';
import {Observable} from 'rxjs';
const marketPlace = require('../../../../build/contracts/MarketPlace.json');

let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
declare let window: any;
@Injectable({
  providedIn: 'root'
})

export class TestService {
  private readonly eth: any;
  private enable: any;

  private account: any = null;
  constructor() {

      this.enable = this.enableMetaMaskAccount();


  }

  private async enableMetaMaskAccount(): Promise<any> {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }
  private async loadBlockchainData() {
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    console.log(accounts)
    const networkId = await web3.eth.net.getId()
  const networkData = marketPlace.networks[networkId]
  if(networkData) {
    const marketplace = web3.eth.Contract(marketPlace.abi, networkData.address)
    console.log(marketplace)
  } else {
      window.alert('Marketplace contract not deployed to detected network.')
    }
  }

}
