import { Component, OnInit } from '@angular/core';
import { House } from 'src/app/_models/house.model';
import { HouseService } from 'src/app/_services/house.service';
import { Web3JSService } from '../../_services/web3js.service';
import { TestService } from '../../_services/test.service';
import { Test2Service } from '../../_services/test2.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  houses: any[] = [];
  //
  accountNumber: any;
  productName: any;
  productPrice: any;
  show = true;
  totalProduct:any[] = [];
  private marketPlace: any;
  balance: any;
  constructor(private houseService: HouseService, private web3JS: Web3JSService, private testService: Test2Service/**/) { }

  ngOnInit(): void {
    this.houses = this.getHouses()
    this.web3JS.transferEther(10)
    this.testService;
    this.testService.checkAndInstantiateWeb3()
    .then((checkConn: any) => {
      if (checkConn === 'connected') {
        this.testService.loadBlockChainData()
          .then((accountData: any) => {
            this.accountNumber = accountData[0];
            this.testService.getEtherBalance(this.accountNumber)
              .then((data: any) => {
                this.balance = Number(data).toFixed(2);
                console.log(data);
              });
              this.testService.getContract()
                .then((contractRes: any) => {
                  if (contractRes) {
                    this.marketPlace = contractRes;
                    this.marketPlace.methods.itemCount()
                      .call()
                      .then((value:number) => {
                        /*for (let i = 1; i <= value; i++) {
                          const product = this.marketPlace.methods.realties(i)
                            .call()
                            .then((realties: any) => {
                              this.show = false;
                              this.totalProduct.push(realties);
                              //this.cd.detectChanges();
                            });
                        }*/
                        console.log('totalProduct ', this.totalProduct);
                      });
                  }
                });

          }, err => {
            console.log('account error', err);
          });
      }
    }, err => {
      alert(err);
    });
    //
    /*this.web3JS.checkAndInstantiateWeb3()
    .then((checkConn: any) => {
      if (checkConn === 'connected') {
        this.web3JS.loadBlockChainData()
          .then((accountData: any) => {
            this.accountNumber = accountData[0];
            this.web3JS.getEtherBalance(this.accountNumber)
              .then((data: any) => {
                this.balance = Number(data).toFixed(2);
                console.log(data);
              });

          }, err => {
            console.log('account error', err);
          });
      }
    }, err => {
      alert(err);
    });*/
  }
  getHouses():House[]{
    return this.houseService.houses
  }

}
