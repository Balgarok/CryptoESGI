import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HouseService } from 'src/app/_services/house.service';
import { Test2Service } from 'src/app/_services/test2.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { House } from '../../_models/house.model';
import {Observable} from 'rxjs';
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
declare let require: any;

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
    file: any;
    private marketPlace: any;
    balance: any;
    pictureUrl!:Observable<String>;

  constructor(private houseService: HouseService, private formBuilder: FormBuilder,private router: Router, private testService: Test2Service, private storage: AngularFireStorage) { }

  ngOnInit(): void {
    this.initForm();

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
    const etherPrice = this.testService.convertPriceToEther(price);

    this.testService.sellRealty(title, description, etherPrice,location,size, nbRoom, nbBedroom,this.pictureUrl)
  }
  onFileChanged(event:any) {
    this.file = event.target.files[0]
    this.pictureUrl =this.uploadFile(this.file,Date.now().toString());

  }
  uploadFile(file: File,date_chiffre:string): Observable<String> {
    const filePath = `/images/house_${date_chiffre}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);
    const url= ref.getDownloadURL();

    return url;

  }
}
