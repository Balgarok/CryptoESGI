import { Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import Web3 from 'web3';

declare let require: any;
declare let window: any;
const marketPlaceArtifacts = require('../../../../build/contracts/MarketPlace.json');


@Injectable({
  providedIn: 'root'
})
export class Web3JSService {

  private account: any = null;
  private readonly web3: any;
  private enable: any;

  constructor() {
    if (window.ethereum === undefined) {
      alert('Non-Ethereum browser detected. Install MetaMask');
    } else {
      if (typeof window.web3 !== 'undefined') {
        this.web3 = window.web3.currentProvider;
      } else {
        this.web3 = new Web3.providers.HttpProvider('http://localhost:8545');
      }
      console.log('transfer.service :: constructor :: window.ethereum');
      window.web3 = new Web3(window.ethereum);
      console.log('transfer.service :: constructor :: this.web3');
      console.log(this.web3);
      this.enable = this.enableMetaMaskAccount();
    }

  }

  private async enableMetaMaskAccount(): Promise<any> {
    let enable = false;
    await new Promise((resolve, reject) => {
      enable = window.ethereum.enable();
    });
    return Promise.resolve(enable);
  }

  private async getAccount(): Promise<any> {
    console.log('web3.service :: getAccount :: start');
    if (this.account == null) {
      this.account = await new Promise((resolve, reject) => {
        console.log('web3.service :: getAccount :: eth');
        console.log(window.web3.eth);
        window.web3.eth.getAccounts((err:any, retAccount:any) => {
          console.log('web3.service :: getAccount: retAccount');
          console.log(retAccount);
          if (retAccount.length > 0) {
            this.account = retAccount[0];
            resolve(this.account);
          } else {
            alert('web3.service :: getAccount :: no accounts found.');
            reject('No accounts found.');
          }
          if (err != null) {
            alert('web3.service :: getAccount :: error retrieving account');
            reject('Error retrieving account');
          }
        });
      }) as Promise<any>;
    }
    return Promise.resolve(this.account);
  }
  public async getUserBalance(): Promise<any> {
    const account = await this.getAccount();
    console.log('web3.service :: getUserBalance :: account');
    console.log(account);
    return new Promise((resolve, reject) => {
      window.web3.eth.getBalance(account, function(err:any, balance:any) {
        console.log('web3.service :: getUserBalance :: getBalance');
        console.log(balance);
        if (!err) {
          const retVal = {
            account: account,
            balance: balance
          };
          console.log('web3.service :: getUserBalance :: getBalance :: retVal');
          console.log(retVal);
          resolve(retVal);
        } else {
          reject({account: 'error', balance: 0});
        }
      });
    }) as Promise<any>;
  }
  transferEther(value: any) {
    const that = this;
    console.log('web3.service :: transferEther to: ' +
      value.transferAddress + ', from: ' + that.account + ', amount: ' + value.amount);
    return new Promise((resolve, reject) => {
      console.log('web3.service :: transferEther :: marketPlaceArtifacts');
      console.log(marketPlaceArtifacts);
      //const contract = require('@truffle/contract');
      /*const marketPlaceContract = contract(marketPlaceArtifacts);
      marketPlaceContract.setProvider(that.web3);
      console.log('web3.service :: transferEther :: transferContract');
      console.log(marketPlaceContract);
      /*marketPlaceContract.deployed().then(function(instance:any) {
        return instance.pay(
          value.marketPlaceAddress,
          {
            from: that.account,
            value: value.amount
          });
      }).then(function(status:any) {
        if (status) {
          return resolve({status: true});
        }
      }).catch(function(error:any) {
        console.log(error);
        return reject('web3.service error');
      });*/
    });
  }

}

