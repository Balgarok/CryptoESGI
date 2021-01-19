import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HouseService } from 'src/app/_services/house.service';
import { House } from '../../_models/house.model';
import { Web3JSService } from '../../_services/web3js.service';

@Component({
  selector: 'app-share-house',
  templateUrl: './share-house.component.html',
  styleUrls: ['./share-house.component.scss']
})
export class ShareHouseComponent implements OnInit {

  houseForm!: FormGroup;
    //
    accountNumber: any;
    productName: any;
    productPrice: any;
    show = true;
    totalProduct:any[] = [];
    private marketPlace: any;
    balance: any;

  constructor(private houseService: HouseService, private formBuilder: FormBuilder,private router: Router, private web3JS: Web3JSService) { }

  ngOnInit(): void {
    this.initBlockchain();
    this.initForm();
  }
  initBlockchain(){
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

  initForm(){
    this.houseForm = this.formBuilder.group({
      title: ['', Validators.required],
      owner: ['', Validators.required],
      adress: ['', Validators.required],
      price: ['', Validators.required],
      size: ['', Validators.required],
      nbBedRoom: ['', Validators.required],
      nbRoom:['', Validators.required],
      about: ['', Validators.required]
    })
  }

  onSubmitForm(){
    const formValue = this.houseForm?.value;
    const newHouse = new House(
      formValue['title'],
      formValue['owner'],
      formValue['adress'],
      formValue['price'],
      formValue['size'],
      formValue['nbBedRoom'],
      formValue['nbRoom'],
      formValue['about']
    );
    //this.houseService.addHouse(newHouse);
    this.sellRealty(formValue['title'],formValue['about'],formValue['price'],formValue['adress'],formValue['size'],formValue['nbRoom'],formValue['nbBedRoom']);
    this.router.navigate(['/home']);
  }
  private sellRealty(title:string, description:string, price: number,  location: string, size: number, nbRoom: number, nbBedroom: number) {
    console.log(title+location+description+price+size+nbBedroom+nbRoom)
    this.show = true;
    /*const etherPrice = this.web3JS.convertPriceToEther(price);
    this.marketPlace.methods.sell(title, description,location,size, nbRoom, nbBedroom, etherPrice, "")
      .send({from: this.accountNumber})
      .once('receipt', (receipt:any) => {
        this.totalProduct.push(receipt.events.RealtyCreated.returnValues);
        this.show = false;
      });
      this.marketService.sellRealty(title, description, etherPrice,location,size, nbRoom, nbBedroom)*/
  }

}
