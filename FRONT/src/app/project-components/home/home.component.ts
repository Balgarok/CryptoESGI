import { Component, OnInit } from '@angular/core';
import { HouseService } from 'src/app/_services/house.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  houses: any[] = [];

  constructor(private houseService: HouseService) { }

  ngOnInit(): void {
    this.houses = this.houseService.houses
  }

}
