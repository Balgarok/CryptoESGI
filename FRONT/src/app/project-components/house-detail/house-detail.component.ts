import { ChangeDetectorRef,Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { House } from 'src/app/_models/house.model';
import { HouseService } from 'src/app/_services/house.service';
import { Test2Service } from '../../_services/test2.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize  } from 'rxjs/operators';

declare let require: any;
@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.scss']
})
export class HouseDetailComponent implements OnInit {

  index: number = 0;
  curHouse: any;
  private marketPlace: any;
  private accountNumber:any;
  T:any[]= [];
  show = true;
  downloadURL!: any;
  constructor(private route: ActivatedRoute,private storage: AngularFireStorage,private houseService: HouseService,private readonly router: Router,private testService: Test2Service, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {

    this.route.params.subscribe(param =>{
      this.index = param['index'];
    })
    this.testService.getContract().then((contractRes: any) => {
      if (contractRes) {

        this.marketPlace = contractRes;
        console.log(this.marketPlace)
        const realty = this.marketPlace.methods.realties(this.index)
                .call()
                .then((realty: any) => {
                  this.show = false;
                  this.curHouse = realty
                  //this.downloadURL="this.storage.ref(realty.picture).getDownloadURL()";

                  //console.log(this.downloadURL)
                  this.cd.detectChanges();
                  console.log(this.curHouse)
                });
      }
    })

  }
  public purchase(house: any) {
    this.show = true;
    this.testService.checkAndInstantiateWeb3()
    .then((checkConn: any) => {
      if (checkConn === 'connected') {
        this.testService.loadBlockChainData()
          .then((accountData: any) => {
            this.accountNumber=accountData[0];
            console.log(this.accountNumber)
            this.marketPlace.methods.purchase(house.id)
            .send({from: this.accountNumber, value: house.price})
            .once('receipt', (receipt:any) => {
              console.log('receipt ', receipt);
              //this.totalProduct.push(receipt.events.RealtySelled.returnValues);
              this.show = false;
              this.router.navigateByUrl('/');
            })
            .on('error', (error:any) => {
              console.log('receipt ', error);
              this.show = false;
            });
          });
        };
      })
    //console.log(this.accountNumber+" "+house.price)

  /**/
  }
  public convertEtherToPrice(value:number):number{
    return this.testService.convertEtherToPrice(value)
  }

}
