import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { House } from 'src/app/_models/house.model';
import { HouseService } from 'src/app/_services/house.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Test2Service } from '../../_services/test2.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  houses: any[] = [];
  downloadURL!: Observable<string>;
  accountNumber: any;
  productName: any;
  productPrice: any;
  show = true;
  totalProduct: any[] = [];
  private marketPlace: any;
  balance: any;
  constructor(private testService: Test2Service, private cd: ChangeDetectorRef, private storage: AngularFireStorage) { }

  ngOnInit(): void {
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
                    console.log(this.marketPlace)
                    this.marketPlace.methods.itemCount()
                      .call()
                      .then((value: number) => {
                        for (let i = 1; i <= value; i++) {
                          const product = this.marketPlace.methods.realties(i)
                            .call()
                            .then((realty: any) => {
                              this.show = false;
                              //this.storage.ref(realty.picture).getDownloadURL().pipe()
                              //realty.picture=this.storage.ref(realty.picture).getDownloadURL();
                              this.totalProduct.push(realty);
                              this.cd.detectChanges();
                            });
                        }
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
    this.houses = this.getHouses()
  }
  getHouses(): any[] {
    return this.totalProduct
    public owner?: string,
  public adress?: string,
  public price?: number,
  public size?: number,
  public nbBedRoom?: string,
  public nbRoom?: string,
  public about?: string,
  public picture = 'image-not-found.jpeg', */
  }
}
