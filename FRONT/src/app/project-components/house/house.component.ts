import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {

  @Input() index: number = 0;
  @Input() title: string = '';
  @Input() owner: string = '';
  @Input() adress: string = '';
  @Input() price: string = '';
  @Input() picture: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
