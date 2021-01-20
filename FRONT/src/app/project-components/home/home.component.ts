import { Component, OnInit } from '@angular/core';
import { House } from 'src/app/_models/house.model';
import { HouseService } from 'src/app/_services/house.service';
import { Web3JSService } from '../../_services/web3js.service';


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
  constructor(private houseService: HouseService, private web3JS: Web3JSService/**/) { }

  ngOnInit(): void {
    this.houses = this.getHouses()
    this.web3JS.transferEther(10)
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
