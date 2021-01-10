import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {

  @Input() title: string = '';
  @Input() owner: string = '';
  @Input() adress: string = '';
  @Input() price: string = '';
  @Input() picture: string = '';

  /*
  title: string = 'Un bel appartement';
  owner: string = 'Proprio';
  adress: string = '120 rue Pasteur';
  price: string = '10';
  picture: string = 'test';
*/ 
  constructor() { }

  ngOnInit(): void {
  }

}
