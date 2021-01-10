import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HouseService } from 'src/app/_services/house.service';
import { House } from '../../_models/house.model';

@Component({
  selector: 'app-share-house',
  templateUrl: './share-house.component.html',
  styleUrls: ['./share-house.component.scss']
})
export class ShareHouseComponent implements OnInit {

  houseForm!: FormGroup;

  constructor(private houseService: HouseService, private formBuilder: FormBuilder,private router: Router) { }

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
    this.houseService.addHouse(newHouse);

    this.router.navigate(['/home']);
  }

}