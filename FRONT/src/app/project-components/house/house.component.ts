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

  //imgPath = '936c20b968e1827f0c141ccb57152b6ef809e18e_rueil-carre-arsenal-appartement-web-min.webp';

  constructor() { }

  ngOnInit(): void {
  }

}
