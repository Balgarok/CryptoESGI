import {Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';

const marketPlaceArtifacts = require('../../../../build/contracts/MarketPlace.json');

declare var require:any;
const Web3 = require('web3');
declare let window: any;


@Injectable({
  providedIn: 'root'
})
export class Test2Service {
  account: any = null;
  private messageResult: any;
  private marketPlace: any;
  totalProduct: any = [];

  constructor() {
  }

  public checkAndInstantiateWeb3(): Promise<string> {
    return new Promise((resolve, reject) => {
      if (window.ethereum) {
        this.messageResult = 'connected';
        window.web3 = new Web3(window.ethereum);
        window.ethereum.enable();
        resolve(this.messageResult);
      } else if (window.web3) {
        this.messageResult = 'connected';
        window.web3 = new Web3(window.web3.currentProvider);
        resolve(this.messageResult);
      } else {
        this.messageResult = 'No Erthereum browser detected. you should consider trying MetaMask';
        reject(this.messageResult);
      }
    });
  }

  public loadBlockChainData(): Promise<string> {
    return new Promise((resolve, reject) => {
      const web3 = window.web3;
      const account = web3.eth.getAccounts();
      if (account !== undefined) {
        resolve(account);
      } else {
        this.messageResult = 'There is no account';
        reject(this.messageResult);
      }
    });
  }

  public getContract() {
    return new Promise((resolve) => {
      const web3 = window.web3;
      let networkId;
      web3.eth.net.getId()
        .then((netId: any) => {
          networkId = netId;
          const abi = marketPlaceArtifacts.abi;
          console.log(abi);
          const networkAddress = marketPlaceArtifacts.networks[networkId].address;
          this.marketPlace = new web3.eth.Contract(abi, networkAddress);
          resolve(this.marketPlace);
        });
    });
  }
  public async getAccount(): Promise<any> {
    if (this.account == null) {
      this.account = await new Promise((resolve, reject) => {
        window.web3.eth.getAccounts((err:any, retAccount:any) => {
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

  public convertPriceToEther(price:number) {
    const web3 = window.web3;
    return web3.utils.toWei(price.toString(), 'Ether');
  }

  public convertEtherToPrice(price:number) {
    const web3 = window.web3;
    return web3.utils.fromWei(price.toString(), 'Ether');
  }

  public getEtherBalance(account:any) {

    return new Promise((resolve) => {
      const web3 = window.web3;
      const balance = web3.eth.getBalance(account)
        .then((ba:any) => {
          resolve(web3.utils.fromWei(ba, 'Ether'));
        });
    });

  }
  public sellRealty(title:string, description:string, price: number,  location: string, size: number, nbRoom: number, nbBedroom: number,pictureUrl$:Observable<String>){
    const web3 = window.web3;


    pictureUrl$.subscribe(value=>{
      const pictureUrl=value
      web3.eth.getAccounts().then((accounts:any) =>
      {
        this.getContract()
        .then((contractRes: any) => {
          this.marketPlace = contractRes;
          console.log("hellloooo"+contractRes)
          this.marketPlace.methods.sell(title, description,location,size, nbRoom, nbBedroom, price, pictureUrl)
              .send({from: accounts[0]})
              .once('receipt', (receipt:any) => {
              this.totalProduct.push(receipt.events.RealtyCreated.returnValues);

              });
        });

      });
    });

    //console.log(this.account)
    /*this.marketPlace.methods.sell(title, description,location,size, nbRoom, nbBedroom, price, "")
      .send({from: "0x759F4183be9C9f2F0814Cef8132c8C31A8da58e8"})
      .once('receipt', (receipt:any) => {
        this.totalProduct.push(receipt.events.RealtyCreated.returnValues);
        //this.show = false;
      });*/
  }
  public getImage(){

  }
  public loggin(address:String){
    const web3 = window.web3;
    web3.eth.sign("steph",address)
  }
}
