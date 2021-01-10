import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { House } from 'src/app/_models/house.model';
import { HouseService } from 'src/app/_services/house.service';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.scss']
})
export class HouseDetailComponent implements OnInit {

  index: number = 0;
  curHouse: any; //House = new House();

  constructor(private route: ActivatedRoute,private houseService: HouseService) { }

  ngOnInit(): void {

    this.route.params.subscribe(param =>{
      this.index = param['index'];
    })
    this.curHouse = this.houseService.houses[this.index];
  }

}
